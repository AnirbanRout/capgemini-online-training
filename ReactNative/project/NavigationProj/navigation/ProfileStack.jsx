import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
