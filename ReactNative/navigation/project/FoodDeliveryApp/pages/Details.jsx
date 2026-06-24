import React from "react";
import { View, Text } from "react-native";

const Details = ({ route }) => {
  const { food } = route.params;

  return (
    <View>
      <Text>Food Details:</Text>
      <Text>{food.name}</Text>
      <Text>${food.price.toFixed(2)}</Text>
    </View>
  );
};

export default Details;
