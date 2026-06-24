import React from "react";
import { View, Text, Button } from "react-native";

const DashBoard = ({ navigation }) => {
  return (
    <View>
      <Text>DashBoard</Text>
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate("Products")}
      />
      <Button
        title="Go to Orders"
        onPress={() => navigation.navigate("Orders")}
      />
    </View>
  );
};

export default DashBoard;
