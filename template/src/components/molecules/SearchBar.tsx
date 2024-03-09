import { ImageContainer, TextContainer } from "@components/atoms";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import { moderateScale, scale } from "@utils/scaling";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type SectionProps = PropsWithChildren<{
  title: string;
  style?: object;
  textStyle?: object;
}>;

function SearchBar({
  title,
  style,
  textStyle,
}: SectionProps): React.JSX.Element {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={[styles.container, style]}>
      <ImageContainer source={imagePath.icSearch} />
      <TextContainer style={[styles.titleStyle, textStyle]} text={title} />
    </View>
  );
}
export default React.memo(SearchBar);

const stylesheet = createStyleSheet((theme) => ({
  container: {
    height: moderateScale(56),
    borderWidth: moderateScale(1.2),
    borderColor: theme.colors.opacity50,
    borderRadius: moderateScale(36),
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: moderateScale(12),
  },
  titleStyle: {
    fontSize: scale(14),
    fontFamily: fontFamily.regular,
    color: theme.colors.opacity50,
    marginLeft: moderateScale(16),
  },
}));
