import { StyleSheet, Text, View , Image } from "react-native";
import { Link } from 'expo-router';
import ButtonRedirect from "../../components/ButtonRedirect";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
        <Image source={require("../../assets/bg-image/homebg.png")} style={styles.eclipseBg}/>
      </View>

      <Link href={'(modals)/Filter'}>Filter</Link>
      <Link href={'/events/12'}>Link</Link>
      <ButtonRedirect></ButtonRedirect>
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
  eclipseBg:{
    position:"absolute",
    zIndex: -1,
    top: -90, 
    left: -100,
  }

});
