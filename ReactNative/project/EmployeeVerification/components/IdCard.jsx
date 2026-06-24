import React from "react";
import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ScrollView } from "react-native";

const IdCard = ({ idCard, setIdCard }) => {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      const imageUris = result.assets.map((asset) => {
        return asset.uri;
      });

      setIdCard(imageUris);
    }
  };

  const handleRemoveImage = () => {
    if (idCard.length === 0) {
      alert("No ID card images to remove.");
      return;
    }

    setIdCard([]);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ marginBottom: 20 }}>
        <Button title="Pick Images" onPress={pickImage} />
      </View>

      <ScrollView
        style={{
          height: 400,
        }}
      >
        {idCard.length > 0 &&
          idCard.map((uri, index) => (
            <Image
              key={index}
              source={{ uri }}
              style={{
                width: 200,
                height: 200,
                margin: 10,
              }}
            />
          ))}
      </ScrollView>

      <Button title="Remove Images" onPress={handleRemoveImage} />
    </View>
  );
};

export default IdCard;
