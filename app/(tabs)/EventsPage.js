import { Text, View } from "react-native"
import { StyleSheet } from "react-native";
import EventCard from "../../components/EventCard";

export default function EventsPage(){
    return (
        <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Your Events</Text>
          <EventCard></EventCard>
        </View>
      </View>
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
  });
  