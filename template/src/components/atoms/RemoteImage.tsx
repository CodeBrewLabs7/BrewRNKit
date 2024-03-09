import React from 'react';
import { ImageProps, Image as RNImage } from 'react-native';

const RemoteImage: React.FC<ImageProps> = ({ ...rest }) => {
  return (
    <RNImage
      {...rest}
    />
  );
};

export default React.memo(RemoteImage);
