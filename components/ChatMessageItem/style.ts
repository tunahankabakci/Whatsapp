import React from "react";
import {StyleSheet} from 'react-native'
import Colors from "../../constants/Colors";


const styles = StyleSheet.create({

    container:{
        margin:5,
    },

    messageBox:{
        alignSelf:'baseline',
        backgroundColor: Colors.light.background,
        borderRadius:10,
        paddingVertical:5,
        paddingHorizontal:10,
    },

    time:{
        marginRight:10,
        alignSelf:'flex-end',
        color:'grey',
        fontSize:11,
    },

    name:{
        fontWeight:'bold',
    },

    content:{
        marginRight:11,
    },


});

export default styles;