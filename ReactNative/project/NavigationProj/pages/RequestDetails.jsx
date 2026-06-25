import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-web";

import { useNavigation } from "@react-navigation/native";

const RequestDetails = ({ route }) => {
  const navigation = useNavigation();
  const { request } = route.params;

  return (
    <View>
      <Text>Request Details:</Text>
      <Text>Title: {request.title}</Text>
      <Text>Category: {request.category}</Text>
      <Text>Status: {request.status}</Text>
      <Text>Priority: {request.priority}</Text>
      <Text>Resident ID: {request.residentId}</Text>
      <Text>Created At: {request.createdAt}</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RequestDetails;
