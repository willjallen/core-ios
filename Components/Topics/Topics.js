import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import TopicCell from "./TopicCell";

/*
    Main Screen for Topics
 */

// SUGGESTION: Change Topic to Topics for file naming consistency
export default class Topic extends Component {
  //async componentDidMount() {}
  render() {
    return (
      <View style={{ marginBottom: 80, backgroundColor: "white" }}>
        <FlatList
          numColumns={2}
          onEndReachedThreshold={0}
          onEndReached={({ distanceFromEnd }) => {
            console.debug("on end reached ", distanceFromEnd);
          }}
          contentContainerStyle={styles.list}
          data={[
            { key: "a" },
            { key: "b" },
            { key: "c" },
            { key: "d" },
            { key: "e" },
            { key: "f" },
          ]}
          renderItem={() => <TopicCell />}
          ListHeaderComponent={
            <Text style={{ padding: 10, fontWeight: "bold" }}>Your Topics</Text>
          }
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  list: {
    justifyContent: "center",
  },
});
