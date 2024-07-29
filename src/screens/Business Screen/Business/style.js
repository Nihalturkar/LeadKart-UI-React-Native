// import { Profiler } from "react";

const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    innerContainer: {
        width: SIZES.width * 1,
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    profilecard: {
        width: SIZES.width * .9,
        backgroundColor: COLORS.white,
        elevation: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.width * .04,
        marginBottom: SIZES.height * .01,
        borderRadius: 5,
        padding:SIZES.width*.045
    },
    img: {
        width: SIZES.width * .2,
        height: SIZES.height * .1,
        borderRadius: 50
    },
    name: {
        color: COLORS.black,
        ...FONTS.sixHundred,
        fontSize: SIZES.width * .04
    },
    address:{
        color: COLORS.gray30,
        ...FONTS.fourHundredHundred,
        fontSize: SIZES.width * .035
    },
    businessdets:{
        width: SIZES.width * .94,
        alignSelf:'center',
    },
    section:{
        width: SIZES.width * .9,
        backgroundColor: COLORS.white,
        // backgroundColor:'red',
        alignSelf:'center',
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.width * .04,
        marginBottom: SIZES.height * .01,
        borderRadius: 5,
        padding:SIZES.width*.03,
        gap:SIZES.width*.03

    },
     icon:{
        width: SIZES.width * .042,
        height: SIZES.height * .022,
     },
    title:{
        color: COLORS.gray60,
        ...FONTS.fiveHundred,
        fontSize: SIZES.width * .04
    },
    pencil:{
        color:COLORS.primary,
        fontSize:SIZES.width*.06,
        position:'absolute',
        left:SIZES.width*.37,
        top:SIZES.height*-.015,
    }

})
export default styles;