import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  RefreshControl,
} from "react-native";
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

/*
    Main Screen for Topics
 */

// SUGGESTION: Change Topic to Topics for file naming consistency
function Topic() {
  //async componentDidMount() {}
  const navigation = useNavigation();
  return (
    <View style={{ marginBottom: 80, backgroundColor: "white" }}>
      <Header
        linearGradientProps={{
          colors: ["dodgerblue", "white"],
          start: { x: 0, y: 0 },
          end: { x: 1, y: 1 },
        }}
        centerComponent={{ text: "CORE", style: { color: "#fff" } }}
        rightComponent={{ icon: "add", color: "orange" }}
      />
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
        renderItem={() => (
          <TouchableOpacity
            style={{ margin: 9 }}
            onPress={() => navigation.navigate("TopicSingleView")}
          >
            <View
              style={{
                flex: 1,
                minWidth: 170,
                maxWidth: 223,
                height: 280,
                maxHeight: 280,
                borderRadius: 10,
              }}
            >
              <ImageBackground
                source={{
                  uri: "https://picsum.photos/170/223",
                }}
                style={{ flex: 1 }}
                imageStyle={{ borderRadius: 10 }}
              >
                <Text
                  style={{
                    color: "white",
                    position: "absolute",
                    bottom: 20,
                    right: 10,
                    fontWeight: "bold",
                    textShadowColor: "black",
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 10,
                  }}
                >
                  Topic
                </Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <Text style={{ padding: 10, fontWeight: "bold" }}>Your Topics</Text>
        }
      />
    </View>
  );
}

export default Topic;

const styles = StyleSheet.create({
  list: {
    justifyContent: "center",
  },
});
