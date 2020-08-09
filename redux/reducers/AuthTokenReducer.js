import {FETCH_USER_AUTH_TOKEN, FETCH_USER_AUTH_TOKEN_SUCCEEDED } from "../../redux/constants/ActionTypes";


export const AuthTokenReducer = (state = {}, action) => {

	switch(action.type){
		case(FETCH_USER_AUTH_TOKEN):
			return {...state, loading: true };
		case(FETCH_USER_AUTH_TOKEN_SUCCEEDED):
			return {...state, loading: false};
		default:
			return state;
	}

}

