import styled, { keyframes } from 'styled-components';

const wavesAnimation = keyframes`
    0% {background-position: -468px 0}
    100% {background-position: 468px 0}
`;

const waves = `animation-fill-mode: forwards;
background: #f6f7f8;
background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
background-size: 1000px 104px;
border-radius: 4px;`;

export const LoaderContainer = styled.div`
  margin: 12px;
`;

export const PlaceHolderLoading = styled.div`
  height: 20px;
  margin: 8px 0;
  animation: ${wavesAnimation} 1s linear infinite;
  ${waves}
`;

export const ImageLoading = styled.div`
  height: 300px;
  margin: 8px 0;
  animation: ${wavesAnimation} 1s linear infinite;
  ${waves}
`;
