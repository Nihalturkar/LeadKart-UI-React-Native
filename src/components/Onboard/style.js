import { StyleSheet } from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.white
    },

    bannerView: {
        width: SIZES.width * 1,
        height: SIZES.height * .6,
        overflow: 'hidden',
        backgroundColor: COLORS.lightblue2,
        borderBottomEndRadius:SIZES.width * .45,
        borderBottomLeftRadius:SIZES.width * .45,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:.5,
        overflow:'hidden'
    },
    image: {
        width: SIZES.width * .8,
        marginRight:SIZES.width*.05,
        height: SIZES.height * .4,
        marginLeft:SIZES.width*.05
    },
   
    text: {
        width:SIZES.width*1,
        textAlign:"center",
        fontSize: SIZES.width * .055,
        color: COLORS.black,
        ...FONTS.sixHundred,
        marginTop: SIZES.height * .08
    },
    smallText: {
        width:SIZES.width*1,
        textAlign:"center",
        fontSize: SIZES.width * .036,
        color: COLORS.gray50,
        ...FONTS.fiveHundred,
        marginTop: SIZES.height * .02,
    },
})

export default styles;