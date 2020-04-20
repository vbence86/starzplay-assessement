import React from "react";
import { useStore } from 'react-context-hook';
import FooterNav from "../FooterNav";
import { FooterStyled, LogoStyled, AppLogosStyled } from "./styles/Styled";

function Footer() {
  const [isMiniModeActive] = useStore('miniMode', false);
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyled>
      <FooterNav />
      {!isMiniModeActive && <AppLogosStyled />}
      <div>
        <small>© {currentYear}</small>
        <LogoStyled />
      </div>
    </FooterStyled>
  );
}

export default Footer;
