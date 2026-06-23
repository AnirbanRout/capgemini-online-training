// import React, { useState } from "react";
// import { View, Button, Image } from "react-native";
// import * as ImagePicker from "expo-image-picker";

// const ProfilePhoto = ({ profilePhoto, setProfilePhoto }) => {
//   const takePhoto = async () => {
//     const permission = await ImagePicker.requestCameraPermissionsAsync();

//     if (!permission.granted) {
//       alert("Camera permission is required!");
//       return;
//     }

//     const result = await ImagePicker.launchCameraAsync({
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setProfilePhoto(result.assets[0].uri);
//     }
//   };

//   const handleRemovePhoto = () => {
//     if (!profilePhoto) {
//       alert("No profile photo to remove.");
//       return;
//     }
//     setProfilePhoto(null);
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <View style={{ marginBottom: 20 }}>
//         <Button title="Take a Photo" onPress={takePhoto} />
//       </View>

//       {profilePhoto && (
//         <Image
//           source={{ uri: profilePhoto }}
//           style={{ width: 200, height: 200, margin: 20 }}
//         />
//       )}
//       <View style={{ marginBottom: 20 }}>
//         <Button title="Remove Profile Photo" onPress={handleRemovePhoto} />
//       </View>
//     </View>
//   );
// };

// export default ProfilePhoto;

import React, { useRef, useState } from "react";
import { View, Text, Button, Image } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

const ProfilePhoto = ({ profilePhoto, setProfilePhoto }) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);
  const cameraRef = useRef(null);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setProfilePhoto(photo.uri);
      setShowCamera(false);
    }
  };

  const handleOpenCamera = () => {
    if (!permission) return;

    if (!permission.granted) {
      requestPermission();
      return;
    }

    setShowCamera(true);
  };

  const handleRemovePhoto = () => {
    if (!profilePhoto) {
      alert("No profile photo to remove.");
      return;
    }
    setProfilePhoto(null);
  };

  if (!permission) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Loading camera permission...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={{ padding: 20, alignItems: "center" }}>
        <Text style={{ textAlign: "center", marginBottom: 10 }}>
          We need your permission to use the camera
        </Text>
        <Button title="Grant Camera Permission" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View style={{ alignItems: "center", padding: 20 }}>
      {showCamera && (
        <CameraView
          ref={cameraRef}
          style={{
            width: 300,
            height: 400,
            borderRadius: 12,
            overflow: "hidden",
          }}
          facing="back"
        />
      )}

      {!showCamera && (
        <View style={{ marginBottom: 15 }}>
          <Button title="Take a Photo" onPress={handleOpenCamera} />
        </View>
      )}

      {showCamera && (
        <View style={{ marginTop: 10 }}>
          <Button title="Capture Photo" onPress={takePhoto} />
        </View>
      )}

      {profilePhoto && (
        <Image
          source={{ uri: profilePhoto }}
          style={{
            width: 200,
            height: 200,
            marginTop: 20,
            borderRadius: 10,
          }}
        />
      )}

      <View style={{ marginTop: 20 }}>
        <Button title="Remove Profile Photo" onPress={handleRemovePhoto} />
      </View>
    </View>
  );
};

export default ProfilePhoto;
