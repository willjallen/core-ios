import { combineReducers } from 'redux';
import { AuthTokenReducer } from "./AuthTokenReducer";
import { SocketReducer } from "./SocketReducer"
import { messages } from "./MessageReducer"

export default combineReducers({
    AuthTokenReducer,
    SocketReducer,
    messages,
})