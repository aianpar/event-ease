import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function ButtonCard({ isAdded, byUser }) {

  if (byUser === 1 && isAdded === 1) {
    return (
      <>
        <TouchableOpacity style={styles.button}>
          <Entypo name="edit" size={18} color="#FDFDFD" />
          <Text style={styles.buttonText}>Manage</Text>
        </TouchableOpacity>
      </>
    );
}

    if (isAdded === 1) {
    return (
        <TouchableOpacity style={styles.button}>
          <Entypo name="chat" size={18} color="#FDFDFD" />
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>
    );
  }

  return (
    <>
      <TouchableOpacity style={styles.button}>
        <Entypo name="plus" size={18} color="#FDFDFD" />
        <Text style={styles.buttonText}>Join</Text>
      </TouchableOpacity>
    </>
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
