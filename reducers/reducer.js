export default function reducer(store, action){
	if (action.type == 'hide'){
		return [
			...state,
		
		{
			description: action.payload.description,
		}
	];


	}
}

