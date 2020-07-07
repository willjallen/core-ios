import {FETCH_USER_AUTH_TOKEN, USER_AUTH_TOKEN_RECEIVED } from "../../redux/constants/ActionTypes";


export const loginReducer = (state = {}, action) => {

	switch(action.type){
		case(FETCH_USER_AUTH_TOKEN):
			return {...state, loading: true };
		case(USER_AUTH_TOKEN_RECEIVED):
			return {...state, loading: false};
		default:
			return state;
	}

}

