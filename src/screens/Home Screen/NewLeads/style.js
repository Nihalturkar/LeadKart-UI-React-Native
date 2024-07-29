const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    innerContainer: {
        width: SIZES.width *1,
        alignSelf: 'center',
        backgroundColor: COLORS.white,
    },
    warningView: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        backgroundColor: 'rgb(236, 253, 243)',
        marginTop: SIZES.height * .02,
        gap: SIZES.width * .02,
        padding: SIZES.width * .02,
        borderRadius: 10,
        alignSelf:'center'
    },
    icon: {
        color: COLORS.black,
        fontSize: SIZES.width * .03,
        marginTop: SIZES.height * .006,
    },
    warningText: {
        fontSize: SIZES.width * .036,
        ...FONTS.fiveHundred,
        width: SIZES.width * .75,
        color: COLORS.gray40
    },
    headingText: {
        marginLeft:SIZES.width*.04,
        fontSize: SIZES.width * .042,
        color: COLORS.black,
        ...FONTS.fiveHundred,
        marginTop: SIZES.height * .02,
    },
    or: {
        fontSize: SIZES.width * .04,
        color: COLORS.gray60,
        marginTop: SIZES.height * .02,
        textAlign: 'center'
    },
    package: {
        width: SIZES.width * 1,
        alignItems:'center',
        justifyContent:"center",
        marginBottom:SIZES.height*.02,
        marginTop:SIZES.height*.02

    },
    estimateResult: {
        width: SIZES.width *.9,
        elevation: 2,
        backgroundColor: COLORS.white,
        padding: SIZES.width * .02,
        borderRadius: 10,
        marginBottom: SIZES.height * .02,
        alignSelf:'center'

    },
    result: {
        color: COLORS.black,
        ...FONTS.sixHundred,
        fontSize: SIZES.width * .04
    },
    flexView: {
        flexDirection: 'row',
        gap: SIZES.width * .02,
        alignItems: 'center',
        marginBottom: SIZES.height * .008,
    },
    multiView:{
        flexDirection: 'row', 
        alignItems: 'center',
         justifyContent: 'space-between',
         paddingHorizontal:SIZES.width*.03
      },
      leadimg:{
        width: SIZES.width * .08,
        height: SIZES.height * .04,
        borderRadius:50,
        backgroundColor:COLORS.gray10,
        alignItems:'center',
        justifyContent:'center'
      },
    leadicon: {
        width: SIZES.width * .05,
        height: SIZES.height * .02,
        borderRadius: 50
    },
    eye: {
        fontSize: SIZES.width * .04,
        color: COLORS.gray70,
        backgroundColor: COLORS.gray10,
        padding: SIZES.width * .02,
        borderRadius: 50
    },
    price: {
        fontSize: SIZES.width * .04,
        color: COLORS.black,
        ...FONTS.sixHundred
    },
    view: {
        color: COLORS.gray50,
        ...FONTS.fourHundred
    },
    desc: {
        width: SIZES.width * .83,
        color: COLORS.gray50,
        fontSize: SIZES.width * .038
    },
    FAQ: {
        marginTop: SIZES.height * .02,
       alignItems:'center',
       width:SIZES.width*.9,
       alignSelf:"center"
    },
    questionView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SIZES.height * .018,
    },
    question: {
        color: COLORS.gray80,
        fontSize: SIZES.width * .04,
        ...FONTS.fiveHundred
    },
    content: {
        color: COLORS.gray50,
        fontSize: SIZES.width * .035,
        ...FONTS.fiveHundred
    },
    button:{
        width:SIZES.width*.9,
        marginTop: SIZES.height * .03,
        marginBottom: SIZES.height * .03,
    }
})

export default styles;