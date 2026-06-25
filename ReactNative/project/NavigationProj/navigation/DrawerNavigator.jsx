import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Tabs from "../pages/Tabs";
import CommunityEvents from "../pages/CommunityEvents";
import Payments from "../pages/Payments";
import Settings from "../pages/Settings";
import Logout from "../pages/Logout";

import HelpPage from "../pages/HelpPage";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Community Events" component={CommunityEvents} />
      <Drawer.Screen name="Payments" component={Payments} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Help" component={HelpPage} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
