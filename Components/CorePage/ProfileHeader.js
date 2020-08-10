import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Alert} from "react-native";
import {
  Container,
  Left,
  Right,
  Card,
  Body,
  Thumbnail,
  CardItem,
  Button,
} from "native-base";

import ClockIcon from "../../assets/svg/ClockIcon"
import GoatIcon from "../../assets/svg/GoatIcon"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from '@react-navigation/native';

export class ProfileScreenHeader extends Component {
  render() {
     const { navigation } = this.props;
    return (
      <View style={{flex: 1}}>
        <View style = {{flex: 1.5, flexDirection: 'row', justifyContent: 'space-between' }}>
          
          <View style = {{flex: 1.25, justifyContent: 'center'}}>
            <Thumbnail circle large
              source={{ uri: "https://picsum.photos/199/300" }}
              style={{ alignSelf: 'center', width: 103, height: 100, borderRadius: 103/ 2 }}
            /> 
          </View>

          <View style = {{flex: 1, justifyContent: 'center', textAlign: 'center'}}>
            <Text style={{fontWeight: '400', fontSize: 18, color:'#000000'}}> Michael Hla</Text>
            <Text style={{fontWeight: '400', color: '#A0A0A0', fontSize: 13}}> @MICHAELH420 </Text>
            <Button Button bordered dark small style={{justifyContent: 'center'}} onPress={() => this.props.navigation.push('Chat')}>
             <Text style={{fontSize: 10}}> Edit Account </Text> 
            </Button>
          </View>

          <View style = {{flex: 1, justifyContent: 'center', flexDirection: 'row-reverse'}}>
            <ClockIcon style={{alignSelf: 'center', marginLeft: '50%'}}/>
          </View>
           
        </View>

        <View style = {{flex: 1}}>

          <View style = {{flex: 2}}>
           <Text style={{fontSize: 13, fontWeight: '800', paddingLeft: 15}}> YOUR AWARDS </Text>
          </View>

          <View style = {{flex: 5, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10}}>
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

// Wrap and export
export default function(props) {
  const navigation = useNavigation();
  return <ProfileScreenHeader {...props} navigation={navigation} />;
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