import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import axios from "axios";
import { router } from "expo-router";

export default function Map() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/events`).then((r) => {
      const response = r.data;
      setData(response);
      console.log(response);
    });
  }, []);

  const [mapRegion, setmapRegion] = useState({
    latitude: 43.649249,
    latitudeDelta: 0.024842,
    longitude: -79.38067,
    longitudeDelta: 0.054073,
  });

  function onMarkerSelected(id) {
    router.back();
    router.push(`/Events/${id}`);
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        showsUserLocation
        provider={PROVIDER_GOOGLE}
        style={{ width: "100%", height: "100%" }}
        region={mapRegion}
      >
        {data.map((item, i) => {
          return (
            <Marker
              onPress={() => {
                onMarkerSelected(item.id);
              }}
              key={i}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
                longitudeDelta: item.longitudeDelta,
                latitudeDelta: item.latitudeDelta,
              }}
            >
              <View style={styles.marker}>
                <Text style={styles.marker_text}>{item.event_name}</Text>
                <Image
                  style={styles.image}
                  source={require("../../assets/location.png")}
                ></Image>
              </View>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  marker: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: "#00BB4B",
    alignItems: "center",
    gap: 5,
  },
  marker_text: {
    overflow:"hidden",
    textAlign: "center",
    color: "black",
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 20,
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 20,
  },
  image:{
    width:30,
    height: 39,
  }
});
