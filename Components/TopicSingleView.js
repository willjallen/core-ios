import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class TopicSingleView extends Component {
  render() {
    return (
      <View>
        <Text style={{ justifyContent: "center" }}>TopicSingleView</Text>
      </View>
    );
  }
}

export default TopicSingleView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
