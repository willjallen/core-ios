import { put } from 'redux-saga/effects'
import { sendMessage } from "../../services/SocketIOService";


export function* fetchMessages(payload) {
    yield console.log("payload", payload);
    try {
        const authToken = yield getAuthToken(payload);
        yield put({type: "CREATE_SOCKET", authToken: authToken});
    } catch(e){
        yield put({type: "USER_AUTH_TOKEN_FAILED", message: e.message});
    }
}

export function* writeSocketSaga(payload) {
	try {
		yield console.log(payload);
		yield sendMessage(payload);
	} catch(e){

	}
}

