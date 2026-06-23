import React, { useState } from "react";

import { View, ScrollView } from "react-native";
import { StyleSheet } from "react-native-web";

import { Button, Text } from "react-native";

const ScrollEvent = () => {
  const [button, showButton] = useState(false);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    console.log("Scroll position:", scrollPosition);
    if (scrollPosition > 100) {
      showButton(true);
    } else {
      showButton(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
        style={styles.scrollView}
      >
        {[...Array(50).keys()].map((item) => (
          <Text key={item}>Item {item}</Text>
        ))}
      </ScrollView>
      {button && (
        <Button
          title="Scroll to Top"
          onPress={() => alert("Scroll to Top button pressed")}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default ScrollEvent;
