import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-elements";

const wid = Dimensions.get("screen").width;
const hie = Dimensions.get("screen").height;

export default function Home({ navigation }) {
  const [place, setplace] = useState("");

  function Nav() {
    setplace();
    navigation.navigate("Weather", { place: place });
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={require("../images/rain.jpg")} style={styles.img} />
        <Text style={styles.text}>Weather App </Text>
        <TextInput
          placeholder="e.g Chennai"
          value={place}
          onChangeText={(text) => setplace(text)}
          onSubmitEditing={Nav}
        />
        <Button disabled={!place} title="Press" onPress={Nav} />

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    marginTop: 12,
    textAlign: "center",
  },
  img: {
    width: wid,
    height: hie / 2.155,
    flex: 1,
  },
});
