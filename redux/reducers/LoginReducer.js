import {FETCH_USER_AUTH_TOKEN, USER_AUTH_TOKEN_RECEIVED } from "../../redux/constants/ActionTypes";


export const loginReducer = (state = {}, action) => {

	switch(action){
		case(action.type == FETCH_USER_AUTH_TOKEN):
			return {...state, loading: true };
		case(action.type == USER_AUTH_TOKEN_RECEIVED):
			return {...state, loading: false};
		default:
			return state;
	}

}

