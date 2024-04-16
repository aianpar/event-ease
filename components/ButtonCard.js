import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { router,Redirect } from "expo-router";
import axios from "axios";

export default function ButtonCard({ isAdded, byUser , id ,fromCard}) {

  function handleEditButton(){
    router.navigate(`EditEvent/${id}`)
}

const handleJoinButton = async (id)=>{
  try{
    const response = await axios.put(`http://localhost:8080/events/${id}`,{
      isAdded: true,
    });
    router.navigate(`/`);
  } catch(err){
    console.log(err)
  }
}

function handleChatButton(){
  router.navigate(`Chat/${id}`)
}

function handleCardChatButton(){
  router.back()
  router.navigate(`Chat/${id}`)
}

  if (byUser === 1 && isAdded === 1) {
    return (
      <>
        <TouchableOpacity style={styles.button} onPress={handleEditButton}>
          <Entypo name="edit" size={18} color="#FDFDFD" />
          <Text style={styles.buttonText}>Manage</Text>
        </TouchableOpacity>
      </>
    );
}
if (isAdded === 1 && fromCard === 1) {
  return (
      <TouchableOpacity style={styles.button} onPress={handleCardChatButton}>
        <Entypo name="chat" size={18} color="#FDFDFD" />
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>
  );
}

    if (isAdded === 1) {
    return (
        <TouchableOpacity style={styles.button} onPress={handleChatButton}>
          <Entypo name="chat" size={18} color="#FDFDFD" />
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>
    );
  }

  return (
      <TouchableOpacity style={styles.button} onPress={()=>{handleJoinButton(id)}}>
        <Entypo name="plus" size={18} color="#FDFDFD" />
        <Text style={styles.buttonText}>Join</Text>
      </TouchableOpacity>
  );

  }




const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: 4,
    width: 100,
    height: 40,
    backgroundColor: "#00BB4B",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#FDFDFD",
    fontWeight: "700",
  },
});
