const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    innerContainer: {
        width: SIZES.width *1,
        alignSelf:'center',
        backgroundColor: COLORS.white,
        paddingHorizontal:SIZES.width*.04
    },
    heading:{
        fontSize:SIZES.width*.04,
        color:COLORS.black,
        ...FONTS.sixHundred,
        marginTop:SIZES.height*.02,
        marginLeft:SIZES.width*.02
    },
    stext:{
        color:COLORS.gray60,
        fontSize:SIZES.width*.035,
        marginTop:SIZES.height*.01,
        marginLeft:SIZES.width*.02
    },
    headingView:{
        marginTop:SIZES.height*.025,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        paddingHorizontal:SIZES.width*.04
    },
    headingText:{
        fontSize:SIZES.width*.04,
        color:COLORS.black,
        ...FONTS.sixHundred
    },
    seemore:{
        color:COLORS.primary,
        ...FONTS.fiveHundred,
        fontSize:SIZES.width*.035
    },
})
export default styles