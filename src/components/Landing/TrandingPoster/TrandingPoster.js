import React, { useState } from "react";
import Loader from 'react-loader-spinner';
import { TrandingPosterStyled, FadeInPicture } from "./styles/Styled";
import { AsyncBridge } from "./helpers/AsyncBridge";
import { fetchImageURL } from './services/image-service';

const serviceDecorator = response => ({ url: response });

const TrandingImage = ({ url }) => (
  <FadeInPicture>
    <img src={url} alt="What's trending" />
  </FadeInPicture>
);

const TrandingLoader = () => (
  <Loader
   type="TailSpin"
   color="#00ffff"
   height={100}
   width={100}
  />
);

const TrandingPoster = ({
  children,
}) => {
  return (
    <TrandingPosterStyled
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={"alt"}
    >
      <AsyncBridge
        promise={fetchImageURL().then(serviceDecorator)}
        resolved={<TrandingImage />}
        pending={<TrandingLoader />}
        />
    </TrandingPosterStyled>
  );
};

export default TrandingPoster;
