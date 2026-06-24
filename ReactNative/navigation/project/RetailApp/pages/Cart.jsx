import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Cart = ({ route, navigation }) => {
  const { cart } = route.params || { cart: [] };

  const [cartItems, setCartItems] = useState(cart);

  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];

    if (updatedCart[index].quantity > 0) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
    }
  };

  const removeItem = (index) => {
    setCartItems(
      cartItems.filter((_, idx) => {
        return idx !== index;
      }),
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const tax = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity * item.taxRate) / 100,
    0,
  );

  const total = subtotal + tax;

  const placeOrder = () => {
    const order = {
      id: Date.now(),
      items: cartItems,
      subtotal,
      tax,
      total,
      orderDate: new Date().toISOString(),
    };

    navigation.navigate("Orders", {
      newOrder: order,
    });
  };

  return (
    <View>
      <Text>Cart Page</Text>

      {cartItems.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <View key={index}>
              <Text>Name: {item.name}</Text>
              <Text>Price: ${item.price}</Text>
              <Text>Category: {item.category}</Text>
              <Text>Stock: {item.stock}</Text>
              <Text>SKU: {item.sku}</Text>
              <Text>Tax Rate: {item.taxRate}%</Text>
              <Text>Quantity: {item.quantity}</Text>

              <Button title="+" onPress={() => increaseQuantity(index)} />
              <Button title="-" onPress={() => decreaseQuantity(index)} />
              <Button title="Remove Item" onPress={() => removeItem(index)} />
            </View>
          ))}

          <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
          <Text>Tax: ${tax.toFixed(2)}</Text>
          <Text>Total: ${total.toFixed(2)}</Text>

          <Button title="Place Order" onPress={placeOrder} />
        </>
      )}
    </View>
  );
};

export default Cart;
