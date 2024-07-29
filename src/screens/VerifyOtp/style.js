const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../constants");

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.white,
        alignItems:'center'
    },
    container:{
        alignItems:'center'
    },
    mobImg:{
        width:SIZES.width*.6,
        height:SIZES.height*.3
    },
    text:{
        color:COLORS.gray60,
        ...FONTS.fiveHundred,
        width:SIZES.width*.9,
        textAlign:'center',
        fontSize:SIZES.width*.04
    },
    number:{
        color:COLORS.primary
    },
    otpView:{
        width:SIZES.width*.55,
        height:SIZES.height*.06,
        marginTop:SIZES.height*.04,
    },
      underlineStyleBase: {
        width: SIZES.width*.11,
        height:SIZES.height*.055,
       borderColor:COLORS.gray30,
        borderWidth: .5,
        borderRadius:10,
        color:COLORS.black,
        fontSize:SIZES.width*.04,
        ...FONTS.fiveHundred
      },
      underlineStyleHighLighted:{
        color:COLORS.black,
      },
    resendView:{
        width:SIZES.width*1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:SIZES.width*.04,
        marginTop:SIZES.height*.04,
    },
    smallText:{
        color:COLORS.gray60,
        fontSize:SIZES.width*.038
    },
    input:{
        marginTop:SIZES.height*.04,
        width:SIZES.width*.9,
        shadowColor:'none'
    },
})

export default styles;