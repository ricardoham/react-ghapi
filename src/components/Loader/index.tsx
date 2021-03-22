import React from 'react';
import { LoaderContainer, PlaceHolderLoading, ImageLoading } from './styles';

const Loader = () => {
  return (
    <LoaderContainer>
      {Array.from(Array(1)).map((_, index: number) => (
        <PlaceHolderLoading key={index} />
      ))}
      <ImageLoading />
    </LoaderContainer>
  );
};

export default Loader;
