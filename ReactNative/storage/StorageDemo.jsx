import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StorageDemo = () => {
  const [username, setUsername] = useState("");
  const [loadedUsername, setLoadedUsername] = useState("");

  const saveName = async () => {
    try {
      await AsyncStorage.setItem("username", username);
      alert("Username saved successfully!");
    } catch (error) {
      console.error("Error saving username:", error);
    }
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const loadName = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem("username");
      if (storedUsername !== null) {
        setLoadedUsername(storedUsername);
      } else {
        alert("No username found in storage.");
      }
    } catch (error) {
      console.error("Error loading username:", error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter username"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <View>
        <Button title="Save" onPress={saveName} />
      </View>

      <View>
        <Button title="Load" onPress={loadName} />
      </View>
    </View>
  );
};

export default StorageDemo;
