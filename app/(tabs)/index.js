import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Link, useFocusEffect } from "expo-router";
import ButtonRedirect from "../../components/ButtonRedirect";
import EventCard from "../../components/EventCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCallback } from "react";

export default function Page() {
  const [eventCard, setEventCard] = useState([]);
  useFocusEffect(
    useCallback(() => {
      axios.get("http://localhost:8080/events").then((r) => {
        const data = r.data;
        setEventCard(data);
      });
    }, [])
  );

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome,{"\n"}Alex!</Text>
            <Image style={styles.userImg} source={require('../../assets/testAsset/uifaces-popular-image.jpg')}/>
            <Image
              source={require("../../assets/bg-image/homebg.png")}
              style={styles.eclipseBg}
            />
          </View>
          <View>
            <Text style={styles.header_text}>Upcoming</Text>
          </View>
          <View style={styles.eventCard_wrap}>
          {eventCard
            .filter((item) => item.isAdded === 1)
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
            </View>

        </View>
      </ScrollView>
      <ButtonRedirect></ButtonRedirect>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: "#151515",
  },
  header: {
    flex: 1,
    height: 130,
    flexDirection: "row",
    justifyContent:"space-between"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    paddingTop: 60,
  },
  eclipseBg: {
    position: "absolute",
    zIndex: -1,
    top: -90,
    left: -100,
  },
  eventCard_wrap:{
    marginTop: 20,
    gap: 20,
  },
  header_text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#FDFDFD",
  },
  userImg:{
    width: 60,
    height: 60,
    borderRadius: 50,
    marginTop: 65,
    marginRight: 10,
  }
});
