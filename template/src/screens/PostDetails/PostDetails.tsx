import {
  ButtonContainer,
  ImageContainer,
  TextContainer,
  WrapperContainer,
} from "@components/atoms";
import HeaderComp from "@components/molecules/HeaderComp";
import Colors from "@constants/colors";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import { moderateScale, scale, width } from "@screens/Onboarding/scaling";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  useColorScheme,
} from "react-native";

import ErrorComp from "@components/molecules/ErrorComp";
import Loader from "@components/molecules/Loader";
import useCustomQuery from "@hooks/useCustomQuery";
import { ProductsData } from "@models/HomeData";
import styleFun from "./styles";

const PostDetails = ({ route }: any): React.JSX.Element => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useCustomQuery<ProductsData>("/products", `/${route.params.productId}`);
  const isDarkMode = useColorScheme() === "dark";
  const styles = styleFun(isDarkMode);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorComp />;

  return (
    <WrapperContainer isSafeAreaView={false}>
      <ScrollView
        style={{
          backgroundColor: isDarkMode ? Colors.dark : Colors.light,
          overflow: "visible",
        }}
      >
        <ImageBackground
          resizeMode="stretch"
          source={{ uri: posts?.thumbnail }}
          style={styles.imageStyle}
        >
          <SafeAreaView>
            <HeaderComp />
          </SafeAreaView>

          <View>
            <TextContainer
              isDynamicText
              text={posts?.description || ""}
              style={{
                color: Colors.white,
                fontSize: scale(24),
                fontFamily: fontFamily.semiBold,
              }}
            />
            <TextContainer
              isDynamicText
              text={posts?.description || ""}
              // numberOfLines={4}
              style={{
                color: Colors.white,
                fontSize: scale(14),
              }}
            />
          </View>
        </ImageBackground>

        <View
          style={{
            ...styles.containerView,
            backgroundColor: isDarkMode ? Colors.dark : Colors.light,
          }}
        >
          <View
            style={{
              ...styles.headerLine,
              backgroundColor: isDarkMode ? Colors.light : Colors.gray2,
            }}
          />

          <View style={styles.rectangleBox}>
            <View style={{ width: width / 2 }}>
              <TextContainer text="FOLLOW_US" style={styles.followUs} />
              <TextContainer
                isDynamicText
                text="Over 35k Happy Customers"
                style={{ color: Colors.white }}
              />
            </View>
            <ButtonContainer
              label="FOLLOW"
              style={styles.btnStyle}
              textStyle={styles.btnTextStyle}
            />
          </View>

          <View style={styles.likeCommentView}>
            <View style={styles.flexView}>
              <ImageContainer
                source={imagePath.icLike}
                style={{ resizeMode: "contain", marginRight: moderateScale(8) }}
              />
              <TextContainer
                isDynamicText
                style={{ fontSize: scale(12) }}
                text="25.3k LIKES"
              />
            </View>
            <View style={{ ...styles.flexView, flex: 0.4 }}>
              <ImageContainer
                source={imagePath.icComment}
                style={{ resizeMode: "contain", marginRight: moderateScale(8) }}
              />
              <TextContainer
                isDynamicText
                style={{ fontSize: scale(12) }}
                text="2.1k COMMENTS"
              />
            </View>

            <ButtonContainer
              label="ADD_COMMENTS"
              style={{
                ...styles.btnStyle,
                backgroundColor: isDarkMode ? Colors.light : Colors.black,
                paddingHorizontal: moderateScale(10),
              }}
              textStyle={{
                ...styles.btnTextStyle,
                color: isDarkMode ? Colors.black : Colors.light,
                fontSize: scale(10),
              }}
            />
          </View>

          <View
            style={{
              ...styles.headerLine,
              backgroundColor: isDarkMode ? Colors.light : Colors.gray2,
              width: "100%",
              height: moderateScale(1),
            }}
          />

          <TextContainer
            isDynamicText
            style={{ color: Colors.blue }}
            text={posts?.brand || ""}
          />
          <TextContainer
            isDynamicText
            style={styles.headerTextStyle}
            text={posts?.title || ""}
          />
          <TextContainer
            isDynamicText
            style={styles.descTextStyle}
            text={posts?.description || ""}
          />
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};
export default PostDetails;
