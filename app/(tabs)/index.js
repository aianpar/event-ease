import { StyleSheet, Text, View , Image, ScrollView } from "react-native";
import { Link } from 'expo-router';
import ButtonRedirect from "../../components/ButtonRedirect";
import EventCard from "../../components/EventCard";
import axios from "axios";
import { useEffect ,useState} from "react";

export default function Page() {
  const [eventCard, setEventCard] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/events").then((r) => {
      const data = r.data;
      setEventCard(data);
      console.log(data)
    });
  },[]);

  return (
    <>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    <View >
      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
        <Image source={require("../../assets/bg-image/homebg.png")} style={styles.eclipseBg}/>
      </View>
      <View><Text style={{color:"white", fontSize:25}}>Upcoming</Text></View>
      {eventCard.filter(item => item.isAdded === 1).map((item, i) => {
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
      <Link href={'(modals)/Filter'}>Filter</Link>
      <Link href={'/events/12'}>Link</Link>
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
  eclipseBg:{
    position:"absolute",
    zIndex: -1,
    top: -90, 
    left: -100,
  }

});
