import React from "react";
import {TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import styles from "./style";
import Colors from "../../constants/Colors";
import {useNavigation} from "@react-navigation/native";


const NewMessageButton = () => {


    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('Contacts')
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons name="message-text" size={30} color={Colors.light.background}/>
            </TouchableOpacity>
        </View>
    )
}


export default NewMessageButton