import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const FilterTabs = ({ tasks, setFilter }) => {
  const allCount = tasks.length;
  const pendingCount = tasks.filter((t) => !t.completed).length;
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setFilter("All")}>
        <Text style={styles.tabText}>All: {allCount}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setFilter("Pending")}>
        <Text style={styles.tabText}>Pending: {pendingCount}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setFilter("Completed")}>
        <Text style={styles.tabText}>Completed: {completedCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
