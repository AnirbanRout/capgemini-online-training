import React from "react";
import { View, Text, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const Requests = ({ navigation }) => {
  const allRequests = useSelector((state) => state.requests.allRequests);

  return (
    <View>
      <Text>Requests Page</Text>

      <FlatList
        data={allRequests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Title: {item.title}</Text>
            <Text>Category: {item.category}</Text>

            <Button
              title="View Details"
              onPress={() =>
                navigation.navigate("RequestDetails", { request: item })
              }
            />
          </View>
        )}
      />

      <Button
        title="Add Request"
        onPress={() => navigation.navigate("AddRequest")}
      />
    </View>
  );
};

export default Requests;
