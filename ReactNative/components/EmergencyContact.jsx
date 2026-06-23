import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import { View, Text } from "react-native";

import { StyleSheet } from "react-native";
import { Pressable } from "react-native";

const EmergencyContact = () => {
  const handleCall = () => {
    alert("Calling emergency contact...");
  };

  const handleMessage = () => {
    alert("Sending message to emergency contact...");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>Emergency Contact</Text>

          <View style={styles.profileImage}>
            <Text>Profile Image</Text>
          </View>

          <Text style={styles.name}>Ajay Ghosh</Text>
          <Text style={styles.relationship}>Friend</Text>
          <Text style={styles.phone}>+91 9876543210</Text>
          <Text style={styles.address}>12/23,Garden View Road, Kolkata-22</Text>

          <Pressable style={styles.button} onPress={handleCall}>
            <Text style={styles.buttonText}>Call Now</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={handleMessage}>
            <Text style={styles.buttonText}>Send Message</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  content: {
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "lightgray",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  relationship: {
    fontSize: 18,
    marginBottom: 8,
  },

  phone: {
    fontSize: 16,
    marginBottom: 8,
  },

  address: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 15,
    width: "80%",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EmergencyContact;
