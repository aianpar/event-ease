import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
// import MapView from "react-native-maps";

import { router } from "expo-router";

const gradient = require("../../../assets/bg-image/gradient.png");
function handleBack() {
  router.back();
}
export default function Event() {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
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
            <Text style={styles.header__date}>20 April 2023 at 6:30pm</Text>
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
                <Text style={styles.dateWrap__text}>20 April 2023</Text>
                <Text style={styles.dateWrap__text}>6:30pm - 9pm</Text>
            </View>
          </View>
          {/* <View style={styles.infoBox__locationMap}>
              <MapView style={styles.map}></MapView>
          </View> */}
        </View>
      </View>
    </View>
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
  dateWrap__dayofweek:{
    color: "white",
  },
  dateWrap__text:{
    color:"#CDCDCD"
  },
  infoBox__locationMap:{
    flex: 1,
  },
  map:{
    width: "100%",
    height: "100%",
  }
});
