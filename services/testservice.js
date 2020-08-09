import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';

import * as actions from "../actions";
import io from 'socket.io-client';

const io = require('socket.io-client');
const socket = io('http://localhost:3030');

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