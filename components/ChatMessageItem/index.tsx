import React from "react";
import {Message} from "../../types";
import {Text, View} from "react-native";
import moment from "moment";
import styles from './style'
import Colors from "../../constants/Colors";

export type ChatMessageItemProps = {
    message: Message
}


const ChatMessageItem = (props: ChatMessageItemProps) => {
    const {message} = props
    const isMyMessage = () =>{
        return message.user.id==='u1';
    }
    return (
        <View style={styles.container} >
            <View style={[
                styles.messageBox,
                {backgroundColor: isMyMessage() ? Colors.light.chatBubbleBackground : Colors.light.background},
                {alignSelf: isMyMessage() ? 'flex-end':'flex-start'},
                {marginRight: isMyMessage() ? 10:50},
                {marginLeft: isMyMessage() ? 50:10},
            ]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.content}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).format('HH:mm')}</Text>
                <View>
                </View>
            </View>
        </View>
    )
}


export default ChatMessageItem