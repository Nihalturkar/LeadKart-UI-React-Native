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
    headingText: {
        marginLeft: SIZES.width * .02,
        fontSize: SIZES.width * .042,
        color: COLORS.black,
        ...FONTS.fiveHundred,
        marginTop: SIZES.height * .02,
    },
    radio: {
        width: SIZES.width * .06,
        height: SIZES.height * .03,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: "center"
    },
    check: {
        color: COLORS.black,
        fontSize: SIZES.width * .045,
        ...FONTS.sevenHundred,
        color:COLORS.primary
    },
    btn: {
        width: SIZES.width * .88,
        marginLeft: SIZES.width * .02,
        marginTop: SIZES.height * .02,
        marginBottom: SIZES.height * .01,
        elevation: 0

    },
    componentstyle: {
        flexDirection: 'row',
        alignItems: "center",
        width: SIZES.width * 1,
        gap: SIZES.width * .03
    }

})
export default styles;