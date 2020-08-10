import { put, fork } from 'redux-saga/effects'
import { sendMessage } from "../../services/SocketIOService";
import {eventChannel} from 'redux-saga';
import socketio from '@feathersjs/socketio-client';

//import * as actions from "../actions";
//import io from 'socket.io-client';

const io = require('socket.io-client');

/*
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
*/

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

export function listenForMessage(){
    // Receive real-time events through Socket.io
    while(true){
        socket.on('created', message => console.log('New message created', message));
    }
}

export function* emitResponse(socket) {
    yield apply(socket, socket.emit, ['message received']);
}

function* writeSocket(socket) {
    while (true) {
        const { eventName, payload } = yield take(actions.WEBSOCKET_SEND);
        socket.emit(eventName, payload);
    }
}

function* watchSocketChannel() {
    console.log("bword");
    const socket = yield createSocketConnection('http://localhost:3030', 'terminal');
    fork(writeSocket, socket); // I've added this line
    const socketChannel = yield createSocketChannel(socket);

    console.log("socket is", socket);

    /*while (true) {
        try {
            const payload = yield take(socketChannel);
            yield put({type: actions.SOCKET_RECEIVED, payload});
            yield fork(emitResponse, socket);
        } catch (err) {
            console.log('socket error: ', err);
        }
    }*/
}


export function* fetchMessages(payload) {
    yield console.log("payload", payload);
    try {
        const authToken = yield getAuthToken(payload);
        yield put({type: "CREATE_SOCKET", authToken: authToken});
    } catch(e){
        yield put({type: "USER_AUTH_TOKEN_FAILED", message: e.message});
    }
}



export { watchSocketChannel, writeSocket }


