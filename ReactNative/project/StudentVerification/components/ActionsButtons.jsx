import { Button } from "react-native-web";
import React from "react";
import { View } from "react-native";

const ActionButtons = ({ profilePhoto, idCard }) => {
  const handleSubmission = () => {
    if (!profilePhoto || !idCard) {
      alert("Please upload both profile photo and ID card before submitting.");
      return;
    }
    alert("Submission successful!");
  };

  return (
    <View>
      <Button title="Submit" onPress={handleSubmission} />
    </View>
  );
};

export default ActionButtons;
