import React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-web";

import { StyleSheet } from "react-native-web";

const EmployeeCard = ({ employee }) => {
  return (
    <FlatList
      data={employee}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.position}>{item.position}</Text>
          <Text style={styles.department}>{item.department}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  position: {
    fontSize: 16,
    color: "#666",
  },
  department: {
    fontSize: 14,
    color: "#999",
  },
});

export default EmployeeCard;
