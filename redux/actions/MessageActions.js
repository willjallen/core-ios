import * as actions from "../constants/ActionTypes";


function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}



// Fetching

// Start fetching messages
export const startFetchingMessages = () => ({
	type: actions.SOCKET_SEND,
	eventName: 'get',
	namespace: 'messages',
	params: null,
	payload: null,

});






export const sendMessage = (text, user) => ({
	type: actions.SOCKET_SEND,
	eventName: 'create',
	namespace: 'messages',
	params: null,
	text: text,
	payload: text,
	id: makeid(8)

})


export const messagesReceived = (fetching) => ({
	type: actions.MESSGE_FETCH_COMPLETED,
	fetching
})

export const addMessage = (msg) => ({
    type: 'ADD_MESSAGE',
    ...msg
});


