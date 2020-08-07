import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Alert, Button } from "react-native";
import {
  Container,
  Left,
  Right,
  Card,
  Body,
  Thumbnail,
  CardItem,
} from "native-base";

import ClockIcon from "../../assets/svg/ClockIcon"
import GoatIcon from "../../assets/svg/GoatIcon"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class ProfileScreenHeader extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style = {{flex: 1.5, flexDirection: 'row', justifyContent: 'space-between' }}>
          
          <View style = {{flex: 1, justifyContent: 'center'}}>
            <Thumbnail circle large
              source={{ uri: "https://picsum.photos/199/300" }}
              style={{ alignSelf: 'center', width: 103, height: 100, borderRadius: 103/ 2 }}
            /> 
          </View>

          <View style = {{flex: 1, justifyContent: 'center', textAlign: 'center'}}>
            <Text style={{fontWeight: 400, fontSize: 18, color:'#000000'}}> Michael Hla</Text>
            <Text style={{fontWeight: 400, color: '#A0A0A0', fontSize: 13}}> @michaelh40 </Text>
            <Button title="Edit Profile" color="#FFFFFF"/>
          </View>

          <View style = {{flex: 1, justifyContent: 'center', flexDirection: 'row-reverse'}}>
            <ClockIcon style={{position: 'absolute', right: 5, top: 20}}/>
          </View>
           
        </View>

        <View style = {{flex: 1}}>

          <View style = {{flex: 1}}>
           <Text style={{fontSize: 13, fontWeight: 800, paddingLeft: 15}}> YOUR AWARDS </Text>
          </View>

          <View style = {{flex: 5, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-evenly', marginTop: '5%', paddingLeft: 10}}>
           <GoatIcon/>
           <GoatIcon/>
           <GoatIcon/>
           <GoatIcon/>
           <GoatIcon/>

          </View>

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