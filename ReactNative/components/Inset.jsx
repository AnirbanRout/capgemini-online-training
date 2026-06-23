import { View, Text, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Inset = () => {
  const inset = useSafeAreaInsets();
  console.log("Inset values:", inset);

  return (
    <View
      style={{
        paddingTop: inset.top,
      }}
    >
      <Text>Hello World</Text>
      <Text>platform:{Platform.OS}</Text>
      {Platform.OS === "web" ? <Text>web view</Text> : <Text>mobile view</Text>}
    </View>
  );
};

export default Inset;
