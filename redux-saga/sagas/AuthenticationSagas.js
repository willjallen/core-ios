import { put, takeEvery } from 'redux-saga/effects'
import {getAuthToken} from "../../services/SocketIOService";

export function* fetchAuthToken(payload) {
    yield console.log("payload", payload);
    try {
        const authToken = yield getAuthToken(payload);
        yield put({type: "USER_AUTH_TOKEN_SUCCEEDED", authToken: authToken});
    } catch(e){
        yield put({type: "USER_AUTH_TOKEN_FAILED", message: e.message});
    }
}

