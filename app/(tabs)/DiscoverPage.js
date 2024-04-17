import { Link, Stack } from "expo-router";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StyleSheet } from "react-native";
import DiscoverHeader from "../../components/DiscoverHeader";
import EventCard from "../../components/EventCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Entypo } from "@expo/vector-icons";
import ButtonRedirect from "../../components/ButtonRedirect";
import { useFocusEffect, router } from "expo-router";
import { useCallback } from "react";
import ButtonCard from "../../components/ButtonCard";
import MapButton from "../../components/MapButton"

const { width } = Dimensions.get("window");

const categories = [
  {
    name: "Today",
    uri: require("../../assets/icons/category/today.png"),
  },
  {
    name: "Tomorrow",
    uri: require("../../assets/icons/category/tommorow.png"),
  },
  {
    name: "This Week",
    uri: require("../../assets/icons/category/thisweek.png"),
  },
  {
    name: "This Month",
    uri: require("../../assets/icons/category/thismonth.png"),
  },
  {
    name: "By Friends",
    uri: require("../../assets/icons/category/byfriends.png"),
  },
];

export default function DiscoverPage() {
  const [filter, setFilter] = useState("");
  const [eventCard, setEventCard] = useState([]);
  const [allEvents, setAllEvents] = useState([])
  useFocusEffect(
    useCallback(() => {
      axios.get("http://localhost:8080/events").then((r) => {
        const data = r.data;
        setEventCard(data);
        setAllEvents(data)
      });
    }, [])
  );

  

  function toggleCategory(item) {
    if (filter === `${item}`){
      setEventCard(allEvents)
      setFilter("")
    } else {
      let filteredEvents = allEvents;

      if (item === "Today"){
        filteredEvents = allEvents.filter(e => e.isToday === 1)

      }
      else if (item === "Tomorrow"){
        filteredEvents = allEvents.filter(e => e.isTomorrow === 1)
      }
      else if  (item === "This week"){
        filteredEvents = allEvents.filter(e => e.isThisWeek === 1)

      }
      else if  (item === "This Month"){
        filteredEvents = allEvents.filter(e => e.isThisMonth === 1)

      }
      else if  (item === "By Friends"){
        filteredEvents = []
      }
      setEventCard(filteredEvents)
      setFilter(item)
    }
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          header: () => {
            return <DiscoverHeader />;
          },
        }}
      />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 12, gap: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            gap: 8,
            // paddingHorizontal: 12,
          }}
        >
          {categories.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                toggleCategory(item.name);
              }}
              style={item.name === filter? styles.categories_selected:styles.categories}
              key={index}
            >
              <Image
                style={styles.categories__image}
                source={item.uri}
                width={50}
              ></Image>
              <Text style={styles.categories__text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.header}>Around You</Text>
        {eventCard
          .filter((item) => item.byUser !== 1 ).filter((item)=> item.isAdded !==1 )
          .map((item, i) => {
            return (
              <EventCard
                key={i}
                event_name={item.event_name}
                permission={item.permission}
                address={item.address}
                id={item.id}
                name={item.name}
                avatar={item.avatar}
                date={item.timestamp_start}
                path={item.eventimage_path}
                byUser={item.byUser}
                isAdded={item.isAdded}
              ></EventCard>
            );
          })}
      </ScrollView>
      <MapButton></MapButton>
      <ButtonRedirect></ButtonRedirect>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
  },
  categories: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 14,
  },
  categories_selected: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 12,
    borderBottomColor: "white",
    borderBottomWidth: 2
  },
  categories__image: {
    width: width * 0.2,
    height: width * 0.2,
  },
  categories__text: {
    paddingTop: 6,
    fontSize: 11,
    fontWeight: "bold",
    color: "white",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FDFDFD",
  },
});
