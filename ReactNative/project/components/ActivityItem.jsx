import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const ActivityItem = ({ activity }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Activity List:</Text>

      <FlatList
        data={activity}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.activityItem}>
            <View style={styles.iconContainer}>
              <FontAwesome5 name="tasks" size={18} color="#4F46E5" />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.activityTitle}>{item.activity}</Text>

              <Text style={styles.activityTime}>{item.timestamp}</Text>

              <Text style={styles.activityStatus}>{item.status}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 15,
  },

  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },

  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#EEF2FF",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 15,
  },

  textContainer: {
    flex: 1,
  },

  activityTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  activityTime: {
    marginTop: 4,
    fontSize: 13,
    color: "#6B7280",
  },

  activityStatus: {
    marginTop: 4,
    fontSize: 13,
    color: "#4F46E5",
    fontWeight: "600",
  },
});

export default ActivityItem;
