import React from 'react';
import {FlatList, ImageBackground} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ChatMessageItem from "../components/ChatMessageItem";
import chatRoomData from "../data/Chats";
import InputBoxItem from "../components/InputBoxItem";

const ChatRoomScreen = () => {


    const route = useRoute();
    /*console.log(route.params)*/
    return (
        <ImageBackground
            source={require('../assets/images/BG.png')}
            style={{
                width:'100%',
                height:'100%',
            }}
        >
            <FlatList
                data={chatRoomData.messages}
                renderItem={({item}) =>
                    <ChatMessageItem message={item}/>
                }
                inverted
            />

            <InputBoxItem></InputBoxItem>
        </ImageBackground>
    )
};

export default ChatRoomScreen;