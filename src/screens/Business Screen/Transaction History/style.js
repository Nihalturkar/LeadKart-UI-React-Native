const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center'
    },
    innerContainer: {
        width: SIZES.width *1,
        alignSelf: 'center',
        backgroundColor: COLORS.white,
    },
    mainBox:{
        width:SIZES.width*.9,
        alignSelf:"center",
        // backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:SIZES.width*.03,
        marginBottom:SIZES.height*.01,
        elevation:2,
        borderRadius:10,
        marginTop:SIZES.height*.02,
        backgroundColor:COLORS.white,
        borderLeftColor:"rgb(145, 246, 238)",
        borderLeftWidth:4
    },
    get:{
        color:COLORS.gray60,
        fontSize:SIZES.width*.035,
        ...FONTS.sixHundred
    },
    text:{
        color:COLORS.gray50,
        fontSize:SIZES.width*.033
    },
    dtext:{
        color:"rgb(145, 246, 238)",
        fontSize:SIZES.width*.038,
        ...FONTS.sevenHundred

    },
    green:{
        color:"rgb(8, 192, 60)",
        fontSize:SIZES.width*.045,
        ...FONTS.sixHundred
    }
})

export default styles;