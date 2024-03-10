/* eslint-disable react/prop-types */

import { TextContainer } from "@components/atoms";
import RemoteImage from "@components/atoms/RemoteImage";
import fontFamily from "@constants/fontFamily";
import { ProductsData } from "@models/HomeData";
import { HomeStackParamList } from "@navigations/MainStack";
import { NavigationProp } from "@react-navigation/native";
import { moderateScale, scale, verticalScale } from "@utils/scaling";
import React, { memo } from "react";
import { Pressable, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: moderateScale(16),
  },
  imageStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(10),
    marginRight: moderateScale(4),
  },
  profileImage: {
    width: moderateScale(134),
    height: moderateScale(134),
    backgroundColor: theme.colors.grey,
    borderRadius: moderateScale(24),
    marginRight: moderateScale(16),
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textStyle: {
    fontSize: scale(12),
    color: theme.colors.opacity50,
  },
}));

interface HomeListItemsProps {
  item: ProductsData;
  navigation: NavigationProp<HomeStackParamList>;
}

const HomeListItems: React.FC<HomeListItemsProps> = memo(({ item, navigation }) => {
  const { styles } = useStyles(stylesheet);
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("PostDetails", { productId: item.id })}
    >
      <RemoteImage source={{ uri: item.thumbnail }} style={styles.profileImage} />

      <View style={{ flex: 1 }}>
        <TextContainer isDynamicText text={item.title} style={{ fontSize: scale(12) }} />
        <TextContainer
          isDynamicText
          text={item.description}
          style={{
            marginVertical: verticalScale(6),
            fontFamily: fontFamily.medium,
          }}
          numberOfLines={2}
        />
        <View style={styles.flexRow}>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <RemoteImage
              source={{
                uri: "https://www.profilebakery.com/wp-content/uploads/2023/03/AI-Profile-Picture.jpg",
              }}
              style={styles.imageStyle}
            />
            <TextContainer isDynamicText text="Regulators" style={styles.textStyle} />
          </View>
          <TextContainer isDynamicText text="June 14 2023" style={styles.textStyle} />
        </View>
      </View>
    </Pressable>
  );
});

export default HomeListItems;
