import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#E6E6E6",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#181818",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 20,
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
            <View>
              <Feather name="home" size={24} color={color} />
            </View>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="DiscoverPage/DiscoverPage"
        options={{
          headerShown: false,
          title: "Discover",
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="EventsPage/EventsPage"
        options={{
          headerShown: false,
          title: "Events",
          tabBarIcon: ({ color }) => (
            <Feather name="file" size={24} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="ProfilePage/ProfilePage"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
