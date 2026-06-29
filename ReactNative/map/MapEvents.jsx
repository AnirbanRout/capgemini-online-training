import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapEvents = () => {
  const [locations, setLocations] = useState({
    latitude: 12.93,
    longitude: 77.58,
  });

  const handleDrag = (event) => {
    const coordinate = event.nativeEvent.coordinate;
    setLocations(coordinate);
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
      >
        <Marker
          coordinate={{
            latitude: locations.latitude,
            longitude: locations.longitude,
          }}
          title="Current Location"
          description="this is the current location"
          pinColor="blue"
          draggable
          onDragEnd={handleDrag}
        />
      </MapView>

      <View style={{ padding: 16 }}>
        <Text>Latitude: {locations.latitude}</Text>
        <Text>Longitude: {locations.longitude}</Text>
      </View>
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

export default MapEvents;
