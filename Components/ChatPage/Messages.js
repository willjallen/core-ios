import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native'

import MessageList from './MessageList';
import { messages } from '../../redux/reducers/MessageReducer'
//import { updateMessagesHeight } from '../actions';

const updateMessagesHeight = event => {
    return null;
};


const mapStateToProps = (state) => ({
    messages: state,
    isFetching: false
});

const Messages = connect(
    mapStateToProps
)(({ messages, isFetching, dispatch }) => {
    console.log(messages.messages);
    if (isFetching) {
        return (
            <View style={{paddingTop: 50,
                          paddingBottom: 50}}>
                
            </View>
        )
    }else{
        console.log('12334',messages.messages);
        return <MessageList messages={messages.messages}
                            style={{minHeight: 100}}
                            />
    }
});

export default Messages;