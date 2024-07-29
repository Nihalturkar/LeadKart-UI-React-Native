const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems:'center'
    },
    innerContainer: {
        width: SIZES.width *0.93,
        alignSelf: 'center',
        backgroundColor: COLORS.white,
        // marginLeft:SIZES.width*.02,
    },
    headingText: {
        fontSize: SIZES.width * .042,
        color: COLORS.black,
        ...FONTS.fiveHundred,
        marginTop: SIZES.height * .02,
    },
    text:{
        color:COLORS.gray60,
        width:SIZES.width*.8,
        ...FONTS.fiveHundred
    },
    searchcontainer: {
        width: SIZES.width * .88,
        height:SIZES.height*.06,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        borderWidth: 1,
        borderColor: 'rgba(194, 194, 194, 1)',
        borderRadius:10 ,
        paddingHorizontal:SIZES.width*.03,
        backgroundColor: COLORS.white,
        marginTop:SIZES.height*.025,
      },
      placeholdera: {
        ...FONTS.fourHundred,
        fontSize: SIZES.width * 0.040,
        color: COLORS.gray80,
        ...FONTS.fiveHundred,
        marginBottom: -3,
        width: SIZES.width * 0.6,
      },
      place:{
        marginLeft:SIZES.width*.03
      },
      icon:{
        fontSize:SIZES.width*.045,
        color:COLORS.black,
       
      },
      icon2:{
        width:SIZES.width*.065,
        height:SIZES.height*.03
      },
      bcategory:{
        flexDirection:'row',
        alignItems:'center',
        gap:SIZES.width*.04,
        marginTop:SIZES.width*.04,
        marginLeft:SIZES.width*.05,

      },
      txt:{
        fontSize:SIZES.width*.04,
        color:COLORS.gray70,

      },
      btn:{
        width:SIZES.width*.9,
        marginLeft:SIZES.width*.02,
        marginTop:SIZES.height*.04,
        marginBottom:SIZES.height*.01,
        elevation:0

    }
})
export default styles;