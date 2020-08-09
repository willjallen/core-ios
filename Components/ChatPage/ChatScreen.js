import React, { Component } from 'react'
import { View, Text } from 'react-native'

import ChatScreenHeader from './ChatScreenHeader'

import ChatFooter from './ChatFooter'

export default class ChatScreen extends Component{
	

	render(){
		return(
			<View style={{flex: 1, backgroundColor: '#ffffff'}}>
				<View style={{flex: 1, borderColor: '#D5D5D5', borderWidth: 1.5}}>
					<ChatScreenHeader/>
				</View>

				<View style={{flex: 9}}>
					<Text> Placeholder </Text>
				</View>

				<View style={{flex: 1, borderColor: '#D5D5D5', borderWidth: 1.5}}>
					<ChatFooter/>
				</View>

			</View>
		);
	}
}