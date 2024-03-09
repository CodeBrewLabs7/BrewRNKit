import { moderateScale } from "@utils/scaling";
import React from "react";
import { ImageProps, Image as RNImage, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

interface CustomImageProps extends ImageProps {
  imageStyle?: any;
  viewStyle?: any;
}
// Define the component
const RoundImageBorder: React.FC<CustomImageProps> = ({
  imageStyle,
  viewStyle,
  ...props
}) => {
  const { styles,theme } = useStyles(stylesheet);
  return (
    <View style={[styles.container,viewStyle]}>
      <RNImage
        tintColor={theme.colors.darkwhite}
        {...props}
      />
    </View>
  );
};

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

export default React.memo(RoundImageBorder);
