import { View, StyleSheet, Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import ProductivityApp from "./project/pages/ProductivityApp";
import ImagePicker from "./components/ImagePicker";
import TakePhoto from "./components/TakePhoto";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* <ProductivityApp /> */}
          {/* <ImagePicker /> */}
          <TakePhoto />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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
