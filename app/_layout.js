
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          presentation: "card",
          title: "Main Page",
        }}
      />
      <Stack.Screen
        name="(modals)/Filter"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(modals)/Events/[id]"
        options={{
          presentation: "modal",
          headerShown: false,
          title: "event",
        }}
      />
      <Stack.Screen
        name="CreateEvent"
        options={{
          title: "event",
          headerShown: false,
          presentation:"modal"
        }}
      />
       <Stack.Screen
        name="EditEvent/[id]"
        options={{
          title: "event",
          headerShown: false,
          presentation:"modal"
        }}
      />
        <Stack.Screen
        name="Chat/[id]"
        options={{
          title: "Chat",
          presentation: "card"
        }}
      />
      <Stack.Screen
        name="(modals)/Map"
        options={{
          title: "Map",
          presentation:"modal"
        }}
      />

    </Stack>
  );
}
