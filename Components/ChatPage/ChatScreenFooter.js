import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Alert } from 'react-native'
import { connect } from "react-redux";

import AddIcon from "../../assets/svg/./AddIcon.js"
import SendIcon from "../../assets/svg/./SendIcon.js"

import { sendOnSocket, openSocket} from "../../redux/actions/./SocketActions";
import { sendMessage } from "../../redux/actions/./MessageActions";


function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

class ChatFooter extends Component{
	
	constructor(props){
		super(props);
		this.state = { messageInput: ""  };

		this.sendMessage = this.sendMessage.bind(this);
		this.updateMessageInput = this.updateMessageInput.bind(this);
		this.props.openSocket();
	}

		    


	componentDidMount(){
/*
	Alert.prompt(
	      "[Debug] Set Name",
	      "",
	      [
	        {
	          text: "Cancel",
	          onPress: () => console.log("Cancel Pressed"),
	          style: "cancel"
	        },
	        {
	          text: "OK",
	          onPress: name => this.setState({name: name})
	        }
	      ]
	    );
	*/

	

	this.setState({name: 'User-'+makeid(4)});
}

	updateMessageInput = input => {
		this.setState({messageInput: input});
	}


	sendMessage = () => {
		console.log("Button pressed 1");
		const user = ({name: this.state.name})
		this.props.sendMessage(this.state.messageInput, user);
		console.log(this.state.messageInput);
		this.setState({messageInput: ""});
	}


	render(){
		return(
			<View style={{flex:1, flexDirection: 'row', paddingBottom: '10%'}}>
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
					<SendIcon style={{position: 'absolute', top: -10, right: 1}} onPress={this.sendMessage}/>
				</View>
			</View>
		);
	}
}



export default connect(
	null,
	{ openSocket, sendMessage }
)(ChatFooter)
