import React from "react";
import { View, Text } from "react-native";

import { Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate("About", {
            name: "lime",
            age: 22,
          })
        }
      />
    </View>
  );
};

export default Home;
