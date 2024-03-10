/* eslint-disable no-nested-ternary */

import React from "react";
import { ActivityIndicator, View } from "react-native";
import ErrorComp from "./ErrorComp";

type EmptyCompType = {
  isLoading: boolean;
  isError: boolean;
};
const EmptyComp: React.FC<EmptyCompType> = ({ isLoading, isError }): React.JSX.Element => {
  const emptyComponent = isLoading ? <ActivityIndicator /> : isError ? <ErrorComp /> : <View />;
  return emptyComponent;
};

export default EmptyComp;
