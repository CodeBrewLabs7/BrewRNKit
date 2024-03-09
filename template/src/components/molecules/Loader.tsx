//import libraries
import { WrapperContainer } from "@components/atoms";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

// create a component
const Loader = (): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);
  return (
    <WrapperContainer isSafeAreaView={false}>
      <View style={styles.container}>
        <ActivityIndicator size={"large"} />
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
export default React.memo(Loader);
