import { StyleSheet } from "react-native"
import { COLORS, FONTS, SIZES } from "../../../constants"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        // alignItems:'center',

    },
    innerContainer:{ 
      width:SIZES.width,
      alignSelf:'center',
      backgroundColor:COLORS.white,
    },
    headingText:{
        fontSize:SIZES.width*.042,
        color:COLORS.black,
        ...FONTS.fiveHundred,
        marginTop:SIZES.height*.02,
        marginLeft:SIZES.height*.02, 
    },
    datastyle:{
        width:SIZES.width*1,
        alignItems:'center',
        marginLeft:SIZES.height*.02,
    },
    how:{
        width:SIZES.width*1,
        alignSelf:"center"
    },
   
    callContainer:{
        width:SIZES.width*.9,
        height:SIZES.height*.18,
        backgroundColor:"rgba(199, 224, 254, 1)",
        borderRadius:5,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        paddingHorizontal:SIZES.width*.04,
        marginBottom:SIZES.height*.02,
        marginLeft:SIZES.height*.02,

    },
    blueText:{
        color:COLORS.primary,
        fontSize:SIZES.width*.04,
        ...FONTS.sevenHundred
    },
    calltext:{
        fontSize:SIZES.width*.038,
        color:COLORS.gray60,
        ...FONTS.fiveHundred,
        width:SIZES.width*.6
    },
    girl:{
        width:SIZES.width*.3,
        height:SIZES.height*.2,
        position:"absolute",
        right:SIZES.width*.002,
        top:SIZES.height*-.015
    },
    button:{
        backgroundColor:COLORS.primary,
        width:SIZES.width*.3,
        paddingVertical:SIZES.width*.02,
        borderRadius:8,
        fontSize:SIZES.width*.038,
        textAlign:'center',
        ...FONTS.sixHundred
    },
    createBanner:{
        width:SIZES.width*.9,
        height:SIZES.height*.17,
        borderRadius:10,
        marginTop:SIZES.height*.02,
        marginBottom:SIZES.height*.01,
        marginLeft:SIZES.height*.02
    }
})

export default styles;