import RoundImageBorder from "@components/atoms/RoundImageBorder";
import imagePath from "@constants/imagePath";
import { useNavigation } from "@react-navigation/native";
import { moderateScale } from "@utils/scaling";
import React, { PropsWithChildren } from "react";
import { Pressable, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type SectionProps = PropsWithChildren<{
  style?: object;
  leftImage?: string;
  rightImage?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}>;

function HeaderComp({
  style,
  leftImage = imagePath.icBack, // set default value
  rightImage = imagePath.icShare, // set default value
  onPressLeft,
  onPressRight,
}: SectionProps): React.JSX.Element {
  const navigation = useNavigation();

  const { styles } = useStyles(stylesheet);

  return (
    <>
      <View style={{ ...styles.headerStyle, ...style }}>
        <Pressable
          onPress={!!onPressLeft ? onPressLeft : () => navigation.goBack()}
        >
          <RoundImageBorder source={leftImage} />
        </Pressable>
        <Pressable onPress={onPressRight}>
          <RoundImageBorder source={rightImage} />
        </Pressable>
      </View>
    </>
  );
}
export default React.memo(HeaderComp);

const stylesheet = createStyleSheet(() => ({
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: moderateScale(60),
  },
}));
