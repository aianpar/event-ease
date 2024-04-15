import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Checkbox, TextField, Button } from "react-native-ui-lib";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Link } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

export default function CreateEvent() {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [draggableCoord, setDraggableCoord] = useState({
    latitude: 43.649249,
    latitudeDelta: 0.024842,
    longitude: -79.38067,
    longitudeDelta: 0.054073,
  });
  const [address, setAddress] = useState([
    {
      city: "Toronto",
      country: "Canada",
      district: "Downtown Toronto",
      isoCountryCode: "CA",
      name: "18 Yonge St",
      postalCode: "M5E 1Z8",
      region: "ON",
      street: "Yonge St",
      streetNumber: "18",
      subregion: "Toronto",
    },
  ]);
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [permission, setPermission] = useState("Public");

  const [mapRegion, setmapRegion] = useState({
    latitude: 43.649249,
    latitudeDelta: 0.024842,
    longitude: -79.38067,
    longitudeDelta: 0.054073,
  });

  const onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setEndDate(currentDate);
  };

  const onSubmitHandler = async () =>{
    if (!eventName || !description) {
      return;
    }
    if (eventName.length < 6) {
      return;
    }
    if (description.length < 6) {
      return;
    }
    console.log(
      "Submitted Data:",
      eventName,
      description,
      date,
      endDate,
      draggableCoord,
      selectedCategory,
      permission,
      selectedCategory
    );

    const dateObj = new Date(date);
    const endDateObj = new Date(endDate)
    try {
      const response = await axios.post(
        "http://localhost:8080/events",
        {
          event_name: eventName,
          description: description,
          timestamp_start: Math.floor(dateObj.getTime() / 1000),
          timestamp_end: Math.floor(endDateObj.getDate()/ 1000),
          permission: permission,
          latitude: draggableCoord.latitude,
          longitude: draggableCoord.longitude,
          latitudeDelta: draggableCoord.latitudeDelta,
          longitudeDelta: draggableCoord.longitudeDelta,
          address: `${address[0].name} ${address[0].district}, ${address[0].city}`,
          categories: selectedCategory,
        }
      );}
      catch(err){
        console.log(err)
        router.back()

      }
      router.back()
  }

  const reverseGeocode = async () => {
    const reverseGeocodeAddress = await Location.reverseGeocodeAsync({
      longitude: draggableCoord.longitude,
      latitude: draggableCoord.latitude,
    });
    setAddress(reverseGeocodeAddress);
    console.log(reverseGeocodeAddress);
  };

  function toggleCategory(item) {
    if (selectedCategory.includes(item)) {
      setSelectedCategory(
        selectedCategory.filter((selectedCategory) => selectedCategory !== item)
      );
    }else{
      setSelectedCategory([...selectedCategory, item]);
    }
    console.log(selectedCategory)
  }

  const categories = [
    "🤝 Social",
    "💼 Corporate",
    "🎭 Entertainment",
    "🏛️ Cultural",
    "📚 Educational",
    "🏀 Sports",
    "💝 Charity",
    "⛪️ Religious",
    "🌍 Community",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Link href="#"></Link>
        <Text style={styles.header}>Tell us about your event 🎉</Text>

        <View style={styles.form_container}>
          <View>
            <Text style={styles.form_label}>Event Name</Text>
            <TextField
              placeholder={"Title"}
              enableErrors
              placeholderTextColor={"grey"}
              containerStyle={styles.form_textfield}
              color={"white"}
              value={eventName}
              onChangeText={(value) => setEventName(value)}
              validate={["required", (eventName) => eventName.length > 6]}
              validationMessage={["Field is required", "Name is too short"]}
              validateOnBlur
              validateOnChange
              showCharCounter
              maxLength={30}
            />
          </View>
          <View>
            <Text style={styles.form_label}>Start Date</Text>
            <RNDateTimePicker
              value={date}
              onChange={onChangeStartDate}
              mode="datetime"
            />
          </View>
          <View>
            <Text style={styles.form_label}>End Date</Text>
            <RNDateTimePicker
              value={endDate}
              onChange={onChangeEndDate}
              mode="datetime"
            />
          </View>

          <View>
            <Text style={styles.form_label}>Description</Text>
            <TextField
              placeholder={"Description"}
              placeholderTextColor={"grey"}
              containerStyle={styles.form_textfield}
              value={description}
              color={"white"}
              onChangeText={(value) => setDescription(value)}
              multiline={true}
              numberOfLines={5}
              enableErrors
              validate={["required", (description) => description.length > 6]}
              validationMessage={[
                "Field is required",
                "Description is too short",
              ]}
              validateOnBlur
              validateOnChange
              showCharCounter
              maxLength={100}
            />
          </View>
        </View>
        <Text style={styles.header}>Pick your location</Text>
        <View style={styles.form_container}>
          <View style={{ height: 400 }}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{ width: "100%", height: "100%" }}
              region={mapRegion}
            >
              <Marker
                draggable
                coordinate={draggableCoord}
                onDragEnd={(loc) =>
                  setDraggableCoord(loc.nativeEvent.coordinate)
                }
              />
            </MapView>
          </View>
          <Text>
            {address[0].district}
            {address[0].streetNumber}
            {address[0].street}
          </Text>
          <Button onPress={reverseGeocode} label="Pick"></Button>
        </View>
        <Text style={styles.header}>Additional Information</Text>
        <View style={styles.form_container}>
          <View style={styles.chip_container}>
            {categories.map((item, i) => {
              return (
                <Button
                  onPress={() => {
                    toggleCategory(item);
                  }}
                  key={i}
                  label={item}
                  backgroundColor={
                    selectedCategory?.includes(item) ? "black" : "#3B3B3B"
                  }
                />
              );
            })}
          </View>
          <View>
            <Text>Choose Permissions</Text>
            <Picker
              selectedValue={permission}
              onValueChange={(value, itemIndex) =>
                setPermission(value)
              }
              mode='dialog'
              te
            >
              <Picker.Item color="white" label="Public" value="Public" />
              <Picker.Item color="white" label="Private" value="Private" />
            </Picker>
          </View>
        </View>

        <Button
          style={{marginBottom:50}}
          type="submit"
          label="Submit"
          onPress={() => {
            onSubmitHandler();
          }}
        />
      </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: "#151515",
    paddingBottom: 50,
  },
  header: {
    textAlign: "center",
    flexWrap: "wrap",
    width: 200,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 24,
  },
  form_container: {
    backgroundColor: "#3B3B3B",
    borderRadius: 20,
    padding: 18,
    marginVertical: 15,
  },
  form_label: {
    color: "white",
    fontSize: 14,
    marginBottom: 8,
  },
  form_textfield: {
    borderColor: "white",
    borderBottomWidth: 0.5,
    marginBottom: 8,
  },
  chip_container: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 6,
  },
  form_chip: {
    padding: 8,
    alignSelf: "flex-start",
  },
});
