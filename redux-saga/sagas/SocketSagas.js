import { put, takeEvery } from 'redux-saga/effects'
import { } from "../../services/SocketIOService";






export function* fetchMessages(payload) {
    yield console.log("payload", payload);
    try {
        const authToken = yield getAuthToken(payload);
        yield put({type: "USER_AUTH_TOKEN_SUCCEEDED", authToken: authToken});
    } catch(e){
        yield put({type: "USER_AUTH_TOKEN_FAILED", message: e.message});
    }
}

export function* sendMessage(payload) {
	try {
		yield put({type: }) 
	}
}

