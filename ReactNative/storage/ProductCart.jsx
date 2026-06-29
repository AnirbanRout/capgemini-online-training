import { Button, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductCart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "headphones",
      description: "Wireless headphones",
      price: 100,
    },
    {
      id: 2,
      name: "laptop",
      description: "High-performance laptop",
      price: 1000,
    },
    {
      id: 3,
      name: "mobile",
      description: "Latest smartphone",
      price: 500,
    },
    {
      id: 4,
      name: "tablet",
      description: "Portable tablet",
      price: 300,
    },
  ]);

  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem("cart");
      if (cartData) {
        setCart(JSON.parse(cartData));
      }
    } catch (error) {
      console.error("Error loading cart from AsyncStorage:", error);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => {
      return item.id === product.id;
    });

    let updatedCart = [];

    if (!existingProduct) {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    } else {
      updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    }
    setCart(updatedCart);
    AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const deleteFromCart = (productId) => {
    const updatedCart = cart.filter((item) => {
      return item.id !== productId;
    });
    setCart(updatedCart);
    AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
    AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    AsyncStorage.removeItem("cart");
  };

  return (
    <View style={styles.container}>
      <Text>Product Cart</Text>
      <Text>Items in Cart: {cart.length}</Text>
      <Text>Items List:</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
      <Text>Cart Items:</Text>
      <FlatList
        data={cart}
        ListEmptyComponent={() => <Text>No items in cart...</Text>}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
            <Text>Quantity: {item.quantity}</Text>

            <Button title="add" onPress={() => addQuantity(item.id)} />
            <Button title="remove" onPress={() => removeQuantity(item.id)} />

            <Button
              title="Delete from Cart"
              onPress={() => deleteFromCart(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});

export default ProductCart;
