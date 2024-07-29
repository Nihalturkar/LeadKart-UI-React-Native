import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles= StyleSheet.create({
    tabicons:{
        width:SIZES.width*.06,
        height:SIZES.height*.07
    },
    tabstyle:{
        height:SIZES.height*.07,
        paddingBottom:8,
        backgroundColor:COLORS.white,
    },
    label: {
        fontSize:SIZES.width*.025,
        ...FONTS.fiveHundred
    },
    leftheader:{
        width:SIZES.width*.08,
        marginLeft:SIZES.width*.02
    },
    rightIcon:{
        flexDirection:'row',
        borderColor:COLORS.white,
        borderWidth:1,
        borderRadius:20,
        alignItems:'center',
        gap:SIZES.width*.02,
        marginRight:SIZES.width*.04,
        paddingHorizontal:SIZES.width*.025,
        padding:5
    },
    hrighttext:{
        fontSize:SIZES.width*.035,
        color:COLORS.white,
        ...FONTS.fiveHundred
    }
})
export default styles