import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addRequest } from "../redux/Slice/RequestSlice";

const AddRequest = ({ navigation }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [priority, setPriority] = React.useState("");

  const handleAddRequest = () => {
    const newRequest = {
      id: `req${Date.now()}`,
      title,
      category,
      status: "Pending",
      priority,
      residentId: "r1",
      createdAt: new Date().toISOString().split("T")[0],
    };

    dispatch(addRequest(newRequest));
    alert("Request added successfully!");

    setTitle("");
    setCategory("");
    setPriority("");

    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Add Request</Text>

      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />

      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />

      <TextInput
        placeholder="Priority"
        value={priority}
        onChangeText={setPriority}
      />

      <Button title="Add Request" onPress={handleAddRequest} />
    </View>
  );
};

export default AddRequest;
