// React Imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  RefreshControl,
  Text
} from "react-native";

// Component Imports
import CoreScreenHeader from './CoreScreenHeader';
import ProfileHeader from './ProfileHeader';
import Posts from './Posts'



export default class CoreScreen extends Component {
  render() {
    return (
      <View>
        <CoreScreenHeader/>
        <ProfileHeader/>
        <Posts/>


      </View>
    );
  }
}