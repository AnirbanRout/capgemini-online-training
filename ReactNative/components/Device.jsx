import React from "react";
import { View, Text, Platform, Pressable } from "react-native";

import { StyleSheet } from "react-native";

const Device = () => {
  const device_type = Platform.OS;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.title}>Device Text: {device_type}</Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Press me</Text>
      </Pressable>

      {device_type === "android" ? (
        <Text style={styles.title}>Welcome Android User</Text>
      ) : (
        <Text style={styles.title}>Welcome iOS User</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === "android" ? "lime" : "aqua",
    padding: 20,
    height: 60,
    width: 150,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Device;
