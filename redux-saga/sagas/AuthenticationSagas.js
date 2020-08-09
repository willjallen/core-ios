import { put, takeEvery } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import {getAuthToken} from "../../services/SocketIOService"


import * as actions from '../../redux/constants/ActionTypes'


// Fetch auth token if not saved locally
// If it is saved locally then defer to that instead
export function* fetchAuthToken(payload) {
    yield console.log("payload", payload);
    try {
        const authToken = yield getAuthToken(payload);
        yield saveTokenLocally(authToken);
        yield put({type: actions.USER_AUTH_TOKEN_SUCCEEDED, authToken: authToken});
    } catch(e){
        yield put({type: actions.USER_AUTH_TOKEN_FAILED, message: e.message});
    }
}

export function* saveTokenLocally(token) {
	yield AsyncStorage.setItem('userToken', token)
    .then((data) => {
        //dispatch(loading(false));
        //dispatch(saveToken('token saved'));
    })
    .catch((err) => {
       // dispatch(loading(false));
       // dispatch(error(err.message || 'ERROR'));
    })
	
}


