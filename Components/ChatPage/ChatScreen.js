import React, { Component } from 'react'
import { View, Text } from 'react-native'

import ChatScreenHeader from './ChatScreenHeader'

import ChatScreenFooter from './ChatScreenFooter'
import MessageBoxContainer from './MessageBoxContainer'

export default class ChatScreen extends Component{
	

	render(){
		return(
			<View style={{flex: 1, backgroundColor: '#ffffff'}}>
				<View style={{flex: 1, borderColor: '#D5D5D5', borderWidth: 1.5}}>
					<ChatScreenHeader/>
				</View>

				<View style={{flex: 9}}>
					<MessageBoxContainer/>
				</View>

				<View style={{flex: 1, borderColor: '#D5D5D5', borderWidth: 1.5}}>
					<ChatScreenFooter/>
				</View>

			</View>
		);
	}
}