import Colors from '@constants/colors';
import { moderateScale } from '@screens/Onboarding/scaling';
import React from 'react';
import { ImageProps, Image as RNImage, StyleSheet, View, useColorScheme,ViewProps } from 'react-native';

interface CustomImageProps extends ImageProps {
  imageStyle?: any,
  viewStyle?: any
}

// Define the component
const RoundImageBorder: React.FC<CustomImageProps>= ({imageStyle, viewStyle, ...props}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={{
      ...styles.container, 
      backgroundColor: isDarkMode? Colors.dark: Colors.white,
      ...viewStyle,
      }}>
      <RNImage
        tintColor={isDarkMode ? Colors.white : Colors.black}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:"rgba(90,90,90,0.5)",

  }
})


export default RoundImageBorder;
