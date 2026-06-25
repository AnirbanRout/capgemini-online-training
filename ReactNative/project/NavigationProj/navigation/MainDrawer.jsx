import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import TabNavigator from "./TabNavigator";
import CommunityEvents from "../pages/CommunityEvents";
import Payments from "../pages/Payments";
import Settings from "../pages/Settings";
import HelpPage from "../pages/HelpPage";

const MainDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tabs" component={TabNavigator} />
      <Drawer.Screen name="CommunityEvents" component={CommunityEvents} />
      <Drawer.Screen name="Payments" component={Payments} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Help" component={HelpPage} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
