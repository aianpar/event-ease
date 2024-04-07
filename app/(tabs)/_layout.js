import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="DiscoverPage/DiscoverPage"
        options={{
          headerShown: false,
          title: "Discover",
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="EventsPage/EventsPage"
        options={{
          headerShown: false,
          title: "Events",
        }}
      ></Tabs.Screen>
       <Tabs.Screen
        name="ProfilePage/ProfilePage"
        options={{
          headerShown: false,
          title: "Profile",
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
