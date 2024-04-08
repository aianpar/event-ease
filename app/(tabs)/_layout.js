import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#343434",
        tabBarInactiveTintColor: "#EDEDED",
        tabBarStyle: {
          backgroundColor: "#181818",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 100,
        },
        tabBarLabelStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeTab : {}}>
              <Feather name="home" size={24} color={color} />
            </View>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="DiscoverPage"
        options={{
          headerShown: false,
          title: "Discover",
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeTab : {}}>
              <Feather name="search" size={24} color={color} />
            </View>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="EventsPage"
        options={{
          headerShown: false,
          title: "Events",
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeTab : {}}>
              <Feather name="file" size={24} color={color} />
            </View>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="ProfilePage"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeTab : {}}>
              <Feather name="user" size={24} color={color} />
            </View>
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  activeTab: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 50,
    width: 70,
    padding: 10,
  },
});
