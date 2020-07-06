export default function loginReducer(store, action){
	if (action.type == 'hide'){
		return [
			...state,
		
		{
			description: action.payload.description,
		}
	];


	}
}

