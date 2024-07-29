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
    fview: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: SIZES.height * .02

    },
    main: {
        color: COLORS.black,
        fontSize: SIZES.width * .04,
        ...FONTS.sixHundred
    },
    smain: {
        color: COLORS.gray70,
        fontSize: SIZES.width * .038,
        ...FONTS.fiveHundred
    },
    icon: {
        fontSize: SIZES.width * 0.035,
        backgroundColor: "rgb(28, 120, 210)",
        padding: SIZES.width * 0.02,
        borderRadius: 50,
        color: COLORS.white,
        marginTop: SIZES.height * .01
    },
    see: {
        width: SIZES.width * .3,
        height: SIZES.width * .25
    },
    headingText: {
        fontSize: SIZES.width * .04,
        color: COLORS.black,
        ...FONTS.sixHundred,
        marginTop: SIZES.height * .02
    },
    scroll: {
        width: SIZES.width * 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: SIZES.height * .02,
        marginTop: SIZES.height * .02
    },
    text: {
        fontSize: SIZES.width * .033,
        ...FONTS.fiveHundred,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: SIZES.width * .04,
        padding: SIZES.width * .015,
        marginRight: SIZES.width * .035,
        color: COLORS.black,
        marginTop: SIZES.width * .03
    },

    headingView: {
        marginTop: SIZES.height * .025,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: SIZES.width * .04,
        borderTopColor: COLORS.gray20,
        borderTopWidth: 1,
        borderBottomColor: COLORS.gray20,
        borderBottomWidth: 1,
        padding: SIZES.width * .02
    },
    headingText1: {
        fontSize: SIZES.width * .038,
        color: COLORS.gray50,
        ...FONTS.sixHundred
    },
    headingView2: {
        marginTop: SIZES.height * .025,
        paddingHorizontal: SIZES.width * .04,
        borderTopColor: COLORS.gray20,
        borderTopWidth: 1,
        borderBottomColor: COLORS.gray20,
        borderBottomWidth: 1,
        padding: SIZES.width * .02
    },
    sheadingView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    Text1: {
        marginTop:SIZES.height*.01,
        color: COLORS.gray30,
        fontSize: SIZES.width * .035,
    },
    seemore: {
        color: COLORS.primary,
        ...FONTS.fiveHundred,
        fontSize: SIZES.width * .035
    },
    headingText3: {
        fontSize: SIZES.width * .035,
        color: COLORS.primary,
        ...FONTS.sixHundred,
        marginTop: SIZES.height * .02
    },
    line:{
        width:SIZES.width*.002,
        height:SIZES.width*.1,
        backgroundColor:COLORS.gray50,
        marginLeft:SIZES.width*.04
    },
    Text2: {
        // marginTop:SIZES.height*.01,
        color: COLORS.gray90,
        ...FONTS.sixHundred,
        fontSize: SIZES.width * .036,
    },

})
export default styles;