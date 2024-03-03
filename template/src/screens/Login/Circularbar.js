//import liraries
import { ImageContainer } from '@components/atoms';
import imagePath from '@constants/imagePath';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
// create a component
const CircularProgress = ({
  fill = 0,
  size = 60,
  onPress
}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <AnimatedCircularProgress
        size={size}
        width={3}
        fill={fill}
        tintColor="#00e0ff"
        backgroundColor="transparent">
        {
          (fill) => (
            <View style={{
              backgroundColor: "red",
              height: size - 16,
              width: size - 16,
              borderRadius: (size - 16) / 2,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ImageContainer source={imagePath.icRightArrow} />
            </View>
          )
        }
      </AnimatedCircularProgress>

    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {


  },
});

//make this component available to the app
export default CircularProgress;
