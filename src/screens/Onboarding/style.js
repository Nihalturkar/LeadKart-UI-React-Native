import { StyleSheet } from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.white,
    },
    container: {
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    indicatorContainer:{
        position:'absolute',
        top:SIZES.height*.62,
        left:SIZES.width*.4,
        width:SIZES.width*.2,
        height:SIZES.height*.02,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:SIZES.width*.02
    },
    indicator:{
        width:SIZES.width*.02,
        height:SIZES.height*.01,
        backgroundColor:COLORS.gray20,
        borderRadius:50,
    },
    activeIndicator:{
        width:SIZES.width*.02,
        height:SIZES.height*.01,
        backgroundColor:COLORS.primary,
        borderRadius:50,
    },
    Nextconatiner:{
        width:SIZES.width*1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        paddingHorizontal:SIZES.width*.05,
        marginTop:SIZES.height*.15,
        },
        skip:{
            fontSize:SIZES.width*.04,
            color:COLORS.gray50,
            ...FONTS.fiveHundred
        },
        continue:{
            backgroundColor:COLORS.primary,
            fontSize:SIZES.width*.04,
            padding:SIZES.width*.03,
            paddingHorizontal:SIZES.width*.08,
            borderRadius:15,
            ...FONTS.sixHundred,
            color:COLORS.white,
    
    
        }
})

export default styles;