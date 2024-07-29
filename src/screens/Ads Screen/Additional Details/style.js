const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center'
    },
    innerContainer: {
        width: SIZES.width * .9,
        alignSelf: 'center',
        backgroundColor: COLORS.white,
    },
    input: {
        width: SIZES.width * .9,
        paddingHorizontal: SIZES.width * .02
    },
    imagepic: {
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: COLORS.gray30,
        width: SIZES.width * .88,
        marginTop: SIZES.height * .03,
        height: SIZES.height * .1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        gap: SIZES.width * .02
    },
    pic: {
        color: COLORS.black,
    },
    upload: {
        color: COLORS.blue,
        fontSize: SIZES.width * .05
    },
    boxContainer: {
        backgroundColor: 'rgb(236, 253, 243)',
        marginTop: SIZES.height * .02,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: SIZES.width * .04,
        borderRadius: 10,
        padding: SIZES.width * .03,
        width: SIZES.width * .88
    },
    innerbox: {
        width: SIZES.width * .55,
    },
    boxtxt: {
        color: COLORS.gray30,
        ...FONTS.fiveHundred,
        fontSize: SIZES.width * .035,
        marginTop: SIZES.height * .002,
    },
    maintxt: {
        color: COLORS.primary,
        fontSize: SIZES.width * .038,
        ...FONTS.sixHundred
    },
    aitext: {
        color: COLORS.gray70,
        fontSize: SIZES.width * .036,
        ...FONTS.fiveHundred
    },
    action: {
        flexDirection: 'row',
        gap: SIZES.width * .04,
        // backgroundColor: 'red',
        marginTop: SIZES.width * .02,
        alignItems: 'center',
    },
    headingText: {
        fontSize: SIZES.width * .04,
        color: COLORS.black,
        ...FONTS.sixHundred
    },
    icon: {
        color: COLORS.black,
        fontSize: SIZES.width * .04
    },
    txt:{

    },
    audience: {
        flexDirection: 'row',
        gap: SIZES.width * .015,
        alignItems: 'center',
        borderWidth:1,
        borderColor:COLORS.gray20, 
        width:SIZES.width*.33,
        borderRadius:20,
        padding:SIZES.width*.01,
        paddingHorizontal:SIZES.width*.02 ,
        marginTop:SIZES.height*.01,
        marginRight:SIZES.width*.01
    },
    btn:{
        width:SIZES.width*.88,
        marginTop:SIZES.height*.03,
        marginBottom:SIZES.height*.02,
        elevation:0

    },
  
})
export default styles;