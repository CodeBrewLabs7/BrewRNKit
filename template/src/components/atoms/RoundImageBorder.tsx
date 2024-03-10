import { moderateScale } from "@utils/scaling";
import React from "react";
import { ImageProps, ImageStyle, ViewStyle, Image as RNImage, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(90,90,90,0.5)",
    backgroundColor: theme.colors.background,
  },
}));

interface CustomImageProps extends ImageProps {
  imageStyle?: object;
  viewStyle?: object;
}

const defaultProps = {
  imageStyle: {} as ImageStyle,
  viewStyle: {} as ViewStyle,
};

// Define the component
const RoundImageBorder: React.FC<CustomImageProps> = ({ imageStyle, viewStyle, ...props }) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <View style={[styles.container, viewStyle]}>
      <RNImage tintColor={theme.colors.darkwhite} {...props} />
    </View>
  );
};

RoundImageBorder.defaultProps = defaultProps;

export default React.memo(RoundImageBorder);
