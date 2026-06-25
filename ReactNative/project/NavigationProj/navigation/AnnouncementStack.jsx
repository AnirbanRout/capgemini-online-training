import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Announcements from "../pages/Announcements";
import AnnouncementDetails from "../pages/AnnouncementDetails";

const Stack = createNativeStackNavigator();

const AnnouncementStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Announcement" component={Announcements} />
      <Stack.Screen
        name="AnnouncementDetails"
        component={AnnouncementDetails}
      />
    </Stack.Navigator>
  );
};

export default AnnouncementStack;
