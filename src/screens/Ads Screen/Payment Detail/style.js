const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems:'center'
    },
    innerContainer: {
        width: SIZES.width * .93,
        alignSelf: 'center',
        backgroundColor: COLORS.white,
    },
    mainCostView:{
     width:SIZES.width*.92,
     marginTop:SIZES.height*.02,
     borderColor:COLORS.gray30,
     borderWidth:.5,
     padding:SIZES.width*.02,
     alignItems:'center',
     borderRadius:10
    },
    costView:{
        flexDirection:'row',
        width:SIZES.width*.8,
        justifyContent:'space-between',
        alignItems:"center",
        marginBottom:SIZES.height*.01
    },
    adcost:{
        color:COLORS.black,
        fontSize:SIZES.width*.036
    },
    adcost2:{
        color:COLORS.black,
        fontSize:SIZES.width*.036,
        ...FONTS.sixHundred
    },
    headingText: {
        fontSize: SIZES.width * .042,
        color: COLORS.black,
        ...FONTS.fiveHundred,
        marginTop: SIZES.height * .02,
    },
    paymentView:{
      width:SIZES.width*.92,
      alignSelf:'center',
      elevation:2,
      backgroundColor:COLORS.white,
      marginBottom:SIZES.height*.01,
      borderRadius:5,
      padding:SIZES.width*.04,
      marginTop: SIZES.height * .02,
    },
    paymentAppView:{
        flexDirection:'row',
        gap:SIZES.width*.05,
        alignItems:'center',
        marginTop: SIZES.height * .01,
        marginLeft:SIZES.width*.02,   
    },
    radio: {
        width: SIZES.width * .05,
        height: SIZES.height * .025,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 50,
        alignItems:'center',
        justifyContent:"center",
      },
      img:{
        width:SIZES.width*.1,
        height:SIZES.height*.05
      },
      ptext:{
        color:COLORS.black,
        fontSize:SIZES.width*.038
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