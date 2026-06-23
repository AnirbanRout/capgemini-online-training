import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const TaskCard = ({ task, handleDelete }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.date}>{task.date}</Text>
      </View>

      <TouchableOpacity onPress={() => handleDelete(task.id)}>
        <Text style={styles.delete}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },

  title: {
    fontSize: 20,
  },

  date: {
    fontSize: 14,
    color: "gray",
  },

  delete: {
    fontSize: 18,
  },
});
