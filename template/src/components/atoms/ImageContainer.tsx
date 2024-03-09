import React from "react";
import { ImageProps, Image as RNImage } from "react-native";
import { useStyles } from "react-native-unistyles";

const ImageContainer: React.FC<ImageProps> = ({ ...rest }) => {
  const { theme } = useStyles();
  return <RNImage tintColor={theme.colors.typography} {...rest} />;
};
export default ImageContainer;
