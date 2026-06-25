import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Login from "../pages/Login";
import MainDrawer from "./MainDrawer";

import Welcome from "../pages/Welcome";

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainDrawer" component={MainDrawer} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
