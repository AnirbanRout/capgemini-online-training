import React from "react";
import { View, Text } from "react-native";

const Cart = ({ route, navigation }) => {
  const { cart } = route.params || { cart: [] };

  return (
    <View>
      <Text>Cart Page</Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        cart.map((item, index) => (
          <View key={index}>
            <Text>Name: {item.name}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Category: {item.category}</Text>
            <Text>Stock: {item.stock}</Text>
            <Text>SKU: {item.sku}</Text>
            <Text>Tax Rate: {item.taxRate}%</Text>
          </View>
        ))
      )}
    </View>
  );
};

export default Cart;
