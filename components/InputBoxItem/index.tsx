import React, {useState} from "react";
import {TextInput, TouchableOpacity, View} from "react-native";
import {Entypo, FontAwesome, FontAwesome5, Ionicons} from '@expo/vector-icons';
import styles from "./style";
import Colors from "../../constants/Colors";


const InputBoxItem = () => {

    const [message, setMessage] = useState('')

    const onSendPress = () => {
        console.warn('sending: ' + message )
        setMessage('')
    }

    const onMicrophonePress = () => {
        console.warn('microphone' )
    }


    const onPress = () => {
        if (!message) {
            onMicrophonePress()
        } else if (message) {
            onSendPress()
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 style={styles.emoji} name="laugh-beam" size={24} color="grey"/>
                <TextInput
                    placeholder={'Bir mesaj yazın'}
                    style={styles.input}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo style={styles.attachment} name="attachment" size={22} color="grey"/>
                {!message && <FontAwesome5 style={styles.camera} name="camera" size={22} color="grey"/>}
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.endContainer}>
                    {
                        !message ?
                            <FontAwesome name="microphone" size={22} color={Colors.light.background}/> :
                            <Ionicons name="send" size={22} color={Colors.light.background}/>
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default InputBoxItem