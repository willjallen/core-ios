import React, { Component } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Header } from "react-native-elements";
import { Container, Content, Right, Button, Icon } from "native-base";
import CardComponent from "../CardComponent";

class Feed extends Component {
  render() {
    return (
      <Container>
        <View>
          <Header
            linearGradientProps={{
              colors: ["dodgerblue", "white"],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 1 },
            }}
            centerComponent={{ text: "CORE", style: { color: "#fff" } }}
            rightComponent={
              <Button
                style={{ backgroundColor: null }}
                onPress={() =>
                  Alert.alert("Add Post", "Add Post", [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancelled post"),
                    },
                    {
                      text: "Post",
                      onPress: () => console.log("post made"),
                    },
                  ])
                }
              >
                <Icon name="ios-add" style={{ color: "orange" }}></Icon>
              </Button>
            }
          ></Header>
        </View>
        <Content>
          <CardComponent />
        </Content>
      </Container>
    );
  }
}

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
