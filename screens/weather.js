import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Card, Header } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Weat(props) {
  const wid = Dimensions.get("screen").width;
  const hei = Dimensions.get("screen").height;
  const [wea, setwea] = useState("");
  const [time, settime] = useState("");
  const [lat, setlat] = useState("");
  const [lon, setlon] = useState("");
  const [pressure, setpressure] = useState("");
  const [wind, setwind] = useState("");
  const [windspeed, setwindspeed] = useState("");
  const place = props.route.params.place;
  const apikey = "c12bae8450b8769abf76d7f80c3b9ded";
  const url =
    "http://api.weatherstack.com/current?access_key=" +
    apikey +
    "&query= " +
    place;

  useEffect(() => {
    getwea();
  }, []);
  const getwea = async () => {
    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);

        setwea(json.current.temperature);
        setpressure(json.current.pressure);
        setwind(json.current.wind_degree);
        setwindspeed(json.current.wind_speed);
        settime(json.location.local_time);
        setlat(json.location.lat);
        setlon(json.location.lon);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header
            centerComponent={{
              text: "Weather",
              style: { color: "white" },
            }}
            barStyle={"light-content"}
            containerStyle={{
              backgroundColor: "black",
            }}
          />
        </View>
        <View>
          <Card>
            <Text>{place}</Text>
          </Card>
        </View>
        <Card
          containerStyle={{
            height: hei / 1.5,
            alignItems: "center",
          }}
        >
          <Text>Temperature : {wea}</Text>
          <Text>Pressure : {pressure}</Text>
          <Text>Wind Degree : {wind}</Text>
          <Text>Wind Speed : {windspeed}</Text>
          <Text>Time : {time}</Text>
          <Text>Longitude : {lon}</Text>
          <Text>Latitude : {lat}</Text>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
});
