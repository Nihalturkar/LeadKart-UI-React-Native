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
    logoview:{
        width:SIZES.width*.9,
        height:SIZES.height*.2,
        flexDirection:'row',
        alignContent:'flex-start',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:SIZES.height*.02
    },
    logo:{
        width:SIZES.width*.22,
        height:SIZES.height*.13,
        borderWidth:1,
        borderColor:COLORS.gray20,
        borderStyle:'dashed',
        alignItems:'center',
        justifyContent:'center',
        marginTop:SIZES.height*.02
    },
    text:{
        color:COLORS.gray60,
        fontSize:SIZES.width*.035,
        textAlign:'center'
    },
    input:{
        width:SIZES.width*.55
    }
})

export default styles;