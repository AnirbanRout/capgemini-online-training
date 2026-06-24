import React from "react";
import { View, TextInput, Button, KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";

const KeyBoardDemo = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ padding: 20 }}>
        <TextInput
          placeholder="Enter your name"
          style={{ borderWidth: 1, marginBottom: 20 }}
        />

        <Button title="Submit" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default KeyBoardDemo;
