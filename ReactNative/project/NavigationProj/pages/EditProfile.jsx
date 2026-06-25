import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import { useDispatch } from "react-redux";
import { updateResident } from "../redux/Slice/ResidentSlice";

const EditProfile = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { resident } = route.params;

  const [name, setName] = useState(resident.name);
  const [flatNo, setFlatNo] = useState(resident.flatNo);
  const [phone, setPhone] = useState(resident.phone);
  const [email, setEmail] = useState(resident.email);

  const handleSave = () => {
    const updatedResident = {
      ...resident,
      name,
      flatNo,
      phone,
      email,
    };

    dispatch(updateResident(updatedResident));
    alert("Resident details updated successfully!");
    navigation.goBack();
  };

  return (
    <View>
      <Text>Edit Profile Details</Text>

      <TextInput placeholder="Name" value={name} onChangeText={setName} />

      <TextInput
        placeholder="Flat No"
        value={flatNo}
        onChangeText={setFlatNo}
      />

      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />

      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default EditProfile;
