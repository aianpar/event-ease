import { Text, View, StyleSheet, Touchable, Pressable } from "react-native";
import { Link , router } from "expo-router";
import { Entypo } from "@expo/vector-icons";

export default function ButtonRedirect() {
    
    function handlePress(){
        router.navigate("(modals)/Map")
    }


  return (
    <Pressable onPress={handlePress} style={styles.bttn_wrap} href={"#"}>
        <Entypo name="map" size={25} color="#FDFDFD" style={styles.bttn}/>
        <Text style={styles.text}>Map</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bttn_wrap: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: "#00BB4B",
    width: 150,
    height: 40,
    borderRadius: 30,    
    position: "absolute",
    bottom: 30,
    left:'50%',
    transform: [{translateX:-80}],
    justifyContent: 'center',
    alignItems:'center',
    gap: 10
  },
  bttn: {
    textAlign: "center",
    margin: "auto",    
  },
  text:{
    color:"white",
    fontWeight: 'bold'
  }
});
