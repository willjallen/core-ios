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
      <View style={{flex: 1}}>
        <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%' }}>
          
          <div style = {{flex: 1}}>
            <Thumbnail circle large
              source={{ uri: "https://picsum.photos/199/300" }}
              style={{ alignSelf: 'center', marginLeft: '5%' }}
            /> 
          </div>

          <div style = {{flex: 1}}>
            <Text style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: 18, color:'#000000' }}> Michael Hla</Text>
            <Text> @michaelh40 </Text>  
          </div>

          <div style = {{flex: 1, justifyContent: 'center', flexDirection: 'row-reverse'}}>
            <ClockIcon style={{position: 'absolute', right: 5, top: 15}}/>
          </div>
           
        </View>

        <View style = {{flex: 1}}>
        </View>
      </View>    
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


/*

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
  */