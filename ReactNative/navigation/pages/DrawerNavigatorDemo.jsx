import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import DashBoard from "./DashBoard";
import Products from "./Products";
import Orders from "./Orders";

const Drawer = createDrawerNavigator();

const DrawerNavigatorDemo = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="DashBoard">
        <Drawer.Screen name="DashBoard" component={DashBoard} />
        <Drawer.Screen name="Products" component={Products} />
        <Drawer.Screen name="Orders" component={Orders} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigatorDemo;
