import { TextContainer } from '@components/atoms';
import fontFamily from '@constants/fontFamily';
import { moderateScale, scale } from '@screens/Onboarding/scaling';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, TextInput, TextInputProps, View, useColorScheme } from 'react-native';
import Colors from 'src/constants/colors';
import ImageContainer from '../atoms/ImageContainer';

interface CustomTextInputProps extends TextInputProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  label?: string;
  rightImage?: null,
  leftImage?: null,
  style?: {},
  onPressRight?: () => void,
}

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
  const [text, setText] = useState('');

  const isDarkMode = useColorScheme() === 'dark';
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
      <View style={{ 
        ...styles.input, 
        backgroundColor: isDarkMode? Colors.dark: 'rgba(217, 217, 217,0.2)',
        ...style }}>

        {leftImage ? <ImageContainer resizeMode='contain' style={{height: moderateScale(16),width:moderateScale(16)}} source={leftImage} /> : null}
        <TextInput
          style={{
            flex: 1,
            marginHorizontal:moderateScale(8),
            height: moderateScale(52),
            color: isDarkMode ? Colors.white: Colors.black54,
            fontFamily:fontFamily.medium,
            fontSize: scale(12)
          }}
          placeholder={t(`${placeholder}`)}
          onChangeText={handleTextChange}
          value={text}
          placeholderTextColor={isDarkMode ? Colors.light : Colors.black52}
          {...rest}
        />
        {rightImage ? <Pressable onPress={onPressRight}><ImageContainer source={rightImage} /></Pressable>: null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: moderateScale(52),
    borderColor: 'rgba(217, 217, 217,1)',
    borderWidth:moderateScale(0.5),
    borderRadius: moderateScale(10),
    flexDirection: "row",
    paddingHorizontal: moderateScale(12),
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: scale(14),
    marginBottom: moderateScale(8),
    fontFamily:fontFamily.medium
  }
});

export default React.memo(CustomTextInput);
