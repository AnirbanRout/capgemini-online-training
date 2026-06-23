import React from "react";
import { View, Text, Platform } from "react-native";

export default function IosApp() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is an iOS View</Text>
      <Text>Platform: {Platform.OS}</Text>
    </View>
  );
}
