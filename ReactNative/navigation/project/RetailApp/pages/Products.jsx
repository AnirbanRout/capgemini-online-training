import React, { useState, useMemo } from "react";
import { View, Text, TextInput, Button } from "react-native";

const Products = ({ route, navigation }) => {
  const { products } = route.params;

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((prod) =>
      prod.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  return (
    <View>
      <Text>Products Page</Text>
      <Text>Cart Items: {cart.length}</Text>

      <TextInput
        placeholder="Search products..."
        value={search}
        onChangeText={setSearch}
      />

      {filteredProducts.map((product) => (
        <View key={product.id}>
          <Text>Name: {product.name}</Text>
          <Text>Price: ${product.price}</Text>
          <Text>Category: {product.category}</Text>
          <Text>Stock: {product.stock}</Text>
          <Text>SKU: {product.sku}</Text>
          <Text>Tax Rate: {product.taxRate}%</Text>

          <Button title="Add to Cart" onPress={() => addToCart(product)} />
        </View>
      ))}

      <Button
        title="View Cart"
        onPress={() => navigation.navigate("Cart", { cart })}
      />
    </View>
  );
};

export default Products;
