// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
import {fetchAuthToken} from "../sagas/AuthenticationSagas";
import {takeEvery} from 'redux-saga/effects';

export function* watchLogin() {
    yield takeEvery('USER_AUTH_TOKEN_REQUEST', fetchAuthToken);
}