import React, { Component } from 'react'
import { View, Text } from 'react-native'

import LeftActionIcon from "../../assets/svg/./LeftActionIcon.js"

export default class ChatScreenHeader extends Component{
	

	render(){
		return(
			<View style={{flex: 1, flexDirection: 'row'}}>
				<View style={{flex:1, justifyContent: 'center', width:100}}>
					<LeftActionIcon style={{alignSelf: 'flex-start'}}/>
				</View>
				
				<View style={{flex:1, justifyContent: 'center'}}>
					<Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginTop: '10%'}}>Everett</Text>
				</View>

				<View style={{flex:1}}>
		
				</View>
			</View>
		);
	}
}