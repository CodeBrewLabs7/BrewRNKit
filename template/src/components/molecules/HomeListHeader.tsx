import { TextContainer } from "@components/atoms";
import Colors from "@constants/colors";
import fontFamily from "@constants/fontFamily";
import { moderateScale, scale, verticalScale } from "@screens/Onboarding/scaling";
import React, { memo } from "react";
import { StyleSheet, View, useColorScheme } from "react-native";
import SearchBar from "./SearchBar";

const HomeListHeader: React.FC= memo(() => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <>
    <SearchBar textStyle={{
      color: isDarkMode? Colors.white50: Colors.black50
    }} title="FIND_INTERESTING_BLOG" style={styles.searchBarStyle} />
      <View style={styles.flexRow}>
        <TextContainer text="RECOMMEND" style={styles.recommendTextStyle} />
        <TextContainer text="SEE_MORE" style={styles.seemoreStyle} />
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  searchBarStyle: {
    marginTop: verticalScale(28),
    marginBottom: verticalScale(20),
    marginHorizontal: moderateScale(16),
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: verticalScale(15),
    marginHorizontal: moderateScale(20),
  },
  recommendTextStyle: {
    fontSize: scale(18),
    fontFamily: fontFamily.medium,
  },
  seemoreStyle: {}
});
export default React.memo(HomeListHeader);
