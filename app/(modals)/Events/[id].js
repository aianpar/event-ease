import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MapView, {Marker} from "react-native-maps";

import { router } from "expo-router";

const gradient = require("../../../assets/bg-image/gradient.png");
function handleBack() {
  router.back();
}
export default function Event() {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const { id } = useLocalSearchParams();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image
          style={styles.header__image}
          source={require("../../../assets/testAsset/1.png")}
        />
        <Image style={styles.header__imageGrad} source={gradient} />
        <TouchableOpacity onPress={handleBack} style={styles.header__backIcon}>
          <AntDesign name="down" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.header__wrap}>
          <View style={styles.header__textWrap}>
            <Text style={styles.header__headline}>Lisa's Birthday</Text>
            <Text style={styles.header__date}>21 April 2023 at 6:30pm</Text>
          </View>
          <View style={styles.header__hostWrap}>
            <Image
              source={require("../../../assets/testAsset/uifaces-popular-image.jpg")}
              style={styles.header__hostImg}
            />
            <Text style={styles.header__hostText}>Hosted by</Text>
            <Text style={styles.header__hostName}>Kyle</Text>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.action__row}>
          <TouchableOpacity style={styles.joinButton}>
            <Entypo name="plus" size={18} color="#FDFDFD" />
            <Text style={{ color: "#FDFDFD" }}>Join</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <EvilIcons name="share-google" size={34} color="#CFCFCF" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.infoBox__dateWrap}>
            <Feather name="calendar" size={24} color="#FDFDFD" />
            <View>
              <Text style={styles.dateWrap__dayofweek}>Saturday</Text>
              <Text style={styles.dateWrap__text}>21 April 2023</Text>
              <Text style={styles.dateWrap__text}>6:30pm - 9pm</Text>
            </View>
          </View>
          <View style={styles.infoBox__locationMap}>
            <View style={styles.infoBox__locationMapTextWrap}>
              <Ionicons name="location-outline" size={28} color="#FDFDFD" />
              <Text style={styles.infoBox__locationMapText}>
                144 Front St W, Toronto,{"\n"}ON M5J 2L7
              </Text>
            </View>
            <View style={styles.infoBox__locationMapWrap}>
              <MapView style={styles.map} region={mapRegion} scrollEnabled={false} zoomEnabled={false}>
                <Marker coordinate={mapRegion} title='Marker'></Marker>
              </MapView>
            </View>
          </View>
        </View>
        <View style={styles.aboutEvent}>
          <Text style={styles.aboutEvent__header}>About</Text>
          <Text style={styles.aboutEvent__text}>
            We are having a birthday party for Lisa this Saturday. The address
            is 144 Front St W, come anytime after 7:00, BYOB, Potluck. If you
            want to help us with the party DM me in the chat. Hope to see you
            then!!!
          </Text>
        </View>
        <View style={styles.hostPage}>
          <Image
            style={styles.hostPage__avatar}
            source={require("../../../assets/testAsset/uifaces-popular-image.jpg")}
          ></Image>
          <View style={styles.hostPage__textWrap}>
            <Text style={styles.hostPage__name}>Kyle</Text>
            <Text style={styles.hostPage__userTag}>@kyle3000</Text>
            <Text style={styles.hostPage__description}>
              Explorer with a penchant for life's surprises.
            </Text>
          </View>
          <TouchableOpacity style={styles.hostPage__btnAction}>
            <Text style={styles.hostPage__btnActionText}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.attendeesBox}>
          <Ionicons name="people-outline" size={24} color="#FDFDFD" />
          <Text style={styles.attendeesBox__text}>20+ are going to attend this event</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#201F1F",
  },
  header__textWrap: {
    position: "relative",
    top: 20,
  },
  header__wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginTop: 130,
  },
  header__image: {
    width: "100%",
    height: 280,
    position: "absolute",
  },
  header__hostWrap: {
    position: "relative",
    top: 50,
    right: 10,
    alignItems: "flex-end",
  },
  header__hostImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  header__imageGrad: {
    width: "100%",
    height: 280,
    position: "absolute",
  },
  header__hostText: {
    marginTop: 10,
    color: "#CBCBCB",
  },
  header__hostName: {
    color: "#FDFDFD",
  },
  header__backIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 42,
    height: 42,
    marginLeft: "auto",
    marginRight: 12,
    marginTop: 16,
  },
  header__headline: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FDFDFD",
  },
  header__date: {
    color: "#CBCBCB",
  },
  main: {
    paddingHorizontal: 12,
  },
  joinButton: {
    flexDirection: "row",
    gap: 4,
    width: 100,
    height: 40,
    backgroundColor: "#00BB4B",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  action__row: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 20,
  },
  infoBox: {
    height: 330,
    backgroundColor: "rgba(13,13,13,0.5)",
    borderRadius: 20,
    padding: 24,
  },
  infoBox__dateWrap: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "#FDFDFD",
    paddingBottom: 20,
  },
  dateWrap__dayofweek: {
    color: "white",
  },
  dateWrap__text: {
    color: "#CDCDCD",
  },
  infoBox__locationMap: {
    flex: 1,
  },
  infoBox__locationMapWrap: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  infoBox__locationMapTextWrap: {
    paddingVertical: 16,
    flexDirection: "row",
    gap: 12,
  },
  infoBox__locationMapText: {
    color: "#CBCBCB",
  },
  aboutEvent: {
    paddingHorizontal: 8,
  },
  aboutEvent__header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FDFDFD",
    paddingVertical: 16,
  },
  aboutEvent__text: {
    color: "#FDFDFD",
    marginBottom: 16,
  },
  hostPage: {
    backgroundColor: "rgba(13,13,13,0.5)",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 32,
    gap: 16,
    marginBottom: 10
  },
  hostPage__avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  hostPage__textWrap: {
    flex: 2,
  },
  hostPage__btnAction: {
    flex: 1,
  },
  hostPage__name: {
    color: "#FDFDFD",
    fontSize: 18,
  },
  hostPage__userTag: {
    color: "#CBCBCB",
  },
  hostPage__description: {
    color: "#FDFDFD",
    flexWrap: "wrap",
  },
  hostPage__btnAction: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    width: 80,
    height: 30,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
  },
  hostPage__btnActionText: {
    color: "white",
  },
  attendeesBox:{
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(13,13,13,0.5)",
    padding: 32,
    borderRadius: 20,
    gap: 10,
    marginBottom: 40
  },
  attendeesBox__text:{
    color: "#FDFDFD",
  }
});
