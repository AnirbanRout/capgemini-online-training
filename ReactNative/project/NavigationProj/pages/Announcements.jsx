import React from "react";
import { View, Text } from "react-native";

import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";

import { Button } from "react-native";

const Announcements = ({ navigation }) => {
  const announcements = useSelector((state) => {
    return state.announcements.allAnnouncements;
  });

  return (
    <View>
      <Text>Announcements:</Text>
      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>Title: {item.title}</Text>
            <Text>Type: {item.type}</Text>
            <Button
              title="View Details"
              onPress={() =>
                navigation.navigate("AnnouncementDetails", {
                  announcement: item,
                })
              }
            />
          </View>
        )}
      />
    </View>
  );
};

export default Announcements;
