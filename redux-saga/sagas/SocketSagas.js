import { put, fork, take, call, apply } from 'redux-saga/effects'
import {eventChannel} from 'redux-saga';
import socketio from '@feathersjs/socketio-client';

import * as actions from "../../redux/constants/ActionTypes";
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
          //console.log(event);
          emit(event);
          //receiveMessages(event.payload)
        };

        const errorHandler = (errorEvent) => {
            emit(new Error(errorEvent.reason));
        };



        socket.on('messages created', eventHandler);
        socket.on('error', errorHandler);

        socket.on('connect_failed', function(){
         console.log('Connection Failed');
        });

        const unsubscribe = () => {
            socket.off('message', eventHandler);
        };

        return unsubscribe;
    });
}

export function listenForMessage(socket){
    // Receive real-time events through Socket.io
    while(true){
        socket.on('created', message => console.log('New message created', message));
    }
}

export function* emitResponse(socket) {
    yield apply(socket, socket.emit, ['message received']);
}

function* writeSocket(socket) {
  console.log("write socket enabled");
    while (true) {
        const { eventName, namespace, params, payload } = yield take(actions.SOCKET_SEND);
        console.log(eventName, namespace, params, payload);

        if(!payload){
          socket.emit(eventName, namespace)
        }else{
           socket.emit(eventName, namespace, {text: payload});
        }
        
       
        //console.log("sent",'create', {text: payload});
    }
}






function* watchSocketChannel() {

    const socket = yield call(createSocketConnection, 'http://172.16.2.178:3030', '');     
       
        socket.on('connect', () => {
          console.log('Socket connected to the server')
            socket.emit('create', 'authentication', {
              strategy: 'local',
              email: 'hello@feathersjs.com',
              password: 'supersecret'
            }, function(error, authResult) {
              console.log(authResult); 
              console.log(error);
              // authResult will be {"accessToken": "your token", "user": user }
              // You can now send authenticated messages to the server
            });


        });
        console.log('socket', socket)

    yield fork(writeSocket, socket); // I've added this line
    const socketChannel = yield call(createSocketChannel, socket);

    
    
    while (true) {
        try {
            const payload = yield take(socketChannel);
            console.log('payload', {id: payload._id, text: payload.text});
            const cleanPayload = {id: payload._id, text: payload.text};
            yield put({type: actions.RECEIVED_MESSAGES, id: payload._id, text: payload.text});

        } catch (err) {
            console.log('socket error: ', err);
            
        }
    }
    
}





export { watchSocketChannel }


