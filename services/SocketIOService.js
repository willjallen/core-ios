import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';

//import * as actions from "../actions";
//import io from 'socket.io-client';

const io = require('socket.io-client');
const socket = io('http://localhost:3030');


export function getAuthToken(data){
	console.log(data.payload.content.userInput);
	socket.emit('create', 'authentication', {
		  strategy: 'local',
		  email: data.payload.content.userInput,
		  password: data.payload.content.passwordInput
		}, function(error, authResult) {
			console.log(error);
		  console.log(authResult); 
		  if(authResult){
		 	 return authResult.accessToken;
			}
		  // authResult will be {"accessToken": "your token", "user": user }
		  // You can now send authenticated messages to the server
		});

}


export function getMessages(data){
	socket.emit('get', 'messages', 1, (error, message) => {
		console.log('Found message', message);
	});
}  


export function testMessage(data) {
    console.log(data.payload.content);
// Use the messages service from the server
//     testService.create({
//         text: payload,
//     });
}


// Connect to the `http://feathers-api.com/