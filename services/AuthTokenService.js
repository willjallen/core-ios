import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';

const socket = io('localhost:3030', {
    transports: ['websocket'],
    forceNew: true
});
const client = feathers();

client.configure(socketio(socket));


const testService = client.service('test-service');

testService.on('created', message => console.log('Created a message', message));

export function testMessage() {
    console.log("here3");
// Use the messages service from the server
    testService.create({
        text: 'Message from client'
    });
}


// Connect to the `http://feathers-api.com/