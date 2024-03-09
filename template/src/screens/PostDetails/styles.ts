import fontFamily from "@constants/fontFamily";
import {
  height,
  moderateScale,
  scale,
  verticalScale,
  width,
} from "@utils/scaling";
import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
  imageStyle: {
    width: width,
    minHeight: height / 2.5,
    paddingHorizontal: moderateScale(28),
    paddingBottom: verticalScale(40),
    justifyContent: "space-between",
  },
  containerView: {
    borderTopLeftRadius: moderateScale(34),
    borderTopRightRadius: moderateScale(34),
    marginTop: verticalScale(-26),
    paddingHorizontal: moderateScale(16),
  },
  headerLine: {
    width: moderateScale(42),
    height: moderateScale(2),
    borderRadius: moderateScale(12),
    alignSelf: "center",
    marginVertical: verticalScale(14),
  },
  rectangleBox: {
    minHeight: moderateScale(85),
    backgroundColor: "#B3C680",
    borderRadius: moderateScale(18),
    paddingVertical: verticalScale(18),
    paddingHorizontal: moderateScale(30),
    flexDirection: "row",
  },
  btnStyle: {
    height: moderateScale(34),
    minWidth: moderateScale(96),
    borderRadius: moderateScale(10),
    backgroundColor: theme.colors.white,
  },
  commentBtn: {
    height: moderateScale(34),
    minWidth: moderateScale(96),
    borderRadius: moderateScale(10),
  },
  followUs: {
    fontSize: scale(18),
    fontFamily: fontFamily.semiBold,
    color: theme.colors.white,
  },
  btnTextStyle: {
    color: theme.colors.black,
    fontFamily: fontFamily.medium,
    fontSize: scale(14),
  },

  likeCommentView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: verticalScale(14),
  },
  flexView: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.3,
  },
  headerTextStyle: {
    fontSize: scale(20),
    fontFamily: fontFamily.semiBold,
  },
  descTextStyle: {
    fontSize: scale(14),
    color: theme.colors.opacity50,
  },
}));
export default stylesheet;
