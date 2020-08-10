import * as actions from "../../redux/constants/ActionTypes";


export const AuthTokenReducer = (state = {}, action) => {

	switch(action.type){
		case(actions.FETCH_USER_AUTH_TOKEN):
			return {...state, loading: true };
		case(actions.FETCH_USER_AUTH_TOKEN_SUCCEEDED):
			return {...state, loading: false};
		default:
			return state;
	}

}

