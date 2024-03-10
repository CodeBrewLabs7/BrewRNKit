import type { RootState } from "@redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "@redux/hooks";
import React from "react";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const { userData } = useSelector((state: RootState) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userData?.token ? MainStack() : AuthStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
