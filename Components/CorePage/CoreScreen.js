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
      <View style={{flex:1}}>
        <View style={{flex:2, backgroundColor: "#FFFFFF"}}>
          <CoreScreenHeader/>
        </View>

        <View style={{flex:4, backgroundColor: "#FFFFFF", borderColor: '#D5D5D5', borderWidth: 1.5}}>
          <ProfileHeader/>
        </View>

        <View style={{flex: 10, backgroundColor: "#aaaaaa"}}>
          <Posts style={{flex: 3}}/>
        </View>
        


      </View>
    );
  }
}