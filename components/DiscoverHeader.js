import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const discoverBg = require('../assets/bg-image/discoverbg.png');


export default function DiscoverHeader() {
  return (
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <View style={styles.actionRow__TextWrap}>
            <Text style={styles.actionRow__Title}>Discover</Text>
            <View>
              <Text style={styles.actionRow__Location}>Toronto,ON</Text>
            </View>
          </View>
          <View style={styles.actionRow__BtnWrap}>
            <TouchableOpacity style={styles.actionRow__Filter}>
              <AntDesign name="filter" size={24} color="#FDFDFD" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionRow__Search}>
              <AntDesign name="search1" size={24} color="#FDFDFD" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.eclipseDec}></View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    backgroundColor: "#282828",
  },
  actionRow: {
    paddingTop: 60,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  actionRow__BtnWrap: {
    flexDirection: "row",
    gap: 8,
  },
  actionRow__Title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FDFDFD"
  },
  actionRow__Location:{
    fontSize: 11,
    fontWeight: "bold",
    color: "#C0C0C0"
  },
  actionRow__Filter:{
    padding: 8,
  },
    actionRow__Search:{
    backgroundColor: "#0C0C0C",
    borderRadius: 10,
    padding: 8,
  },
});
