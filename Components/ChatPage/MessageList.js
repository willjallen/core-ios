import React, { Component } from 'react';
import {
    FlatList, Text, Image,
    View, Heading
} from 'react-native';


const RenderMessage = ({ item }) => (
    <View>
        <Image styleName="small-avatar top"
               source={{ uri: item.author.avatar }} />
        <View styleName="vertical">
            <View styleName="horizontal space-between">
                <Text>{item.author.name}</Text>
            </View>
            <Text styleName="multiline">{item.text}</Text>
        </View>
    </View>
);

const MessageList = ({ messages, onLayout }) => (
    <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id}
        renderItem={({item, index, seperators}) => (
            <View>
              <Text>
                {item.text}
                </Text>
              </View>

          )}


      />
);

export default MessageList;

/*
    <ListView data={messages}
              autoHideHeader={true}
              renderRow={msg => <Message msg={msg} />}
              onLayout={onLayout}
              />
*/