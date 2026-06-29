import { coreModule } from "@reduxjs/toolkit/query";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MultipleMarker = () => {
  const [locations, setLocations] = useState([
    {
      id: 1,
      title: "Apollo Hospital",
      latitude: 12.93,
      longitude: 77.58,
    },
    {
      id: 2,
      title: "Barbeque Nation",
      latitude: 12.91,
      longitude: 77.58,
    },
  ]);

  const handlePress = (event) => {
    const coordinate = event.nativeEvent.coordinate;
    setLocations((prevLocations) => [
      ...prevLocations,
      {
        ...coordinate,
        id: prevLocations.length + 1,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Places</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 12.93,
          longitude: 77.58,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handlePress}
      >
        {locations.map((place) => (
          <Marker
            key={place.id}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
            title={place.title}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 16,
    paddingTop: 56,
    paddingBottom: 12,
  },
  map: {
    flex: 1,
  },
});

export default MultipleMarker;
