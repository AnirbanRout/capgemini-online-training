import { View, Text } from "react-native";

const Header = () => {
  return (
    <View style={{ alignItems: "center", marginBottom: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Student Verification
      </Text>
      <Text style={{ textAlign: "center" }}>
        Complete your student identity verification
      </Text>
    </View>
  );
};

export default Header;
