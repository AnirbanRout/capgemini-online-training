import { Text, View, StyleSheet } from "react-native";

const UserCard = ({ tasks }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>R</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>Hello, Rohan!</Text>
        <Text style={styles.subtitle}>
          You have {tasks.length} tasks left to complete.
        </Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  info: {
    marginLeft: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 13,
    color: "gray",
    marginTop: 2,
  },
});
