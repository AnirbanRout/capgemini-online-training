import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native-web";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SafeArea = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>This is a safe area!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SafeArea;
