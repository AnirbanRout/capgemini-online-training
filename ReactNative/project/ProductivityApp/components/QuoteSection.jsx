import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QuoteSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.quote}>
        "The only way to do great work is to love what you do." - Steve Jobs
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF2FF",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 18,
    marginTop: 20,
    marginBottom: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },

  quote: {
    fontSize: 17,
    lineHeight: 28,
    textAlign: "center",
    fontStyle: "italic",
    color: "#374151",
  },
});

export default QuoteSection;
