import React, { Component } from "react";
import {
  TabsContainerStyled,
  TabListStyled,
  TabStyled,
  TabContentContainerStyled,
  IconStyled,
  LabelStyled
} from "./styles/Styled";
import Loader from 'react-loader-spinner';

// The spec defines the following rule:
// "It's important to note that each tab will always have the same content."
// So therefore we're using here local caching mechanism to avoid unnecessary computation
const cached = {};

async function calculateTabToShow(tab) {
  if (cached[tab] === undefined) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    cached[tab] = tab;
  }  
  return cached[tab];
}

const Tab = props => {
  const { label, icon, size, className, onClick, isActive, isDisabled } = props;
  return (
    <TabStyled className={className} onClick={onClick} size={size} isActive={isActive}>
      {icon && <IconStyled name={icon} isActive={isActive} isDisabled={isDisabled} />}
      {label && <LabelStyled isActive={isActive} title={label} isDisabled={isDisabled}>{label}</LabelStyled>}
    </TabStyled>
  );
};

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: props.selectedTab || 0,
      selectedHeader: props.selectedTab || 0,
    };
  }

  handleClick = async (tab, index) => {
    // no further user actions allowed whilst the content is being loaded
    if (this.state.isLoading) return;

    this.setState({
      isLoading: true,
      selectedHeader: index,
    });
    this.setState({ selectedTab: await calculateTabToShow(index) });
    this.setState({ isLoading: false });

    this.props.onTabSelected && this.props.onTabSelected(tab);
  };

  render() {
    const { layout, size } = this.props;
    const TabContent = () => layout[this.state.selectedTab].tabContent;
    return (
      <TabsContainerStyled>
        <TabListStyled size={size}>
          {layout.map((tab, index) => (
            <Tab
              isDisabled={this.state.isLoading}
              isActive={this.state.selectedHeader === index}
              key={tab.tabTitle}
              label={tab.tabTitle}
              onClick={() => this.handleClick(tab, index)}
              icon={tab.tabIcon}
            />
          ))}
        </TabListStyled>
        <TabContentContainerStyled>
          { this.state.isLoading
              ? <Loader
                 type="TailSpin"
                 color="#00ffff"
                 height={100}
                 width={100}
                />
              : <TabContent />
          }
        </TabContentContainerStyled>
      </TabsContainerStyled>
    );
  }
}

export default Tabs;
