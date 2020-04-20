import React, { useState } from "react";
import { useStore } from 'react-context-hook';
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

const Tabs = props => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedHeader, setSelectedHeader] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isMiniModeActive] = useStore('miniMode', false);
  const { layout, size } = props;

  const TabContent = () => layout[selectedTab].tabContent;
  
  const handleClick = async (tab, index) => {
    // no further user actions allowed whilst the content is being loaded
    if (isLoading) return;

    setIsLoading(true);
    setSelectedHeader(index);
    setSelectedTab(await calculateTabToShow(index));
    setIsLoading(false);

    props.onTabSelected && props.onTabSelected(tab);
  };

  cached[selectedTab] = selectedTab;

  return (
    <TabsContainerStyled>
      <TabListStyled size={size}>
        {layout
            .filter(tab => !isMiniModeActive || tab.visibleInMiniMode)
            .map((tab, index) => (
              <Tab
                isDisabled={isLoading}
                isActive={selectedHeader === index}
                key={tab.tabTitle}
                label={tab.tabTitle}
                onClick={() => handleClick(tab, index)}
                icon={tab.tabIcon}
              />
            ))}
      </TabListStyled>
      <TabContentContainerStyled>
        { isLoading
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

export default Tabs;
