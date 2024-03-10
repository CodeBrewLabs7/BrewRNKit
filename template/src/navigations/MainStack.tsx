import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import * as Screens from "../screens";

export type HomeStackParamList = {
  Home: undefined;
  Settings: undefined;
  PostDetails: { productId: number };
};
const Stack = createNativeStackNavigator<HomeStackParamList>();

const MainStack = () => (
  <>
    <Stack.Screen name="Home" component={Screens.Home} />
    <Stack.Screen name="PostDetails" component={Screens.PostDetails} />
  </>
);

export default MainStack;
