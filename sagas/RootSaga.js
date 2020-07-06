import { spawn } from 'redux-saga/effects'
import {watchLogin} from "../watchers/AuthenticationWatchers";


export default function* rootSaga(){
   yield spawn(watchLogin());
}