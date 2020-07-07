import { put, takeEvery } from 'redux-saga/effects'
import {testMessage} from "../../services/AuthTokenService";

export function* fetchAuthToken(payload) {
    yield console.log("here1");
    try {
        const authToken = yield testMessage();
        yield put({type: "USER_AUTH_TOKEN_SUCCEEDED", authToken: authToken});
    } catch(e){
        yield put({type: "USER_AUTH_TOKEN_FAILED", message: e.message});
    }
}

