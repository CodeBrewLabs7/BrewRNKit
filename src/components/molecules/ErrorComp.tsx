//import libraries
import { TextContainer, WrapperContainer } from "@components/atoms";
import React from "react";
import { StyleSheet, View } from "react-native";

// create a component
const ErrorComp = (): React.JSX.Element => {
  return (
    <WrapperContainer isSafeAreaView={false}>
      <View style={styles.container}>
        <TextContainer isDynamicText text="Oops...!!! Something Wen't Wrong" />
      </View>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default React.memo(ErrorComp);
