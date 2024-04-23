import { ImageContainer, TextContainer } from "@components/atoms";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import { moderateScale, scale, verticalScale } from "@utils/scaling";
import React from "react";
import type { PropsWithChildren } from "react";
import { Image, Pressable, View, ViewStyle } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet(() => ({
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: moderateScale(60),
  },
  titleStyle: {
    fontSize: scale(24),
    lineHeight: scale(27),
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
  profileImage: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
  },
}));

type SectionProps = PropsWithChildren<{
  title?: string;
  style?: ViewStyle;
  onPress?: () => void;
}>;

const HeaderComp = ({ title, onPress, style }: SectionProps): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);
  return (
    <View key="header" style={{ ...styles.headerStyle, ...style }}>
      <Image
        key="profileImage"
        source={{
          uri: "https://m.media-amazon.com/images/I/31Cd9UQp6eL._AC_UF1000,1000_QL80_.jpg",
        }}
        style={styles.profileImage}
      />
      <TextContainer key="title" style={styles.titleStyle} text={`${title}`} />
      <Pressable key="setting" onPress={onPress}>
        <ImageContainer source={imagePath.icSetting} />
      </Pressable>
    </View>
  );
};

export default React.memo(HeaderComp);
