import { combineReducers } from 'redux';
import { AuthTokenReducer } from "./AuthTokenReducer";
import { SocketReducer } from "./SocketReducer"


export default combineReducers({
    AuthTokenReducer,
    SocketReducer,
})