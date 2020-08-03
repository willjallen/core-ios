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

import ClockIcon from "../../assets/svg/ClockIcon"
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
            <ClockIcon/>
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
