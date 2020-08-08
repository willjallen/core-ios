import React, {Component} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import { Header } from "react-native-elements";


import FiresideLogo from "../../assets/svg/./FiresideLogo.js"

export default class CoreHeader extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column-reverse', justifyContent: 'space-around', backgroundColor: "#ffffff"}}> 
          <FiresideLogo style={{alignSelf: 'center', marginTop: '10%'}}/>
        </View>
    );
  }
}




