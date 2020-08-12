import { spawn } from 'redux-saga/effects'
import {watchLogin} from "../watchers/AuthenticationWatchers";
import {watchSocket} from "../watchers/SocketWatchers"
import {watchAsyncStorage} from "../watchers/AsyncStorageWatcher"

export default function* rootSaga(){
   yield spawn(watchLogin);
   yield spawn(watchSocket);
   yield spawn(watchAsyncStorage);
}