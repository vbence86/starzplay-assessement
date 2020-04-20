import React, { useState, useEffect } from "react";
import { useStore } from 'react-context-hook';
import { Dropdown } from "../Dropdown";
import Menu from "../Menu";
import { Logo } from "../Logo";
import { HeaderStyled, BurgerStyled, ListStyled } from "./styles/Styled";

function getLanguageSelectorItems() {
  return [
    {
      content: "English",
      value: "en"
    },
    {
      content: "العربية",
      value: "ar"
    },
    {
      content: "Français",
      value: "fr"
    }
  ];
}

function Header() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isMiniModeActive, setIsMiniModeActive] = useStore('miniMode', false);

  useEffect(() => {
    document.body.classList.toggle("noScrolling", isBurgerMenuOpen);
  });

  function handleOpened() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function handleMiniMode() {
    const className = 'miniMode';
    setIsMiniModeActive(document.body.classList.toggle(className, !document.body.classList.contains(className)));
  }

  return (
    <HeaderStyled>
      <BurgerStyled
        isOpened={isBurgerMenuOpen}
        onClick={handleOpened}
        ariaLabel="Menu"
      />
      <Menu isOpened={isBurgerMenuOpen} />
      <Logo />
      <nav>
        <ListStyled
          data={{
            explore: {
              text: "Explore",
              url: "#",
              role: "link",
              isVisible: !isMiniModeActive
            },
            toggleMiniMode: {
              text: "Toggle Mini Mode",
              url: "#",
              role: "button",
              onClick: handleMiniMode
            }
          }}
          link
        />
        { !isMiniModeActive 
            ? <Dropdown
                items={getLanguageSelectorItems()}
                icon={"languageGlobe"}
                optionsPosition={"center"}
                selectedItem={0}
              />
            : null}
      </nav>
    </HeaderStyled>
  );
}

export default Header;
