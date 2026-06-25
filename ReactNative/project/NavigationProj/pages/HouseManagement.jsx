import store from "../redux/Store/Store";
import { Provider } from "react-redux";

import RootNavigator from "../navigation/RootNavigator";

const HouseManagement = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default HouseManagement;
