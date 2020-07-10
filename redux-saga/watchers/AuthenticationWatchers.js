// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
import {fetchAuthToken} from "../sagas/AuthenticationSagas";
import {takeEvery} from 'redux-saga/effects';

import {FETCH_USER_AUTH_TOKEN} from "../../redux/constants/ActionTypes";

export function* watchLogin() {
    yield takeEvery(FETCH_USER_AUTH_TOKEN, fetchAuthToken);
}