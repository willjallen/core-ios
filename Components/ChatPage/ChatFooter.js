import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

import AddIcon from "../../assets/svg/./AddIcon.js"

export default class ChatFooter extends Component{
	


	render(){
		return(
			<View style={{flex:1, flexDirection: 'row'}}>
				<View style={{flex:1}}>
					<AddIcon/>
				</View>
				<View style={{flex:2}}>
					<View>
					 <TextInput
					  placeholder='Message...'
				      style={{ backgroundColor: '#C4C4C4', opacity: 0.37, radius: 6 }}
				      />
				</View>
				</View>
			</View>
		);
	}
}

