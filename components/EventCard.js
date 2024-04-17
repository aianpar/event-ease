import { View, TouchableOpacity, Text, Pressable, Image } from "react-native";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ButtonCard from "./ButtonCard";

const cardStyle = require("../assets/bg-image/cardstyle.png");


export default function EventCard({ event_name, address, permission, date , id ,name , avatar, path , byUser, isAdded , refreshPage}) {
  function handlePress() {
    router.navigate(`(modals)/Events/${id}`);
  }
//Time Converter
  const convDate = new Date(date * 1000)

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let timeHrs = convDate.getHours();
  let timeMin = convDate.getMinutes();

  const amPM = timeHrs >= 12 ? 'PM' : 'AM';
  timeHrs = timeHrs % 12;
  timeHrs = timeHrs ? timeHrs : 12;

  function doubleDigit(num){
    return num < 10 ? '0' + `${num}` : num;
  }
//***** */

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.cardStyle__wrap}>
        <Image source={cardStyle} style={styles.cardStyle} />
      </View>
      <View style={styles.cardWrapper}>
        <View style={styles.cardHeader}>
          <View style={styles.cardHeader__user}>
            <Image source={{uri:`https://event-ease-api-a8bf3c36c9cb.herokuapp.com/userImg/${avatar}`}} style={styles.cardHeader__image}></Image>
            <View style={styles.cardHeader__textWrap}>
              <Text style={styles.cardHeader__subhead}>Created by</Text>
              <Text style={styles.cardHeader__header}>{name}</Text>
            </View>
          </View>
        <ButtonCard isAdded={isAdded} byUser={byUser} id={id} refreshPage={refreshPage}></ButtonCard>
        </View>
        <View style={styles.cardDetails}>
          <View>
            <Text style={styles.cardDetails__type}>{permission} Event</Text>
            <Text style={styles.cardDetails__name}>{event_name}</Text>
            <View style={styles.cardDetails__locationWrap}>
              <Ionicons name="location-outline" size={24} color="#BEBEBE" />
              <Text style={styles.cardDetails__location}>{address}</Text>
            </View>
          </View>
          <View style={{ alignItems: "flex-end"}}>
            <Text style={styles.cardDetails__date}>{convDate.getDate()}</Text>
            <Text style={styles.cardDetails__month}>{monthNames[convDate.getMonth()]}</Text>
            <Text style={styles.cardDetails__time}>{`${timeHrs}:${doubleDigit(timeMin)} ${amPM}`}</Text>
          </View>
        </View>
      </View>
      <Image style={styles.cardPreview} source={{uri:`https://event-ease-api-a8bf3c36c9cb.herokuapp.com/eventImg/${path}`}}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 370,
    backgroundColor: "#3B3B3B",
    borderRadius: 10,
  },
  cardStyle__wrap: {
    left: "50%",
    right: "50%",
    position: "absolute",
    alignItems: "center",
  },
  cardStyle: {
    height: 25,
    width: 125,
  },
  cardWrapper: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  cardHeader: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardHeader__image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 4,
  },
  cardHeader__user: {
    flexDirection: "column",
  },
  cardDetails: {
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  cardPreview: {
    resizeMode: "cover",
    height: 140,
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardHeader__textWrap: {
    justifyContent: "center",
  },
  cardHeader__subhead: {
    color: "#BEBEBE",
    fontSize: 12,
  },
  cardHeader__header: {
    color: "#FDFDFD",
  },
  cardDetails__locationWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardDetails__type: {
    color: "#BEBEBE",
    fontSize: 14,
  },
  cardDetails__name: {
    width: 200,
    flexWrap: "wrap",
    color: "#FDFDFD",
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 4,
  },
  cardDetails__location: {
    width: 200,
    flexWrap: "wrap",
    color: "#BEBEBE",
    fontSize: 14,
  },
  cardDetails__date: {
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 40,
  },
  cardDetails__month: {
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: -5,
  },
  cardDetails__time: {
    color: "#FDFDFD",
    fontSize: 16,
  },
});
