import { TextContainer } from "@components/atoms";
import fontFamily from "@constants/fontFamily";
import { moderateScale, scale, verticalScale } from "@utils/scaling";
import React, { memo } from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import SearchBar from "./SearchBar";

const stylesheet = createStyleSheet((theme) => ({
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
  textStyle: {
    color: theme.colors.typography,
  },
}));

const HomeListHeader: React.FC = memo(() => {
  const { styles } = useStyles(stylesheet);
  return (
    <>
      <SearchBar
        textStyle={styles.textStyle}
        title="FIND_INTERESTING_BLOG"
        style={styles.searchBarStyle}
      />
      <View style={styles.flexRow}>
        <TextContainer text="RECOMMEND" style={styles.recommendTextStyle} />
        <TextContainer text="SEE_MORE" />
      </View>
    </>
  );
});

export default React.memo(HomeListHeader);
