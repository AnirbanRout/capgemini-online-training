import React from "react";
import { View, Text } from "react-native";

import { Button } from "react-native";

const About = ({ navigation, route }) => {
  const { name, age } = route.params;

  return (
    <View>
      <Text>About Screen</Text>
      {/* <Text>Name: {name}</Text>
      <Text>Age: {age}</Text> */}
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default About;
