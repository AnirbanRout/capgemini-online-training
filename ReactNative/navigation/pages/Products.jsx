import React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Button } from "react-native";

const Products = ({ navigation }) => {
  const products = [
    {
      id: 1,
      name: "Headphones",
      description: "High-quality headphones for immersive sound.",
      price: "$99",
    },
    {
      id: 2,
      name: "Speakers",
      description: "Powerful speakers for rich audio experience.",
      price: "$199",
    },
    {
      id: 3,
      name: "Earbuds",
      description: "Compact earbuds for portable listening.",
      price: "$49",
    },
    {
      id: 4,
      name: "Microphone",
      description: "Professional microphone for clear audio capture.",
      price: "$149",
    },
  ];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Products</Text>
      <Text>List of Products:</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        style={{ width: "100%", paddingHorizontal: 20, marginTop: 20, flex: 1 }}
      />
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate("DashBoard")}
      />
      <Button
        title="Go to Orders"
        onPress={() => navigation.navigate("Orders")}
      />
    </View>
  );
};

export default Products;
