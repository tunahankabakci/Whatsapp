import * as React from 'react';
import {FlatList, View} from 'react-native';


import ChatListItem from "../components/ChatListItem";
import chatRooms from "../data/ChatRooms";
import NewMessageButton from "../components/NewMessageButton";

export default function ChatsScreen() {
  return (
    <View>
      <FlatList
          data={chatRooms}
          renderItem={({item})=><ChatListItem chatRoom={item}/>}
          keyExtractor={item => item.id}
      />
      <NewMessageButton/>
    </View>
  );
}
