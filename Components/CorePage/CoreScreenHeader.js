import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Header } from "react-native-elements";
import {
  View,
  RefreshControl,
} from "react-native";

export default class CoreHeader extends Component {
  render() {
    return (
        <Header
          linearGradientProps={{
            colors: ["blue", "lightblue"],
            start: { x: 0, y: 0 },
            end: { x: 1, y: 1 },
          }}
          centerComponent={{ text: "CORE", style: { color: "#fff" } }}
          rightComponent={{ icon: "add", color: "white" }}
        />
    );
  }
}