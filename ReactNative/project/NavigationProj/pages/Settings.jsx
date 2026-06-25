import React, { useState } from "react";
import { View, Text, Switch } from "react-native";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Settings
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Text>🔔 Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Text>🌙 Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <Text style={{ marginBottom: 15 }}>👤 Account Settings</Text>

      <Text>ℹ️ Resident Management App v1.0</Text>
    </View>
  );
};

export default Settings;
