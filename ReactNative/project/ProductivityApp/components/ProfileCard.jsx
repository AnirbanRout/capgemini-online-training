import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.pravatar.cc/301",
        }}
        style={styles.profileImage}
      />

      <Text style={styles.profileName}>John Doe</Text>

      <Text style={styles.profileEmail}>john.doe@example.com</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Projects</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statValue}>40</Text>
          <Text style={styles.statLabel}>Tasks</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statValue}>6</Text>
          <Text style={styles.statLabel}>Awards</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 15,
  },

  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
  },

  profileEmail: {
    fontSize: 15,
    color: "#6B7280",
    marginTop: 5,
    marginBottom: 25,
  },

  statsContainer: {
    flexDirection: "row",
    width: "100",
    justifyContent: "space-around",
    alignSelf: "stretch",
  },

  statBox: {
    alignItems: "center",
  },

  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4F46E5",
  },

  statLabel: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 5,
  },
});

export default ProfileCard;
