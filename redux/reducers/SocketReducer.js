import * as actions from "../../redux/constants/ActionTypes";


export const SocketReducer = (state = {}, action) => {

	switch(action.type){
		case(actions.SOCKET_SEND):
			return {...state};
		default:
			return state;
	}

}

