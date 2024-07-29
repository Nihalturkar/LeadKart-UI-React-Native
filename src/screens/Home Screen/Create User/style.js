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
    img:{
        width:SIZES.width*.9,
        height:SIZES.height*.18,
        // backgroundColor:'red',
        marginTop:SIZES.height*.01
    },
    btn:{
        width:SIZES.width*.88,
        marginTop:SIZES.height*.05,
        marginBottom:SIZES.height*.01,
        elevation:0

    },

})

export default styles;