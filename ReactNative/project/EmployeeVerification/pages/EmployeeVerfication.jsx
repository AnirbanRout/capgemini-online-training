import ActionButtons from "../components/ActionButtons";
import Header from "../components/Header";
import IdCard from "../components/IdCard";
import ProfilePhoto from "../components/ProfilePhoto";

import React from "react";
import { View } from "react-native";

import { useState } from "react";

const EmployeeVerification = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [idCard, setIdCard] = useState([]);

  return (
    <View>
      <Header />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <ProfilePhoto
          profilePhoto={profilePhoto}
          setProfilePhoto={setProfilePhoto}
        />
        <IdCard idCard={idCard} setIdCard={setIdCard} />
      </View>
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <ActionButtons profilePhoto={profilePhoto} idCard={idCard} />
      </View>
    </View>
  );
};

export default EmployeeVerification;
