import React from "react";
import {
  useColorScheme,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { TextContainer } from "@components/atoms";
import Colors from "@constants/colors";
import { moderateScale } from "@screens/Onboarding/scaling";

interface CustomButtonProps extends TouchableOpacityProps {
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
  const isDarkMode = useColorScheme() === "dark";
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        ...styles.btnStyle,
        backgroundColor: isDarkMode ? Colors.white : Colors.black,
        ...style,
      }}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={isDarkMode? Colors.black: Colors.white} />
      ) : (
        <TextContainer
          text={label}
          style={{
            color: isDarkMode ? Colors.black : Colors.white,
            ...textStyle,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    height: moderateScale(52),
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(8),
  },
});

export default React.memo(ButtonContainer);
