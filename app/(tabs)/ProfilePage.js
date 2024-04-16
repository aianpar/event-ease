import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080").then((r) => {
      const data = r.data;
      setUser(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.profile_wrap}>
          <View style={styles.image_wrap}>
            <Image
              style={styles.image}
              source={require("../../assets/testAsset/uifaces-popular-image.jpg")}
            />
          </View>
          <View style={styles.text_wrap}>
            <Text style={styles.text_name}>Alex Turner</Text>
            <Text style={styles.text_usertag}>@alexTurner</Text>
            <Text style={styles.text_bio}>
              Explorer 🌍 | Nature Lover 🌿 | Coffee Addict ☕️ | Bookworm 📚
            </Text>
          </View>
        </View>
        <View style={styles.proifleInfo_wrap}>
            <Text style={styles.text_usertag}>EventEase Member since</Text>
            <Text style={styles.date}>19 April 2024</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#151515",
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    paddingTop: 60,
  },
  profile_wrap: {
    alignItems:"flex-start",
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "#282828",
    borderRadius: 10,
    padding: 20,
    gap: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  text_name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  text_usertag: {
    color: "white",
  },
  text_bio: {
    paddingTop:20,
    width: 180,
    color: "white"
  },
  proifleInfo_wrap:{
    alignItems:"flex-start",
    marginTop: 20,
    backgroundColor: "#282828",
    borderRadius: 10,
    padding: 20,
    gap: 5,
  },
  date:{
    color:"#B0AAAA",
  }
});
