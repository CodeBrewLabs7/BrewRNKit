import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "@redux/hooks";
import React from "react";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { RootState } from "@redux/store";

const Stack = createNativeStackNavigator();

function Routes() {
  const { userData, isFirstTime } = useSelector((state: RootState) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userData?.token ? MainStack() : AuthStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
