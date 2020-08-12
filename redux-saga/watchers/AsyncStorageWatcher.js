import { combineReducers } from 'redux';
import { takeEvery } from 'redux-saga/effects'

import { watchSocketChannel } from '../sagas/SocketSagas'
import {saveData, getData} from '../sagas/AsyncStorageSagas'

import * as actions from '../../redux/constants/ActionTypes'


export function* watchAsyncStorage() {
	yield takeEvery(actions.SAVE_LOCAL_DATA, saveData);
	yield takeEvery(actions.GET_LOCAL_DATA, getData);
}