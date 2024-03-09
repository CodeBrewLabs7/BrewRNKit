import fontFamily from "@constants/fontFamily";
import { scale } from "@utils/scaling";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text, TextProps } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

interface TextContainterProps extends TextProps {
  text: string | "";
  style?: object;
  variableValue?: null;
  isDynamicText?: boolean;
}

const TextContainer: React.FC<TextContainterProps> = ({
  text,
  variableValue,
  isDynamicText = false,
  style,
  ...rest
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles(stylesheet);
  return (
    <Text
      style={[styles.sectionTitle, style]}
      {...rest}
    >
      {isDynamicText ? text : t(text)}
    </Text>
  );
};
export default React.memo(TextContainer);

const stylesheet = createStyleSheet((theme) => ({
  sectionTitle: {
    fontSize: scale(14),
    fontFamily: fontFamily.regular,
    color: theme.colors.typography
  }
}));
