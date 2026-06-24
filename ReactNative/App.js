import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet, Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./navigation/pages/Home";
import About from "./navigation/pages/About";
import FoodDelivery from "./navigation/project/FoodDeliveryApp/pages/FoodDelivery";
import RetailApp from "./navigation/project/RetailApp/pages/RetailApp";
import DrawerNavigatorDemo from "./navigation/pages/DrawerNavigatorDemo";

const App = () => {
  return (
    // <FoodDelivery />
    // <RetailApp />
    <DrawerNavigatorDemo />
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
