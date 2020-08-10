import * as actions from "../../redux/constants/ActionTypes";


export const SocketReducer = (state = {}, action) => {

	switch(action.type){
		case(actions.SOCKET_SEND):
			return {...state};
		case(actions.CREATE_SOCKET):
			return {...state};
		case(actions.GET_MESSAGES):
			return { messagesPayload,
				... state};
		default:
			return state;
	}

}

