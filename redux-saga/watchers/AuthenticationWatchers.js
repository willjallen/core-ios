// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
import {fetchAuthToken, getAuthTokenLocally} from "../sagas/AuthenticationSagas";
import {takeEvery} from 'redux-saga/effects';

import * as actions from "../../redux/constants/ActionTypes";


export function* watchLogin() {
    yield takeEvery(actions.FETCH_USER_AUTH_TOKEN, fetchAuthToken);
    yield takeEvery(actions.GET_USER_AUTH_TOKEN, getAuthTokenLocally)
}