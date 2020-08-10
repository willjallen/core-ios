import React, { useState, Component } from "react";
import { connect } from "react-redux";
import {View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableHighlight} from "react-native";

import { fetchUserAuthToken } from "../../redux/actions/./AuthTokenActions";


let DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
   {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f62",
    title: "Second Item",
  },
    {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f61",
    title: "Second Item",
  },
    {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f60",
    title: "Second Item",
  },
    {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f66",
    title: "Second Item",
  },
    {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f67",
    title: "Second Item",
  },
    {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f68",
    title: "Second Item",
  },
    {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f69",
    title: "Second Item",
  },
    {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f80",
    title: "Second Item",
  },
    {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f81",
    title: "Last Item",
  },

];



class MessageBoxContainer extends Component {
	constructor(props){
		super(props);
		//this.props.fetchUserAuthToken({userInput: 'test', passwordInput: 'test'});
		
	
	   // this.init = this.init.bind(this);
	    //init();
	    
	    
	}




 	render(){

	  return (
	    <SafeAreaView style={styles.container}>
	      <FlatList
	        data={DATA}
			renderItem={({ item, index, separators }) => (
			    <TouchableHighlight
			      key={item.id}
			      onPress={() =>{;}}
			      onShowUnderlay={separators.highlight}
			      onHideUnderlay={separators.unhighlight}>
			      <View style={{ backgroundColor: 'white' }}>
			        <Text>{item.title}</Text>
			      </View>
			    </TouchableHighlight>
			  )}
       keyExtractor={(item) => item.id}
			/>
			</SafeAreaView>
			);
	}
}

export default connect(
	null,
	{ fetchUserAuthToken }
)(MessageBoxContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


