import React from "react";
import { View, Text, Button } from "react-native";

const HelpPage = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Help & Support
      </Text>

      <Text style={{ fontSize: 18, marginBottom: 10 }}>📞 Contact Number</Text>
      <Text style={{ marginBottom: 20 }}>9876543210</Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>📧 Email</Text>
      <Text style={{ marginBottom: 20 }}>support@residentapp.com</Text>

      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Frequently Asked Questions
      </Text>

      <Text style={{ marginBottom: 8 }}>• How do I add a service request?</Text>
      <Text style={{ marginBottom: 8 }}>• How do I update my profile?</Text>
      <Text style={{ marginBottom: 20 }}>• How do I check announcements?</Text>
      <Button
        title="Contact Support"
        onPress={() => alert("Support will contact you soon!")}
      />
    </View>
  );
};

export default HelpPage;
