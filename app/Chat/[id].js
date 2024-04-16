import { View, Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { GiftedChat } from "react-native-gifted-chat";
import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { Stack, Link } from "expo-router";
import { Ionicons } from '@expo/vector-icons';


export default function Chat() {
  const { id } = useLocalSearchParams();
  const [messages, setMessages] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/events/${id}`).then((r) => {
      const response = r.data;
      setData(response);
      console.log(response);
    });
  }, []);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `So excited about ${data.event_name}!`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://facebook.github.io/react/img/logo_og.png",
        },
      },
    ]);
  }, [data]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    setTimeout(() => {
        const response = {
          _id: 3,
          text: 'Definetly, looking forward to hearing from you.',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Bot',
          },
        };
        setMessages((previousMessages) => GiftedChat.append(previousMessages, [response]));
      }, 3000); 

  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#151515" }}>
      <Stack.Screen
        options={{
          header: () => {
            return (
              <Link href={"/"} style={{ paddingTop: 50, backgroundColor: "#151515" }}>
               <Ionicons name="chevron-back" size={50} color="white" />
              </Link>
            );
          },
        }}
      />
      <GiftedChat
        messages={messages}
        keyboardShouldPersistTaps={"never"}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderAvatar={() => {
          return (
            <Image
              style={styles.userImg}
              source={{
                uri: `http://localhost:8080/userImg/${data.avatar}`,
              }}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
