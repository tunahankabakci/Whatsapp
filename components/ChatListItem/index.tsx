import React from "react";
import {Image, Text, TouchableWithoutFeedback, View} from "react-native";
import {ChatRoom} from '../../types';
import styles from "./style";
import moment from "moment";
import {useNavigation} from '@react-navigation/native'

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props
    const user = chatRoom.users[1];
    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('ChatRoom',{
            id:chatRoom.id,
            name:user.name,
        })
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View>
                    <Image style={styles.avatar} source={{uri: user.imageUri}}/>
                </View>
                <View style={styles.midContainer}>
                    <View style={styles.endContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <Text style={styles.time}>
                            {renderDate(chatRoom.lastMessage.createdAt)}
                        </Text>
                    </View>
                    <View style={styles.endContainer}>
                        <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};


const renderDate = (date: String) => {
    const now = moment(Date.now())
    const d = moment(date)
    if (now.diff(d, 'days') == 0) {
        return (
            <Text>{d.format('HH:mm')}</Text>
        )
    } else if (now.diff(d, 'days') === 1) {
        return (
            <Text>Dün</Text>
        )
    } else {
        return (
            <Text>{d.format('DD/MM/YYYY')}</Text>
        )
    }
}

export default ChatListItem