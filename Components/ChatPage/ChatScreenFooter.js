import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from "react-redux";

import AddIcon from "../../assets/svg/./AddIcon.js"
import SendIcon from "../../assets/svg/./SendIcon.js"

import { sendOnSocket, openSocket} from "../../redux/actions/./SocketActions";
import { sendMessage } from "../../redux/actions/./MessageActions";

class ChatFooter extends Component{
	
	constructor(props){
		super(props);
		this.state = { messageInput: ""  };

		this.sendMessage = this.sendMessage.bind(this);
		this.updateMessageInput = this.updateMessageInput.bind(this);
		this.props.openSocket();
	}

	updateMessageInput = input => {
		this.setState({messageInput: input});
	}

	sendMessage = () => {
		console.log("Button pressed 1");
		this.props.sendMessage(this.state.messageInput, null);
		console.log(this.state.messageInput);
		this.setState({messageInput: ""});
	}


	render(){
		return(
			<View style={{flex:1, flexDirection: 'row'}}>
				<View style={{flex:1, justifyContent: 'center'}}>
					<TouchableOpacity style={{alignItems: 'center'}}>
						<AddIcon/>
					</TouchableOpacity>
				</View>
				<View style={{flex:3, justifyContent: 'center'}}>
					<View>
					 <TextInput
					  placeholder='Message...'
				      style={{ backgroundColor: '#C4C4C4', opacity: 0.37, width: 271, height: 29, borderRadius:6}}
				      onChangeText={e => this.updateMessageInput(e)}
				      value={this.state.messageInput}
				      />
					</View>
					<SendIcon style={{position: 'absolute', top: 5, right: 1}} onPress={this.sendMessage}/>
				</View>
			</View>
		);
	}
}

export default connect(
	null,
	{ openSocket, sendMessage }
)(ChatFooter)
