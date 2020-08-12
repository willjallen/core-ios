import {AsyncStorage} from 'react-native';
import { put, fork, take, call, apply } from 'redux-saga/effects'
import {eventChannel} from 'redux-saga';
import socketio from '@feathersjs/socketio-client';

import { saveLocalData, getLocalData } from "../../redux/actions/AsyncStorageActions"

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
        const { eventName, namespace, params, id, payload, user } = yield take(actions.SOCKET_SEND);
        console.log('Writing to', eventName, namespace, params, id, payload);

        if(!payload){
          socket.emit(eventName, namespace)
        }else{
           socket.emit(eventName, namespace, {text: payload, id: id, user: user });
        }
        
       
        //console.log("sent",'create', {text: payload});
    }
}






function* watchSocketChannel() {

    const socket = yield call(createSocketConnection, 'http://3.129.52.188:3030', '');     
       
    console.log('Fireside [Socket] : Looking for local accessToken')
    yield put({type: actions.GET_LOCAL_DATA, key: 'accessToken'});    
    const { data } = yield take(actions.GET_LOCAL_DATA_SUCCESSFUL)
    console.log('here?');
    console.log('accessToken', data)
    let accessToken = null;
    socket.on('connect', () => {

          console.log('Fireside [Socket] : connected to the server')

         
          if(data){
            console.log('Fireside [Socket] : accessToken found', data)
          }else{
            console.log('Fireside [Socket] : accessToken not found')
            console.log('Fireside [Socket] : Attempting to fetch from server...')

            socket.emit('create', 'authentication', {
              strategy: 'local',
              email: 'hello@feathersjs.com',
              password: 'supersecret'
            }, function(error, authResult) {
              if(authResult.accessToken){
                console.log('Fireside [Socket] : accessToken successfully fetched from server', authResult.accessToken)
                saveLocalData('accessToken', authResult.accessToken)
                }
            
              // authResult will be {"accessToken": "your token", "user": user }
              // You can now send authenticated messages to the server
            });
          }





        });
        console.log('at', accessToken)
        if(accessToken){
          console.log('Fireside [Socket] : Attempting to save accessToken locally')
          yield put({type: actions.SAVE_LOCAL_DATA, key: 'accessToken', data: authResult.accessToken});
      

        }
        
    console.log('socket', socket)
    yield fork(writeSocket, socket); // I've added this line
    const socketChannel = yield call(createSocketChannel, socket);

    
    
    while (true) {
        try {
            const payload = yield take(socketChannel);
            console.log('Message Received', {id: payload.messageId, text: payload.text, user:{name: payload.name} });
            const cleanPayload = {id: payload.messageId, text: payload.text};
            yield put({type: actions.RECEIVED_MESSAGES, id: payload.messageId, text: payload.text});

        } catch (err) {
            console.log('socket error: ', err);
            
        }
    }
    
}







export { watchSocketChannel }


