import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import { StyleSheet } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const tips = [
  "Drink more water",
  "Take regular breaks",
  "Exercise daily",
  "Eat healthy food",
  "Sleep well",
  "Reduce screen time",
  "Practice meditation",
  "Stay positive",
  "Walk 10 minutes daily",
  "Maintain proper posture",
];

const ScrollTask = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event) => {
    const y = event.nativeEvent.contentOffset.y;
    setScrollY(y);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Scroll Task</Text>
        <Text style={styles.scrollText}>
          Scroll Position: {scrollY.toFixed(2)}
        </Text>
        <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
          {tips.map((tip) => {
            return (
              <View style={styles.card} key={tip}>
                <Text style={styles.cardText}>{tip}</Text>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  scrollText: {
    marginBottom: 20,
    fontSize: 16,
  },

  card: {
    backgroundColor: "lightcyan",
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
  },

  cardText: {
    fontSize: 16,
  },
});

export default ScrollTask;
