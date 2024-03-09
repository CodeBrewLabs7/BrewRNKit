import { TextContainer } from "@components/atoms";
import { moderateScale } from "@utils/scaling";
import React from "react";
import { ActivityIndicator, Pressable, PressableProps } from "react-native";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";

interface CustomButtonProps extends PressableProps {
  label: string;
  style?: {};
  textStyle?: {};
  isLoading?: boolean;
}

const ButtonContainer: React.FC<CustomButtonProps> = ({
  label,
  isLoading = false,
  style,
  textStyle,
  ...props
}) => {
  const { styles, theme } = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === "dark";

  return (
    <Pressable style={[styles.btnStyle(isDarkMode), style]} {...props}>
      {isLoading ? (
        <ActivityIndicator
          color={isDarkMode ? theme.colors.black : theme.colors.white}
        />
      ) : (
        <TextContainer
          text={label}
          style={{
            color: isDarkMode ? theme.colors.black : theme.colors.white,
            ...textStyle,
          }}
        />
      )}
    </Pressable>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  btnStyle: (isDarkMode: boolean) => ({
    height: moderateScale(52),
    backgroundColor: isDarkMode ? theme.colors.white : theme.colors.black,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(8),
  }),
}));

export default React.memo(ButtonContainer);
