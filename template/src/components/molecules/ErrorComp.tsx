//import libraries
import { TextContainer, WrapperContainer } from "@components/atoms";
import React from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

// create a component
const ErrorComp = (): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);
  return (
    <WrapperContainer isSafeAreaView={false}>
      <View style={styles.container}>
        <TextContainer isDynamicText text="SOMETHING_WENT_WRONG" />
      </View>
    </WrapperContainer>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}));

//make this component available to the app
export default React.memo(ErrorComp);
