import { ImageContainer, TextContainer } from "@components/atoms";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import { moderateScale, scale, verticalScale } from "@utils/scaling";
import type { PropsWithChildren } from "react";
import React from "react";
import { View, ViewStyle } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet(() => ({
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(32),
  },
  titleStyle: {
    fontSize: scale(27),
    fontFamily: fontFamily.semiBold,
  },
  descStyle: {
    fontSize: scale(14),
    lineHeight: scale(27),
    marginTop: verticalScale(8),
    opacity: 0.5,
    marginBottom: verticalScale(24),
    fontFamily: fontFamily.regular,
  },
}));

type SectionProps = PropsWithChildren<{
  title: string;
  description: string;
  style?: ViewStyle;
}>;

const AuthHeader = ({ title, description, style = {} }: SectionProps): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);
  return (
    <>
      <View style={[styles.headerStyle, style]}>
        <ImageContainer source={imagePath.icStar} />
        <ImageContainer
          style={{ marginLeft: moderateScale(16), width: "100%" }}
          source={imagePath.icLine}
          resizeMode="cover"
        />
      </View>
      <TextContainer style={styles.titleStyle} text={title} />
      <TextContainer style={styles.descStyle} text={description} />
    </>
  );
};

export default React.memo(AuthHeader);
