import fontFamily from "@constants/fontFamily";
import { scale } from "@screens/Onboarding/scaling";
import i18n from 'i18next';
import React from 'react';
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TextProps, useColorScheme } from "react-native";
import Colors from "src/constants/colors";

interface TextContainterProps extends TextProps {
    text: string | '';
    style?: object,
    variableValue?: null,
    isDynamicText?: boolean,
}

const TextContainer: React.FC<TextContainterProps> = ({ text, variableValue, isDynamicText=false, style, ...rest }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const { t } = useTranslation();
    return (
        <Text
            style={{
                ...styles.sectionTitle,
                color: isDarkMode ? Colors.white : Colors.black,
                textAlign: i18n.language == 'ar' ? 'right' : 'left',
                fontFamily:fontFamily.regular,
                ...style
            }}
            {...rest}
        >
            {isDynamicText? text: t(text)}
        </Text>
    );
}
export default TextContainer

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: scale(14),
        fontFamily:fontFamily.regular

    },
});

