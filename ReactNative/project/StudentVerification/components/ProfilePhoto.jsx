import React, { useState } from "react";
import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ProfilePhoto = ({ profilePhoto, setProfilePhoto }) => {
  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      alert("Camera permission is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePhoto(result.assets[0].uri);
    }
  };

  const handleRemovePhoto = () => {
    if (!profilePhoto) {
      alert("No profile photo to remove.");
      return;
    }
    setProfilePhoto(null);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ marginBottom: 20 }}>
        <Button title="Take a Photo" onPress={takePhoto} />
      </View>

      {profilePhoto && (
        <Image
          source={{ uri: profilePhoto }}
          style={{ width: 200, height: 200, margin: 20 }}
        />
      )}
      <View style={{ marginBottom: 20 }}>
        <Button title="Remove Profile Photo" onPress={handleRemovePhoto} />
      </View>
    </View>
  );
};

export default ProfilePhoto;
