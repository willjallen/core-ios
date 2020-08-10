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

export function sendMessage(message){

    socket.emit('create', 'messages', {
        text: message.payload.content
    })
}

export function listenForMessage(){
    // Receive real-time events through Socket.io
    socket.on('created', message => console.log('New message created', message));

}










function createSocketConnection(url, namespace) {
    return io(url + '/' + namespace);
}

function createSocketChannel(socket) {
    return eventChannel(emit => {
        const eventHandler = (event) => {
            emit(event.payload);
        };

        const errorHandler = (errorEvent) => {
            emit(new Error(errorEvent.reason));
        };

        socket.on('message', eventHandler);
        socket.on('error', errorHandler);

        const unsubscribe = () => {
            socket.off('message', eventHandler);
        };

        return unsubscribe;
    });
}

function* emitResponse(socket) {
    yield apply(socket, socket.emit, ['message received']);
}

function* writeSocket(socket) {
    while (true) {
        const { eventName, payload } = yield take(actions.WEBSOCKET_SEND);
        socket.emit(eventName, payload);
    }
}

function* watchSocketChannel() {
    const socket = yield call(createSocketConnection, 'http://localhost:3000', 'terminal');
    fork(writeSocket, socket); // I've added this line
    const socketChannel = yield call(createSocketChannel, socket);

    console.log(socket);

    while (true) {
        try {
            const payload = yield take(socketChannel);
            yield put({type: actions.WEBSOCKET_MESSAGE, payload});
            yield fork(emitResponse, socket);
        } catch (err) {
            console.log('socket error: ', err);
        }
    }
}

// Connect to the `http://feathers-api.com/