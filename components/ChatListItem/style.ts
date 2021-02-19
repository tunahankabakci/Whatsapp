import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    avatar: {
        width: 55,
        height: 55,
        marginLeft:15,
        borderRadius:50,
        marginBottom:5,
    },
    container:{
        flexDirection:'row',
        width:'100%',
        paddingHorizontal:5,
        paddingVertical:12,

    },
    midContainer:{
        flexDirection:'column',
        justifyContent:'space-around',
        flex:1,
        marginRight:20,
        marginLeft:15,
        borderBottomWidth:0.4,
        borderBottomColor:'lightgrey',

    },
    endContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
    },
    username:{
        fontWeight:'bold',
        fontSize:15,
    },
    lastMessage:{
        color:'grey',
        fontSize:14,
    },
    time:{
        color:'grey',
        fontSize:12,
        marginTop:5,
    }
})

export default  styles