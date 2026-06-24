import { Button } from "react-native";
import { View, Text } from "react-native";

const Home = ({ navigation }) => {
  const foods = [
    { name: "Pizza", price: 12 },
    { name: "Burger", price: 8 },
    { name: "Pasta", price: 10 },
  ];

  return (
    <View>
      <Text>Food Items:</Text>
      {foods.map((food) => (
        <View key={food.name} style={{ marginBottom: 10 }}>
          <Text>{food.name}</Text>

          <Button
            title="View Details"
            onPress={() => navigation.navigate("Details", { food })}
          />
        </View>
      ))}
    </View>
  );
};

export default Home;
