import React from "react";
import { View, Text, Button } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Orders = ({ navigation }) => {
  const orders = [
    { id: 1, name: "Order 1", description: "This is order 1" },
    { id: 2, name: "Order 2", description: "This is order 2" },
    { id: 3, name: "Order 3", description: "This is order 3" },
    { id: 4, name: "Order 4", description: "This is order 4" },
    { id: 5, name: "Order 5", description: "This is order 5" },
  ];

  return (
    <View>
      <Text>Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate("DashBoard")}
      />
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  );
};

export default Orders;
