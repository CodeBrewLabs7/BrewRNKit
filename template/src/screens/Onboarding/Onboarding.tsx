//import libraries
import {TextContainer,WrapperContainer} from "@components/atoms";
import Colors from "@constants/colors";
import fontFamily from "@constants/fontFamily";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {Image,ScrollView,StyleSheet,View,useColorScheme} from "react-native";
import { AuthStackParamList } from "@navigations/AuthStack";
import { height, moderateScale, scale, verticalScale, width } from "./scaling";

const onBoardData = [{}, {}, {}];

const Onboarding = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [index, setIndex] = useState<number>(0);
  const isDarkMode = useColorScheme() === "dark";
  const scrollRef = useRef<any>();

  const handleScroll = (event: any) => {
    const newIndex = Number((event.nativeEvent.contentOffset.x / (width - 20)).toFixed(0));
    setIndex(newIndex);
  };

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          disableIntervalMomentum={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
          ref={scrollRef}
        >
          {onBoardData.map((val, i) => {
            return (
              <View
                style={{
                  width: width,
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
            );
          })}
        </ScrollView>
        <View style={styles.flexView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {onBoardData.map((val, i) => {
              return (
                <View
                  key={String(i)}
                  style={{
                    ...styles.dotStyle,
                    backgroundColor:
                      i == index
                        ? isDarkMode
                          ? Colors.light
                          : Colors.black
                        : Colors.grey,
                  }}
                />
              );
            })}
          </View>
          <View>
            <TextContainer text="SKIP" onPress={()=>navigation.navigate('Login')} />
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: verticalScale(16),
  },
  dotStyle: {
    height: moderateScale(6),
    width: moderateScale(6),
    borderRadius: moderateScale(4),
    backgroundColor: Colors.black,
    marginRight: moderateScale(8),
  },
  flexView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: moderateScale(16),
  },
});

export default Onboarding;
