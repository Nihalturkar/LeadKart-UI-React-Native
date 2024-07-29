const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    innerContainer: {
        width: SIZES.width * .94,
        alignSelf: 'center',
        backgroundColor: COLORS.white,
    },
    headingText: {
        marginLeft:SIZES.width*.02,
        fontSize: SIZES.width * .042,
        color: COLORS.black,
        ...FONTS.fiveHundred,
        marginTop: SIZES.height * .02,
    },
    btn:{
        width:SIZES.width*.9,
        marginLeft:SIZES.width*.02,
        marginTop:SIZES.height*.02,
        marginBottom:SIZES.height*.01,
        elevation:0

    }
})
export default styles;