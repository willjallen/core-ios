import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Profile extends Component {
  render() {
    return (
      <View>
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
