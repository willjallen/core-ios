import { put, takeEvery } from 'redux-saga/effects'
import {testMessage} from "../../services/AuthTokenService";

export function* fetchAuthToken(payload) {
    //yield console.log("payload", payload);
    try {
        const authToken = yield testMessage(payload);
        yield put({type: "USER_AUTH_TOKEN_SUCCEEDED", authToken: authToken});
    } catch(e){
        yield put({type: "USER_AUTH_TOKEN_FAILED", message: e.message});
    }
}

