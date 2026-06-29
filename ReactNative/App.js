import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProductCart from "./storage/ProductCart.jsx";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ProductCart />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
