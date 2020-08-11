import * as actions from "../constants/ActionTypes";

export const fetchUserAuthToken = content => ({
    type: actions.FETCH_USER_AUTH_TOKEN,
    payload: {
        content
    }

})

export const sendOnSocket = content => ({
	type: actions.SOCKET_SEND,
	payload: {
		content
	}
})

export const openSocket = content => ({
	type: actions.CREATE_SOCKET,
	payload: {
		content
	}
})

export const addMessage = (msg) => ({
    type: 'ADD_MESSAGE',
    ...msg
});


export const sendMessage = (text, user) => {
    return function (dispatch) {
        let msg = {
                text: text,
                time: Date.now(),
                author: {
                    name: user.name,
                    avatar: user.avatar
                }
            };

        //async send
        console.log("send message!");

        dispatch(addMessage(msg));
    };
};

export const receivedMessages = () => ({
    type: 'RECEIVED_MESSAGES',
    receivedAt: Date.now()
});

export const fetchMessages = () => {
    return function (dispatch) {
        dispatch(startFetchingMessages());

        //async fetch
	}
}

export const receiveMessages = (messages) => {
    return function (dispatch) {
        Object.values(messages).forEach(msg => dispatch(addMessage(msg)));

        dispatch(receivedMessages());
    }
}
