import { combineReducers } from 'redux';
import { takeEvery } from 'redux-saga/effects'
import { writeSocketSaga } from '../sagas/SocketSagas'

import * as actions from '../../redux/constants/ActionTypes'


export function* watchSocket() {
	console.log("socket");
    yield takeEvery(actions.SOCKET_SEND, writeSocketSaga);
}