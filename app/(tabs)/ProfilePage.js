import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080").then((r) => {
      const data = r.data;
      setUser(data)
    });
  }, []);

  if (!user) {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Profile</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Profile</Text>
        <Image source={{uri:`http://localhost:8080/userImg/${user.user_avatar}`}} style={{flex:1}} width={200} height={200}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#151515",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
