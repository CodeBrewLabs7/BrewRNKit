import RoundImageBorder from "@components/atoms/RoundImageBorder";
import imagePath from "@constants/imagePath";
import { useNavigation } from "@react-navigation/native";
import { moderateScale } from "@utils/scaling";
import React from "react";
import type { PropsWithChildren } from "react";
import { Pressable, View, ViewStyle, ImageSourcePropType } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet(() => ({
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: moderateScale(60),
  },
}));

type SectionProps = PropsWithChildren<{
  style?: object;
  leftImage?: ImageSourcePropType;
  rightImage?: ImageSourcePropType;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}>;

const defaultProps = {
  style: {} as ViewStyle,
  leftImage: imagePath.icBack as ImageSourcePropType,
  rightImage: imagePath.icShare as ImageSourcePropType,
  onPressLeft: undefined,
  onPressRight: undefined,
};
const HeaderComp = ({
  style,
  leftImage,
  rightImage,
  onPressLeft,
  onPressRight,
}: SectionProps): React.JSX.Element => {
  const navigation = useNavigation();

  const { styles } = useStyles(stylesheet);

  return (
    <View style={{ ...styles.headerStyle, ...style }}>
      <Pressable onPress={onPressLeft || (() => navigation.goBack())}>
        <RoundImageBorder source={leftImage} />
      </Pressable>
      <Pressable onPress={onPressRight}>
        <RoundImageBorder source={rightImage} />
      </Pressable>
    </View>
  );
};

HeaderComp.defaultProps = defaultProps;

export default React.memo(HeaderComp);
