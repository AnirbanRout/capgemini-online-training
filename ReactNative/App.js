import { View, StyleSheet, Platform } from "react-native";
import HouseManagement from "./project/NavigationProj/pages/HouseManagement";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreenDemo from "./project/SplashScreen/pages/SplashScreenDemo";
import MapDemo from "./map/MapDemo";

const App = () => {
  return (
    // <NavigationContainer>
    //   <HouseManagement />
    // </NavigationContainer>
    // <SplashScreenDemo />
    <MapDemo />
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
