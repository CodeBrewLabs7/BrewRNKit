import { TextContainer } from "@components/atoms";
import fontFamily from "@constants/fontFamily";
import { moderateScale, scale } from "@utils/scaling";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, TextInput, View, ImageSourcePropType } from "react-native";
import type { TextInputProps, ViewStyle } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import ImageContainer from "../atoms/ImageContainer";

const stylesheet = createStyleSheet((theme) => ({
  input: {
    height: moderateScale(52),
    borderColor: "rgba(217, 217, 217,1)",
    borderWidth: moderateScale(0.5),
    borderRadius: moderateScale(10),
    flexDirection: "row",
    paddingHorizontal: moderateScale(12),
    alignItems: "center",
    backgroundColor: theme.colors.textInputColor,
  },
  textInputStyle: {
    flex: 1,
    marginHorizontal: moderateScale(8),
    height: moderateScale(52),
    color: theme.colors.typography,
    fontFamily: fontFamily.medium,
    fontSize: scale(12),
  },
  labelStyle: {
    fontSize: scale(14),
    marginBottom: moderateScale(8),
    fontFamily: fontFamily.medium,
  },
}));

interface CustomTextInputProps extends TextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  label: string;
  rightImage?: ImageSourcePropType | null;
  leftImage?: ImageSourcePropType | null;
  style?: object;
  onPressRight?: () => void;
}

// Define default props
const defaultProps = {
  rightImage: null as ImageSourcePropType | null,
  leftImage: null as ImageSourcePropType | null,
  style: {} as ViewStyle,
  onPressRight: undefined,
};

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  onChangeText,
  label,
  rightImage,
  leftImage,
  style,
  onPressRight,
  ...rest
}) => {
  const [text, setText] = useState("");
  const { styles, theme } = useStyles(stylesheet);
  const { t } = useTranslation();

  const handleTextChange = (inputText: string) => {
    setText(inputText);
    if (onChangeText) {
      onChangeText(inputText);
    }
  };

  return (
    <>
      {label ? <TextContainer text={label} style={styles.labelStyle} /> : null}
      <View
        style={{
          ...styles.input,
          ...style,
        }}
      >
        {leftImage ? (
          <ImageContainer
            resizeMode="contain"
            style={{ height: moderateScale(16), width: moderateScale(16) }}
            source={leftImage}
          />
        ) : null}
        <TextInput
          style={styles.textInputStyle}
          placeholder={t(`${placeholder}`)}
          onChangeText={handleTextChange}
          value={text}
          placeholderTextColor={theme.colors.placeholder}
          {...rest}
        />
        {rightImage ? (
          <Pressable onPress={onPressRight}>
            <ImageContainer source={rightImage} />
          </Pressable>
        ) : null}
      </View>
    </>
  );
};

CustomTextInput.defaultProps = defaultProps;

export default React.memo(CustomTextInput);
