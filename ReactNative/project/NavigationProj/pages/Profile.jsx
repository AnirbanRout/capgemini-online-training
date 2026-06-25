import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import { FlatList, Button } from "react-native";

const Profile = ({ navigation }) => {
  const residents = useSelector((state) => {
    return state.residents.allResidents;
  });

  return (
    <View>
      <Text>Resident Details Page:</Text>
      <FlatList
        data={residents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>FlatNo: {item.flatNo}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Email: {item.email}</Text>

            <Button
              title="Edit"
              onPress={() =>
                navigation.navigate("EditProfile", { resident: item })
              }
            />
          </View>
        )}
      />
    </View>
  );
};

export default Profile;
