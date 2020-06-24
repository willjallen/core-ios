import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import { Header } from "react-native-elements";
import CoreCardComponent from "../CoreCardComp";
import { Content, Container } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

class Core extends Component {
  renderItem({ item, index }) {
    return (
      <TouchableOpacity style={{ margin: 9 }}>
        <View
          style={{
            flex: 1,
            minWidth: 170,
            maxWidth: 223,
            height: 250,
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
                textAlign: "center",
                paddingTop: 200,
                fontWeight: "bold",
                textShadowColor: "black",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
                fontSize: 17,
              }}
            >
              Everett Dickinson
            </Text>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                paddingTop: 2,
                textShadowColor: "black",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
                fontSize: 12,
              }}
            >
              @edick
            </Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <Container style={styles.container}>
        <View>
          <Header
            linearGradientProps={{
              colors: ["blue", "lightblue"],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
            }}
            centerComponent={{ text: "CORE", style: { color: "#fff" } }}
            rightComponent={{ icon: "add", color: "white" }}
          />
        </View>
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
          renderItem={this.renderItem}
          ListHeaderComponent={
            <View>
              <CoreCardComponent />
              <Text style={{ padding: 10, fontWeight: "bold" }}>Your Core</Text>
            </View>
          }
        />
      </Container>
    );
  }
}

export default Core;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
