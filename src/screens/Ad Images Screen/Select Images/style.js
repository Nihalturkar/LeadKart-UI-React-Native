const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    innerContainer: {
        width: SIZES.width,
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
        fontFamily: FONTS.semiBold
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
    },
    loginwith:{
        flexDirection:"row",
        width:SIZES.width*1,
        alignItems:'center',
        justifyContent:"center",
        marginTop:SIZES.height*.045,
        gap: SIZES.width * .02,
    },
    line:{
        width:SIZES.width*.4,
        height:SIZES.height*.002,
        backgroundColor:COLORS.gray30
    },
    with:{
        color:COLORS.gray40,
        fontSize:SIZES.width*.04,
        ...FONTS.fiveHundred
    },
    imagepic: {
        borderWidth: 1,
        // borderStyle: "dashed",
        borderColor: COLORS.primary,
        width: SIZES.width * .9,
        marginTop: SIZES.height * .03,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        gap: SIZES.width * .02,
        alignSelf:'center'
    },
    pic: {
        color: COLORS.primary,
        fontSize: SIZES.width * .04

    },
    upload: {
        color: COLORS.primary,
        fontSize: SIZES.width * .05
    },
   

})

export default styles;