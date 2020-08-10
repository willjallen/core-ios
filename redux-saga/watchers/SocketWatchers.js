import { combineReducers } from 'redux';
import { takeEvery } from 'redux-saga/effects'

import { watchSocketChannel } from '../sagas/SocketSagas'

import * as actions from '../../redux/constants/ActionTypes'


export function* watchSocket() {
	yield takeEvery(actions.CREATE_SOCKET, watchSocketChannel);
   //yield takeEvery(actions.SOCKET_SEND, writeSocket);
    //yield takeEvery(actions.SOCKET_RECIEVE, )
}