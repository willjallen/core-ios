import * as actions from "../../redux/constants/ActionTypes";



const message = (state, action) => {
    switch (action.type) {
        case 'SOCKET_SEND':
            return {
                id: action.id,
                text: action.text,
            }
        default:
            return state
    }
}



export const messages = (state = [], action) => {

	switch(action.type){
		case(actions.SOCKET_SEND):
			if (state.map(m => m.id).includes(action.id)) {
                return state;
            }else{
                return [
                ...state,
                message(undefined, action)
                ]
            }
		case(actions.BEGIN_MESSAGE_FETCH):
			return { isFetching: true,
				...state};
		case(actions.RECEIVED_MESSAGES):
			return {
                isFetching: false,
                ...state
			}

		default:
			return state;
	}

}
