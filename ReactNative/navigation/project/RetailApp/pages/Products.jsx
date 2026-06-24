import React, { useState, useMemo } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { ScrollView } from "react-native";

const Products = ({ route, navigation }) => {
  const { products } = route.params;

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = useMemo(() => {
    return products.filter((prod) =>
      prod.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text>Products Page</Text>
      <Text>Cart Items: {cartCount}</Text>

      <TextInput
        placeholder="Search products..."
        value={search}
        onChangeText={setSearch}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <ScrollView style={{ marginBottom: 10, flex: 1 }}>
        {filteredProducts.map((product) => (
          <View
            key={product.id}
            style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
          >
            <Text>Name: {product.name}</Text>
            <Text>Price: ${product.price}</Text>
            <Text>Category: {product.category}</Text>
            <Text>Stock: {product.stock}</Text>
            <Text>SKU: {product.sku}</Text>
            <Text>Tax Rate: {product.taxRate}%</Text>

            <Button title="Add to Cart" onPress={() => addToCart(product)} />
          </View>
        ))}
      </ScrollView>

      <Button
        title="View Cart"
        onPress={() => navigation.navigate("Cart", { cartItems: cart })}
      />
    </View>
  );
};

export default Products;
