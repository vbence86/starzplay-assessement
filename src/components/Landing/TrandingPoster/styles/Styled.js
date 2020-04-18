// TrandingPoster Styles

import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: scale(.95);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const TrandingPosterStyled = styled.div`
`;

export const FadeInPicture = styled.picture`
  display: inline-block;
  animation: ${fadeIn} .25s linear;
`;
