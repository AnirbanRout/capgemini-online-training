import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View } from "react-native";

const MapDemo = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="My Marker"
          description="This is a marker"
        />
      </MapView>
    </View>
  );
};

export default MapDemo;
