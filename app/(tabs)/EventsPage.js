import { Text, View , ScrollView} from "react-native"
import { StyleSheet } from "react-native";
import EventCard from "../../components/EventCard";
import axios from "axios";
import { useFocusEffect } from "expo-router";
import { useState ,useEffect} from "react";
import { useCallback } from "react";


export default function EventsPage(){
  const [eventCard,setEventCard] = useState([])
  
  useFocusEffect(
    useCallback(() => {
      axios.get("https://event-ease-api-a8bf3c36c9cb.herokuapp.com/events").then((r) => {
        const data = r.data;
        setEventCard(data);
      });
    }, [])
  );

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Text style={styles.title}>Your Events</Text>
          <View style={styles.eventCard_wrap}>
          {eventCard.filter(item => item.byUser === 1).map((item, i) => {
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
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 24,
      paddingHorizontal: 12,
      backgroundColor: "#151515"
    },
    header: {
      flex: 1,
      height: 130,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color:"white",
      paddingTop: 60,
    },
    card: {
      marginVertical: 10,
    },
    eventCard_wrap:{
      marginTop: 20,
      gap: 20,
    }
  });
  