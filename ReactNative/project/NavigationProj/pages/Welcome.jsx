import React from "react";
import { View, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to the Resident Management App🏢</Text>
      <Text>Easy access to all resident information</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default Welcome;
