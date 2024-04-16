import { View, Text } from "react-native";
import { useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default function Map() {
  const [mapRegion, setmapRegion] = useState({
    latitude: 43.649249,
    latitudeDelta: 0.024842,
    longitude: -79.38067,
    longitudeDelta: 0.054073,
  });

  return (
    <View style={{flex:1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ width: "100%", height: "100%" }}
        region={mapRegion}
      >
     
      </MapView>
    </View>
  );
}
