import { View, TouchableOpacity, Text, Pressable, Image } from "react-native";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const imageTest = require("../assets/testAsset/uifaces-popular-image.jpg");
const imageEvent = require("../assets/testAsset/1.png")

export default function EventCard() {

    function handlePress(){
        router.navigate("(modals)/Events/2");
    };


  return (
      <Pressable onPress={handlePress} style={styles.container}>
        <View style={styles.cardWrapper}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeader__user}>
              <Image source={imageTest} style={styles.cardHeader__image}></Image>
              <View style={styles.cardHeader__textWrap}>
                <Text style={styles.cardHeader__subhead}>From your Contacts</Text>
                <Text style={styles.cardHeader__header}>Kyle</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <AntDesign name="hearto" size={18} color="#FDFDFD" />
              <Text style={styles.buttonText}>Join</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardDetails}>
            <View>
              <Text style={styles.cardDetails__type}>Private Event</Text>
              <Text style={styles.cardDetails__name}>Lisa's Birthday</Text>
              <View style={styles.cardDetails__locationWrap}>
              <Ionicons name="location-outline" size={24} color="#BEBEBE" />
                <Text style={styles.cardDetails__location}>144 Front St W, Toronto,{"\n"}ON M5J 2L7</Text>
              </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.cardDetails__date}>21</Text>
              <Text style={styles.cardDetails__month}>february</Text>
              <Text style={styles.cardDetails__time}>6:30 pm</Text>
            </View>
          </View>
        </View>
        <Image style={styles.cardPreview} source={imageEvent}/>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height: 324,
    backgroundColor: "#3B3B3B",
    borderRadius: 10,
  },
  cardWrapper: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal:16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  cardHeader__image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  cardHeader__user: {
    flexDirection: "row",
  },
  button: {
    flexDirection:"row",
    gap: 4,
    width: 100,
    height: 40,
    backgroundColor: "#1D1D1D",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FDFDFD"
  },
  cardDetails: {
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  cardPreview: {
    resizeMode: "cover",
    width:"100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardHeader__textWrap:{
    justifyContent: "center",
    paddingLeft: 8
  },
  cardHeader__subhead:{
    color: "#BEBEBE",
    fontSize: 12
  },
  cardHeader__header:{
    color: "#FDFDFD",
  },
  cardDetails__locationWrap:{
    flexDirection:"row",
    alignItems:"center",
  },
  cardDetails__type:{
    color: "#BEBEBE",
    fontSize: 14,
  },
  cardDetails__name:{
    color: "#FDFDFD",
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 4,
  },
  cardDetails__location:{
    color: "#BEBEBE",
    fontSize: 14,
  },
  cardDetails__date:{
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 40,
  },
  cardDetails__month:{
    color: "#FDFDFD",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: -5,
  },
  cardDetails__time:{
    color: "#FDFDFD",
    fontSize: 16,
  }
});
