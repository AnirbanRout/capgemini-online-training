import React from "react";
import { View, Text, StyleSheet } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

const Header = () => {
  return (
    <View style={styles.header}>
      <AntDesign name="bars" size={24} color="#111827" />

      <Text style={styles.title}>My Dashboard</Text>

      <FontAwesome name="bell" size={22} color="#111827" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 18,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
  },
});

export default Header;
