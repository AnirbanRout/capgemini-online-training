import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { useMemo, useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native";

import { Modal } from "react-native";
import { Button } from "react-native";

const MapApp = () => {
  const [search, setSearch] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [newCoordinates, setNewCoordinates] = useState(null);

  const [serviceLocations, setServiceLocations] = useState([
    {
      id: 1,
      title: "Apollo Hospital",
      description: "Multi-speciality hospital",
      latitude: 13.08,
      longitude: 80.275,
      category: "Hospital",
      pinColor: "red",
    },
    {
      id: 2,
      title: "Central Police Station",
      description: "Police help center",
      latitude: 13.085,
      longitude: 80.269,
      category: "Police Station",
      pinColor: "blue",
    },
    {
      id: 3,
      title: "Indian Bank ATM",
      description: "24 Hours ATM",
      latitude: 13.083,
      longitude: 80.272,
      category: "ATM",
      pinColor: "green",
    },
    {
      id: 4,
      title: "ABC Restaurant",
      description: "South Indian Food",
      latitude: 13.081,
      longitude: 80.268,
      category: "Restaurant",
      pinColor: "orange",
    },
    {
      id: 5,
      title: "Fire Service",
      description: "Emergency fire station",
      latitude: 13.088,
      longitude: 80.274,
      category: "Fire Station",
      pinColor: "purple",
    },
    {
      id: 6,
      title: "Bus Stop",
      description: "Main city bus stop",
      latitude: 13.086,
      longitude: 80.276,
      category: "Bus Stop",
      pinColor: "brown",
    },
  ]);

  const handlePress = (event) => {
    const coordinate = event.nativeEvent.coordinate;
    setNewCoordinates(coordinate);
    setModalVisible(true);
  };

  const handleSearch = (text) => {
    setSearch(text);
  };

  const filteredLocations = useMemo(() => {
    return serviceLocations.filter((location) => {
      return (
        location.title.toLowerCase().includes(search.toLowerCase()) ||
        location.category.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [serviceLocations, search]);

  const handleCategory = (text) => {
    setSelectedCategory(text);
  };

  const addLocation = () => {
    if (
      !newCoordinates ||
      !selectedCategory ||
      selectedCategory.trim() === ""
    ) {
      alert("Please enter a valid category to proceed.");
      return;
    }
    const newLocation = {
      id: serviceLocations.length + 1,
      title: selectedCategory,
      description: "Custom location",
      latitude: newCoordinates.latitude,
      longitude: newCoordinates.longitude,
      category: selectedCategory,
      pinColor: "gray",
    };
    setServiceLocations((prevLocations) => [...prevLocations, newLocation]);
    setModalVisible(false);
    setSelectedCategory("");
    setNewCoordinates(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 10,
          backgroundColor: "#f0f0f0",
          alignItems: "center",
        }}
      >
        <Text>CityConnect Map App</Text>
        <Text>Find important city services near you</Text>

        <TextInput
          placeholder="Search for locations..."
          value={search}
          onChangeText={handleSearch}
          style={{
            width: 250,
            borderWidth: 1,
            padding: 8,
            backgroundColor: "white",
            borderRadius: 5,
          }}
        />
      </View>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: "white",
              padding: 20,
              borderRadius: 15,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 15,
                textAlign: "center",
              }}
            >
              Add Custom Location
            </Text>

            <TextInput
              placeholder="Enter category"
              value={selectedCategory}
              onChangeText={handleCategory}
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 8,
                padding: 10,
                marginBottom: 20,
              }}
            />

            <View style={{ marginTop: 10 }}>
              <Button title="Add Location" onPress={addLocation} />
            </View>

            <View style={{ marginTop: 10 }}>
              <Button
                title="Cancel"
                onPress={() => {
                  setModalVisible(false);
                  setSelectedCategory("");
                  setNewCoordinates(null);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 13.0827,
          longitude: 80.2707,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handlePress}
      >
        {filteredLocations.map((location) => {
          return (
            <Marker
              key={location.id}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.title}
              description={location.description}
              pinColor={location.pinColor}
            />
          );
        })}
      </MapView>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text>Total Locations:{filteredLocations.length}</Text>
      </View>
    </View>
  );
};

export default MapApp;
