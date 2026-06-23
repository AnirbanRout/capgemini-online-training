import { Button, TextInput, View, StyleSheet } from "react-native";

const AddTask = ({ taskText, setTaskText, handleAddTask }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskText}
        onChangeText={setTaskText}
      />

      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    gap: 10,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
  },
});
