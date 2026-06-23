import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SummaryCard = ({ summary }) => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 900;

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: isTablet ? "row" : "column",
        },
      ]}
    >
      <View style={styles.cardItem}>
        <MaterialIcons name="note" size={30} color="#4F46E5" />
        <Text style={styles.cardTitle}>Total Tasks</Text>
        <Text style={styles.cardValue}>{summary.total}</Text>
      </View>

      <View style={styles.cardItem}>
        <AntDesign name="file-done" size={30} color="#16A34A" />
        <Text style={styles.cardTitle}>Completed Tasks</Text>
        <Text style={styles.cardValue}>{summary.completed}</Text>
      </View>

      <View style={styles.cardItem}>
        <FontAwesome name="star" size={30} color="#F59E0B" />
        <Text style={styles.cardTitle}>Reward Points</Text>
        <Text style={styles.cardValue}>{summary.rewardPoints}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    marginBottom: 20,
  },

  cardItem: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  cardTitle: {
    marginTop: 10,
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
  },

  cardValue: {
    marginTop: 8,
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
  },
});

export default SummaryCard;
