import { Text, View, StyleSheet, Touchable, Pressable } from "react-native";
import { Link , router} from "expo-router";
import { Entypo } from "@expo/vector-icons";

export default function ButtonRedirect() {
    
    function handlePress(){
        router.navigate("/CreateEvent")
    }


  return (
    <Pressable onPress={handlePress} style={styles.bttn_wrap} href={"#"}>
        <Entypo name="plus" size={25} color="#FDFDFD" style={styles.bttn}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bttn_wrap: {
    flex: 1,
    backgroundColor: "black",
    width: 60,
    height: 60,
    borderRadius: 30,    
    position: "absolute",
    bottom: 20,
    right: 30,
    justifyContent: 'center',
  },
  bttn: {
    textAlign: "center",
    margin: "auto",    
  },
});
