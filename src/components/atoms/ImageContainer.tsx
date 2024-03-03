import React from 'react';
import Colors from '@constants/colors';
import { ImageProps, Image as RNImage, useColorScheme } from 'react-native';


// Define the component
const ImageContainer: React.FC<ImageProps> = ({ ...rest }) => {

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <RNImage
      tintColor={isDarkMode ? Colors.white: Colors.black}
      {...rest}
    />
  );
};



export default ImageContainer;
