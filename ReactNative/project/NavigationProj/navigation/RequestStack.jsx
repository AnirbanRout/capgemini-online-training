import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Requests from "../pages/Requests";
import RequestDetails from "../pages/RequestDetails";
import AddRequest from "../pages/AddRequest";

const Stack = createNativeStackNavigator();

const RequestStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Requests" component={Requests} />
      <Stack.Screen name="RequestDetails" component={RequestDetails} />
      <Stack.Screen name="AddRequest" component={AddRequest} />
    </Stack.Navigator>
  );
};

export default RequestStack;
