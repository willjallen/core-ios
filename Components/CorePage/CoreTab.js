import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import { Header } from "react-native-elements";
import ProfileHeader from "./ProfileHeader";
import { Content, Container } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function Core() {
  const navigation = useNavigation();
  return (
    <Text>Placeholder </Text>
  );
}

export default Core;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
