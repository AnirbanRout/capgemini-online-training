import React from "react";
import { View, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const AnnouncementDetails = ({ route }) => {
  const navigation = useNavigation();
  const { announcement } = route.params;

  return (
    <View>
      <Text>Announcement Details:</Text>
      <Text>Title: {announcement.title}</Text>
      <Text>Type: {announcement.type}</Text>
      <Text>Date: {announcement.date}</Text>

      <Button
        title="Back to Announcements"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default AnnouncementDetails;
