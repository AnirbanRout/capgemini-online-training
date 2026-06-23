import React from "react";
import { Platform, Text, useWindowDimensions } from "react-native";
import { View } from "react-native";

import { StyleSheet } from "react-native";
import { Image } from "react-native";

const WindowDimensionDemo = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text>Window Dimensions:</Text>
      <Text>Width: {width}px</Text>
      <Text>Height: {height}px</Text>
      <Text>Device Type:{Platform.OS}</Text>
      {width > 600 ? <Text>Tablet View</Text> : <Text>Mobile View</Text>}
      <View
        style={[
          styles.card,
          {
            flexDirection: width > 600 ? "row" : "column",
          },
        ]}
      >
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.title}>HeadPhone</Text>
        <Text style={styles.description}>High-quality wireless headphones</Text>
        <Text style={styles.price}>$99.99</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "aqua",
    padding: 20,
  },
  card: {
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
});

export default WindowDimensionDemo;
