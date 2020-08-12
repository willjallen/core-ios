import { AsyncStorage } from 'react-native'
import { put, fork, take, call, apply } from 'redux-saga/effects'

import * as actions from '../../redux/constants/ActionTypes'

export function* saveData(key, data){
	yield call(AsyncStorage.setItem, key, data);
	yield put({type: actions.SAVE_LOCAL_DATA_SUCCESSFUL, foos: results});
	console.log('Fireside [AsyncStorage] :', key, data, ' stored successfully');
}


export function* getData(key){
     const data = yield call(AsyncStorage.getItem, key)
     yield put({type: actions.GET_LOCAL_DATA_SUCCESSFUL, data: data});
     yield data;
}

