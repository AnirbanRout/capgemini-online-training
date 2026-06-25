import axios from "axios";
import React, { useEffect, useState } from "react";

import { View, Text, ScrollView } from "react-native";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const SplashScreenDemo = () => {
  const [data, setData] = useState([]);
  const [isAppReady, setIsAppReady] = useState(false);

  const prepareApp = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setData(response.data);
    } catch (e) {
      console.log("Error fetching data:", e);
    } finally {
      setIsAppReady(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    prepareApp();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {!isAppReady ? (
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          App is loading...
        </Text>
      ) : (
        <>
          <Text>Data fetched from API:</Text>

          <ScrollView style={{ flex: 1, padding: 10 }}>
            {data.map((item) => (
              <Text key={item.id}>{item.title}</Text>
            ))}
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default SplashScreenDemo;
