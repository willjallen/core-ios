import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Topics from './Topics';
import {
  View,
  RefreshControl,
} from "react-native";

export default class TopicScreen extends Component {
  render() {
    return (
      <View>
        <Header/>
        <Topics/>
      </View>
    );
  }
}