import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";

class Profile extends Component {
  render() {
    return (
      <View>
        <Header
          linearGradientProps={{
            colors: ["dodgerblue", "white"],
            start: { x: 0, y: 0 },
            end: { x: 1, y: 1 },
          }}
          centerComponent={{ text: "CORE", style: { color: "#fff" } }}
          rightComponent={{ icon: "add", color: "orange" }}
        />
        <Text style={{ justifyContent: "center" }}>Profile</Text>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
