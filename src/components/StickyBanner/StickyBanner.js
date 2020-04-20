import React from "react";
import { useStore } from 'react-context-hook';
import {
  ButtonStyled,
  HeadingStyled,
  StickyBannerStyled
} from "./styles/Styled";

function StickyBanner({ className, title }) {
  const [isMiniModeActive] = useStore('miniMode', false);

  return (
    <StickyBannerStyled className={className}>
      {title && (
        <HeadingStyled
          rank={5}
          text={title}
          size="default"
          ariaLabelledby={title}
        />
      )}
      <ButtonStyled
        label="Email"
        icon="email"
        buttonType="secondary"
        ariaLabel="Email"
      />
      <ButtonStyled
        label="Mobile"
        icon="phone"
        buttonType="primary"
        ariaLabel="Mobile"
      />
      { !isMiniModeActive
        ? <ButtonStyled
            label="Facebook"
            icon="facebook"
            buttonType={"primary"}
            backgroundColor={"#4760a0"}
            ariaLabel="Facebook"
          />
        : null}
    </StickyBannerStyled>
  );
}

export default StickyBanner;
