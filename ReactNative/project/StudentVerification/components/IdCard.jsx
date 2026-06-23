import React, { useState } from "react";
import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const IdCard = ({ idCard, setIdCard }) => {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setIdCard(result.assets[0].uri);
    }
  };

  const handleRemoveImage = () => {
    if (!idCard) {
      alert("No ID card image to remove.");
      return;
    }
    setIdCard(null);
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
        <Button
          title="Pick an Image"
          onPress={pickImage}
          style={{ marginBottom: 20 }}
        />
      </View>

      {idCard && (
        <Image
          source={{ uri: idCard }}
          style={{
            width: 200,
            height: 200,
            margin: 20,
          }}
        />
      )}

      <View style={{ marginBottom: 20 }}>
        <Button
          title="Remove Image"
          onPress={handleRemoveImage}
          style={{ marginBottom: 20 }}
        />
      </View>
    </View>
  );
};

export default IdCard;
