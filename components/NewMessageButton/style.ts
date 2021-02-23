import {StyleSheet} from 'react-native'
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({

    container:{
        zIndex: 1,
        backgroundColor:Colors.light.tint,
        position:'absolute',
        bottom:20,
        right:20,
        width:70,
        height:70,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',

    }

})

export default styles