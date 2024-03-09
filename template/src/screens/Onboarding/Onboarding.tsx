import { TextContainer, WrapperContainer } from "@components/atoms";
import fontFamily from "@constants/fontFamily";
import type { AuthStackParamList } from "@navigations/AuthStack";
import type { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import {
  height,
  moderateScale,
  scale,
  verticalScale,
  width,
} from "@utils/scaling";
import React, { useRef, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";

const onBoardData = [{}, {}, {}];

const Onboarding = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [index, setIndex] = useState<number>(0);
  const { styles, theme } = useStyles(stylesheet);

  const isDarkMode = UnistylesRuntime.themeName === "dark";
  const scrollRef = useRef<any>();

  const handleScroll = (event: any) => {
    const newIndex = Number(
      (event.nativeEvent.contentOffset.x / (width - 20)).toFixed(0)
    );
    setIndex(newIndex);
  };

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
          ref={scrollRef}
        >
          {onBoardData.map((val, i) => (
            <View
              style={{
                width,
                paddingHorizontal: moderateScale(16),
              }}
              key={String(i)}
            >
              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/onboarding-concept-illustration_114360-1085.jpg",
                }}
                resizeMode="contain"
                style={{
                  height: height / 2.1,
                  width: "100%",
                }}
              />
              <TextContainer
                isDynamicText
                text="Connect people around the world"
                style={{
                  fontSize: scale(32),
                  marginVertical: verticalScale(16),
                  lineHeight: scale(42),
                }}
              />
              <TextContainer
                isDynamicText
                text="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
                style={{
                  fontSize: scale(14),
                  fontFamily: fontFamily.regular,
                }}
              />
            </View>
          ))}
        </ScrollView>
        <View style={styles.flexView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {onBoardData.map((val, i) => (
              <View key={String(i)} style={styles.dotStyle(i === index)} />
            ))}
          </View>
          <View>
            <TextContainer
              text="SKIP"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: verticalScale(16),
  },
  dotStyle: (isSelected: boolean) => ({
    height: moderateScale(6),
    width: moderateScale(6),
    borderRadius: moderateScale(4),
    marginRight: moderateScale(8),
    backgroundColor: isSelected ? theme.colors.darkwhite : theme.colors.grey,
  }),
  flexView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: moderateScale(16),
  },
}));

export default Onboarding;
