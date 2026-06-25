import React from "react";
import { View, Text } from "react-native";

import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";

const CommunityEvents = () => {
  const events = useSelector((state) => {
    return state.events.allEvents;
  });

  return (
    <View>
      <Text>Community Events</Text>
      <Text>List of Events:</Text>
      <FlatList
        data={events}
        keyExtractor={(event) => event.id}
        renderItem={({ item }) => (
          <View>
            <Text>Name:{item.name}</Text>
            <Text>Date:{item.date}</Text>
            <Text>Venue:{item.venue}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CommunityEvents;
