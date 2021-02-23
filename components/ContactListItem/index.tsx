import React from "react";
import {Image, Text, TouchableWithoutFeedback, View} from "react-native";
import {User} from '../../types';
import styles from "./style";
import {useNavigation} from '@react-navigation/native'

export type ContactListItemProps = {
    user: User;
}

const ContactListItem = (props: ContactListItemProps) => {
    const {user} = props
    const navigation = useNavigation();

    const onClick = () => {
        //navigate to chat room with this user
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
                    </View>
                    <View style={styles.endContainer}>
                        <Text numberOfLines={1} style={styles.status}>{user.status}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};



export default ContactListItem