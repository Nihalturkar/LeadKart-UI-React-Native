const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    innerContainer: {
        width: SIZES.width*0.93,
        alignSelf: 'center',
        backgroundColor: COLORS.white,
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
    stext:{
        color:COLORS.gray30,
        marginLeft:SIZES.width*.04

    },
    imgView:{
        marginTop:SIZES.height*.02,
        width:SIZES.width*1
        
    },
    image:{
        width:SIZES.width*.38,
        height:SIZES.height*.19,
        marginLeft:SIZES.width*.02,
        marginRight:SIZES.width*.03,
    }

})

export default styles;