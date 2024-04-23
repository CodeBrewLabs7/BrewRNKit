import type { PropsWithChildren } from "react";
import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));

type SectionProps = PropsWithChildren<{
  style?: object;
  isSafeAreaView?: boolean;
}>;

const WrapperContainer = ({ children, style, isSafeAreaView = true }: SectionProps): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);
  const { theme } = useStyles();

  if (isSafeAreaView) {
    return (
      <SafeAreaView style={[styles.container, style]}>
        <StatusBar barStyle={theme.colors.barStyle} />
        {children}
      </SafeAreaView>
    );
  }
  return (
    <View style={[styles.container, style]}>
      <StatusBar barStyle={theme.colors.barStyle} />
      {children}
    </View>
  );
};

export default React.memo(WrapperContainer);
