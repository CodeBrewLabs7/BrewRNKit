import { moderateScale, verticalScale } from "@utils/scaling";
import { createStyleSheet } from "react-native-unistyles";

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

export default stylesheet;
