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
        fontSize: SIZES.width * .042,
        color: COLORS.black,
        ...FONTS.fiveHundred,
        marginTop: SIZES.height * .02,
    },
    Text:{
        fontSize: SIZES.width * .036,
        color: COLORS.gray60,
        ...FONTS.fiveHundred,
        marginTop: SIZES.height * .01,
    },
    search:{
        fontSize:SIZES.width*.05,
        color:COLORS.black
    },
    input:{
        color:COLORS.black,
        width:SIZES.width*.4
    },
    inputView:{
        width:SIZES.width*.9,
        borderColor:COLORS.gray30,
        borderWidth:.5,
        borderRadius:10,
        flexDirection:"row",
        gap:SIZES.width*.02,
        alignItems:'center',
        paddingHorizontal:SIZES.width*.03,
        marginTop:SIZES.height*.01,
        backgroundColor:COLORS.gray10
    },
    card:{
      borderWidth:1,
      borderColor:COLORS.gray20,
      width:SIZES.width*.27,
      height:SIZES.height*.15,
      padding:SIZES.width*.025,
      borderRadius:10,
      marginTop:SIZES.height*.02,
      marginRight:SIZES.width*.04,
      alignItems:'center',
      justifyContent:'center'
    },
    img:{
        width:SIZES.width*.16,
        height:SIZES.height*.08
    },
    cardText:{
        color:COLORS.black,
        fontSize:SIZES.width*.038,
        textAlign:'center'
    },
    btn: {
        width: SIZES.width * .88,
        marginLeft: SIZES.width * .02,
        marginTop: SIZES.height * .02,
        marginBottom: SIZES.height * .03,
        elevation: 0

    },
})

export default styles;