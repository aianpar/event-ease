import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import DiscoverHeader from "../../components/DiscoverHeader";

export default function DiscoverPage() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        header: () => {return <DiscoverHeader/>}
      }}/>
      <View>
        <Text>Discover Page</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#282828"
  }
});
