import React from "react";
import { Image as RNImage } from "react-native";
import type { ImageProps } from "react-native";

const RemoteImage: React.FC<ImageProps> = ({ ...rest }) => (
  <RNImage {...rest} />
);
export default React.memo(RemoteImage);
