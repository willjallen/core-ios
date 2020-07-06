import { put, takeEvery } from 'redux-saga/effects'

export function* fetchAuthToken(payload) {
    try {
        const authToken = yield call();
        yield put({type: "USER_AUTH_TOKEN_SUCCEEDED", authToken: authToken});
    } catch(e){
        yield put({type: "USER_AUTH_TOKEN_FAILED", message: e.message});
    }
}

