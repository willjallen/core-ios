import { spawn } from 'redux-saga/effects'
import {watchLogin} from "../watchers/AuthenticationWatchers";
import {watchSocket} from "../watchers/SocketWatchers"

export default function* rootSaga(){
   yield spawn(watchLogin);
   yield spawn(watchSocket);
}