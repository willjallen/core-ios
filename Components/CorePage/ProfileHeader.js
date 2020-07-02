import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import {
  Button,
  Left,
  Right,
  Card,
  Body,
  Thumbnail,
  CardItem,
} from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class ProfileScreenHeader extends Component {
  render() {
    return (
      <Card style={{ borderRadius: 10 }}>
        <CardItem style={{ height: 100 }}>
          <Left>
            <Thumbnail
              source={{ uri: "https://picsum.photos/199/300" }}
              style={{ height: 80, width: 80 }}
            />
            <Body>
              <Text style={{ fontWeight: "bold" }}> Michael Hla</Text>
              <Text note> @michaelh40 </Text>
            </Body>
          </Left>
          <Right>
            <Icon
              name="pencil"
              style={{ color: "black" }}
              size={25}
              onPress={() =>
                Alert.alert("Edit Profile", "Edit profile", [
                  {
                    text: "Cancel",
                  },
                  {
                    text: "Edit",
                    onPress: () => console.log("edit made"),
                  },
                ])
              }
            />
            <Icon
              name="history"
              style={{ color: "black", paddingTop: 10 }}
              size={25}
              onPress={() =>
                Alert.alert("Show old posts", "show old posts", [
                  {
                    text: "Cancel",
                  },
                  {
                    text: "Show",
                    onPress: () => console.log("edit made"),
                  },
                ])
              }
            />
          </Right>
        </CardItem>
      </Card>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
