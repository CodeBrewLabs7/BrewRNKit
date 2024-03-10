import fontFamily from "@constants/fontFamily";
import { scale } from "@utils/scaling";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text, TextProps, TextStyle } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
  sectionTitle: {
    fontSize: scale(14),
    fontFamily: fontFamily.regular,
    color: theme.colors.typography,
  },
}));

interface TextContainterProps extends TextProps {
  text: string | "";
  style?: object;
  isDynamicText?: boolean;
}

const defaultProps = {
  style: {} as TextStyle,
  isDynamicText: false as boolean,
};

const TextContainer: React.FC<TextContainterProps> = ({
  text,
  isDynamicText = false,
  style,
  ...rest
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles(stylesheet);
  return (
    <Text style={[styles.sectionTitle, style]} {...rest}>
      {isDynamicText ? text : t(text)}
    </Text>
  );
};

TextContainer.defaultProps = defaultProps;

export default React.memo(TextContainer);
