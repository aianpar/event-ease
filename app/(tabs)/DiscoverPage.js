import { Stack } from "expo-router";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import DiscoverHeader from "../../components/DiscoverHeader";
import EventCard from "../../components/EventCard"
import todayIcon from "../../assets/icons/category/today.png";

const categories = [
  {
    name: "Today",
    uri: require("../../assets/icons/category/today.png"),
  },
  {
    name: "Tommorow",
    uri: require("../../assets/icons/category/tommorow.png"),
  },
  {
    name: "This Week",
    uri: require("../../assets/icons/category/thisweek.png"),
  },
  {
    name: "This Month",
    uri: require("../../assets/icons/category/thismonth.png"),
  },
  {
    name: "By Friends",
    uri: require("../../assets/icons/category/byfriends.png"),
  },
];

export default function DiscoverPage() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          header: () => {
            return <DiscoverHeader />;
          },
        }}
      />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 12 ,gap: 16}} showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            gap: 8,
            // paddingHorizontal: 12,
          }}
        >
          {categories.map((item, index) => (
            <TouchableOpacity style={styles.categories} key={index}>
              <Image
                style={styles.categories__image}
                source={item.uri}
                width={50}
              ></Image>
              <Text style={styles.categories__text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.header}>Around You</Text>

        <EventCard/>
        <EventCard/>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
  },
  categories: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
  },
  categories__image: {
    width: 80,
    height: 80,
  },
  categories__text: {
    paddingTop: 6,
    fontSize: 11,
    fontWeight: "bold",
    color: "white",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FDFDFD",
  },
});
