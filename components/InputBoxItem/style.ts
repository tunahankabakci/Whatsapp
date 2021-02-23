import {StyleSheet} from 'react-native'
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:'3%',
        marginBottom:6,
        marginTop:6,
        maxHeight:'20%',
    },

    mainContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Colors.light.background,
        paddingVertical:10,
        borderRadius:50,
        flex:1,
    },

    endContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.light.tint,
        borderRadius:50,
        marginLeft:'1%',
        height:55,
        width:55,

    },

    emoji:{
        marginLeft:10,
    },

    input:{
        flex:1,
        marginLeft:8,
    },

    attachment:{
        marginRight:13,
        marginLeft:8,
    },

    camera:{
        marginRight:15,
    },

    microphone:{

    },

});

export default styles;