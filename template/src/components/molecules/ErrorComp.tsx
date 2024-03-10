import { TextContainer, WrapperContainer } from "@components/atoms";
import React from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet(() => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}));

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

export default React.memo(ErrorComp);
