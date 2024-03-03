import { ImageContainer, TextContainer } from "@components/atoms";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import {
  moderateScale,
  scale,
  verticalScale,
} from "@screens/Onboarding/scaling";
import React, { PropsWithChildren } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

type SectionProps = PropsWithChildren<{
  title?: string;
  style?: object;
  onPress?: () => void;
}>;

function HeaderComp(props: SectionProps): React.JSX.Element {
  return (
    <>
      <View style={{ ...styles.headerStyle, ...props.style }}>
        <Image
          source={{
            uri: "https://m.media-amazon.com/images/I/31Cd9UQp6eL._AC_UF1000,1000_QL80_.jpg",
          }}
          style={{
            height: moderateScale(50),
            width: moderateScale(50),
            borderRadius: moderateScale(25),
          }}
        />
        <TextContainer style={styles.titleStyle} text={`${props.title}`} />

        <Pressable onPress={props.onPress}>
          <ImageContainer source={imagePath.icSetting} />
        </Pressable>
      </View>
    </>
  );
}
export default React.memo(HeaderComp);

const styles = StyleSheet.create({
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
});
