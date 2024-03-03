import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import * as Screens from "../screens";

export type AuthStackParamList = {
  Login: undefined;
  Signup: { username: string };
  Onboarding: undefined;
};

export const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthStack = () => {
  return (
    <>
      <Stack.Screen name={"Onboarding"} component={Screens.Onboarding} />
      <Stack.Screen name={"Login"} component={Screens.Login} />
      <Stack.Screen name={"Signup"} component={Screens.Signup} />
    </>
  );
};

export default AuthStack;
