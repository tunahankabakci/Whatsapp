import React from "react";
import {Image, Text, View} from "react-native";
import {ChatRoom} from '../../types';
import styles from "./style";
import moment from "moment";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}


const renderDate = (date: String) => {
    const now = moment(Date.now())
    const d = moment(date)
    if (now.diff(d, 'days') == 0) {
        return (
            <Text>{d.format('HH:mm')}</Text>
        )
    } else if (now.diff(d, 'days') == 1) {
        return (
            <Text>Dün</Text>
        )
    } else {
        return (
            <Text>{d.format('DD/MM/YYYY')}</Text>
        )
    }
}

const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props
    const user = chatRoom.users[1];

    return (
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
    )
};

export default ChatListItem