import { View, Text, StyleSheet } from "react-native";
import React from "react";
const WeatherItem = ({ title, value, unit }) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{title}</Text>
      <Text style={styles.weatherItemValue}>
        {value}
        {unit}
      </Text>
    </View>
  );
};
export default function DateTime() {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>15:20pm</Text>
        </View>
        <View>
          <Text style={styles.subheading}>Tuesday, June 14</Text>
        </View>
        <View style={styles.weatherItemContainer}>
          <WeatherItem title="Humidity" value="50" unit="%" />
          <WeatherItem title="Pressure" value="1000" unit="hPA" />
          <WeatherItem title="Sunrise" value="06:00" unit="am" />
          <WeatherItem title="Sunset" value="18:00" unit="pm" />
        </View>
      </View>
      <View style={styles.rightalign}>
        <Text style={styles.timezone}>Fez/Morocco</Text>
        <Text style={styles.latlong}>4.22N 50E</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 28,
  },
  heading: {
    fontSize: 45,
    color: "white",
    fontWeight: "100",
  },
  subheading: {
    fontSize: 25,
    color: "#eee",
    fontWeight: "300",
  },
  rightalign: {
    textAlign: "right",
    marginTop: 40,
  },
  timezone: {
    fontSize: 20,
    color: "white",
  },
  latlong: {
    fontSize: 16,
    color: "white",
    fontWeight: "700",
  },
  weatherItemContainer: {
    backgroundColor: "#18181b99",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  weatherItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherItemTitle: {
    color: "#eee",
    fontSize: 14,
    fontWeight: "100",
  },
  weatherItemValue: {
    color: "white",
    fontSize: 14,
    fontWeight: "100",
  },
});
