import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import * as Location from "expo-location";

export default function CurrentLocation() {
  const [status, setStatus] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  async function getCurrentLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setStatus("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location ? location.coords.latitude : 12.98,
          longitude: location ? location.coords.longitude : 77.35,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{
            latitude: location ? location.coords.latitude : 12.98,
            longitude: location ? location.coords.longitude : 77.35,
          }}
          title="Current Location"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

// import React, { use } from 'react';
// import MapView, { Marker } from 'react-native-maps';
// import { StyleSheet, View } from 'react-native';
// import * as Location from 'expo-location';

// export default function CurrentLocation() {
//     const [status, setStatus] = React.useState(null);
//     const [location, setLocation] = React.useState(null);
//     useEffect(() => {
//        getBackgroundPermissionsAsync()
//     }, []);
//     async function getBackgroundPermissionsAsync() {
//         const { status } = await Location.requestForegroundPermissionsAsync();
//         if(status !== 'granted') {
//             setStatus('Permission to access location was denied');
//             return;
//         }
//         const location = await Location.getCurrentPositionAsync({});
//         setLocation(location);
//     }
//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: location ? location.coords.latitude : 12.98,
//           longitude: location ? location.coords.longitude : 77.35,
//           latitudeDelta: 0.05,
//           longitudeDelta: 0.05
//         }}
//       >
//         <Marker
//           coordinate={{
//             latitude: location ? location.coords.latitude : 12.98,
//             longitude: location ? location.coords.longitude : 77.35
//           }}
//           title="Bangalore"
//         />
//       </MapView>
//     </View>
//   )
// }
