import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Page</Text>

      <View>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate("Profile")}
        />

        <Button
          title="Go to Requests"
          onPress={() => navigation.navigate("Requests")}
        />

        <Button
          title="Go to Announcements"
          onPress={() => navigation.navigate("Announcements")}
        />
      </View>
    </View>
  );
};

export default Home;
