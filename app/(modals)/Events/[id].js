import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import ButtonCard from "../../../components/ButtonCard";
import axios from "axios";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { router } from "expo-router";

const gradient = require("../../../assets/bg-image/gradient.png");
function handleBack() {
  router.back();
}

const fromCard = 1;
export default function Event() {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [eventCard, setEventCard] = useState([]);

  const { id } = useLocalSearchParams();

  useEffect(() => {
    axios.get(`https://event-ease-api-a8bf3c36c9cb.herokuapp.com/events/${id}`).then((r) => {
      const data = r.data;
      setEventCard(data);
      console.log(data)
      setmapRegion({
        latitude: data.latitude,
        longitude: data.longitude,
        latitudeDelta: data.latitudeDelta,
        longitudeDelta: data.longitudeDelta,
      });
    });
  }, []);

  // Time Converter
  const convDate = new Date(eventCard.timestamp_start * 1000);
  const endDate = new Date(eventCard.timestamp_end * 1000);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let timeHrs = convDate.getHours();
  let timeMin = convDate.getMinutes();

  const amPM = timeHrs >= 12 ? "PM" : "AM";
  timeHrs = timeHrs % 12;
  timeHrs = timeHrs ? timeHrs : 12;

  function doubleDigit(num) {
    return num < 10 ? "0" + `${num}` : num;
  }
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayOfWeek = days[convDate.getDay()];

  function convertEndDate(time) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let timeHrs = time.getHours();
    let timeMin = time.getMinutes();
    const amPM = timeHrs >= 12 ? "PM" : "AM";
    timeHrs = timeHrs % 12;
    timeHrs = timeHrs ? timeHrs : 12;

    function doubleDigit(num) {
      return num < 10 ? "0" + `${num}` : num;
    }

    return `${endDate.getDate()} ${
      monthNames[endDate.getMonth()]
    } ${endDate.getFullYear()} at ${timeHrs}:${doubleDigit(timeMin)} ${amPM}`;
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image
          style={styles.header__image}
          source={{
            uri: `https://event-ease-api-a8bf3c36c9cb.herokuapp.com/eventImg/${eventCard.eventimage_path}`,
          }}
        />
        <Image style={styles.header__imageGrad} source={gradient} />
        <TouchableOpacity onPress={handleBack} style={styles.header__backIcon}>
          <AntDesign name="down" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.header__wrap}>
          <View style={styles.header__textWrap}>
            <Text style={styles.header__headline}>{eventCard.event_name}</Text>
            <Text style={styles.header__date}>
              {convDate.getDate()} {monthNames[convDate.getMonth()]}{" "}
              {convDate.getFullYear()} at{" "}
              {`${timeHrs}:${doubleDigit(timeMin)} ${amPM}`}
            </Text>
          </View>
          <View style={styles.header__hostWrap}>
            <Image
              source={{
                uri: `https://event-ease-api-a8bf3c36c9cb.herokuapp.com/userImg/${eventCard.avatar}`,
              }}
              style={styles.header__hostImg}
            />
            <Text style={styles.header__hostText}>Created by</Text>
            <Text style={styles.header__hostName}>{eventCard.name}</Text>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.action__row}>
          <ButtonCard isAdded={eventCard.isAdded} byUser={eventCard.byUser} fromCard={fromCard} id={id}></ButtonCard>

          <TouchableOpacity>
            <EvilIcons name="share-google" size={34} color="#CFCFCF" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.infoBox__dateWrap}>
            <Feather name="calendar" size={24} color="#FDFDFD" />
            <View>
              <Text style={styles.dateWrap__dayofweek}>{dayOfWeek}</Text>
              <Text style={styles.dateWrap__text}>
                {convDate.getDate()} {monthNames[convDate.getMonth()]}{" "}
                {convDate.getFullYear()}
              </Text>
              <Text style={styles.dateWrap__text}>
                {`${timeHrs}:${doubleDigit(timeMin)} ${amPM}`} - {" "}
                {convertEndDate(endDate)}
              </Text>
            </View>
          </View>
          <View style={styles.infoBox__locationMap}>
            <View style={styles.infoBox__locationMapTextWrap}>
              <Ionicons name="location-outline" size={28} color="#FDFDFD" />
              <Text style={styles.infoBox__locationMapText}>
                {eventCard.address}
              </Text>
            </View>
            <View style={styles.infoBox__locationMapWrap}>
              <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={mapRegion}
                scrollEnabled={false}
                zoomEnabled={false}
                minZoomLevel={15}
              >
                <Marker coordinate={mapRegion} title="Marker"></Marker>
              </MapView>
            </View>
          </View>
        </View>
        <View style={styles.aboutEvent}>
          <Text style={styles.aboutEvent__header}>About</Text>
          <Text style={styles.aboutEvent__text}>{eventCard.description}</Text>
        </View>
        <View style={styles.hostPage}>
          <Image
            style={styles.hostPage__avatar}
            source={{
              uri: `https://event-ease-api-a8bf3c36c9cb.herokuapp.com/userImg/${eventCard.avatar}`,
            }}
          ></Image>
          <View style={styles.hostPage__textWrap}>
            <Text style={styles.hostPage__name}>{eventCard.name}</Text>
            <Text style={styles.hostPage__userTag}>{eventCard.tag}</Text>
            <Text style={styles.hostPage__description}>{eventCard.bio}</Text>
          </View>
          <TouchableOpacity style={styles.hostPage__btnAction}>
            <Text style={styles.hostPage__btnActionText}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.attendeesBox}>
          <Ionicons name="people-outline" size={24} color="#FDFDFD" />
          <Text style={styles.attendeesBox__text}>
            {eventCard.attendees}+ are going to attend this event
          </Text>
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
    marginTop: 100,
  },
  header__image: {
    width: "100%",
    height: 280,
    position: "absolute",
  },
  header__hostWrap: {
    position: "relative",
    top: 70,
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
    width: 200,
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
    marginTop: 35,
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
    overflow: "hidden",
    borderRadius: 20,
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
    marginBottom: 10,
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
  attendeesBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(13,13,13,0.5)",
    padding: 32,
    borderRadius: 20,
    gap: 10,
    marginBottom: 40,
  },
  attendeesBox__text: {
    color: "#FDFDFD",
  },
});
