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
    boxContainer:{
        backgroundColor:'rgb(199, 224, 254)',
        marginTop:SIZES.height*.02,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:SIZES.width*.04,
        borderRadius:10
    },
    speaker:{
        width:SIZES.width*.2,
        height:SIZES.height*.1
    },
    innerbox:{
        width:SIZES.width*.55,
    },
    maintxt:{
        color:COLORS.blue,
        fontSize:SIZES.width*.038,
        ...FONTS.sixHundred
    },
    boxtxt:{
        color:COLORS.gray30,
        ...FONTS.fiveHundred,
        fontSize:SIZES.width*.035
    },
    headingText:{
        fontSize:SIZES.width*.04,
        color:COLORS.black,
        ...FONTS.sixHundred,
        marginTop:SIZES.height*.02
    },
    radioView:{
        width: SIZES.width * .9,
        marginTop:SIZES.height*.01,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"flex-start"
    },
    radiotab:{
     flexDirection:'row',
     gap:SIZES.width*.03,
     alignItems:'center',
     marginRight:SIZES.width*.05
    },
    radio: {
        width: SIZES.width * .045,
        height: SIZES.height * .022,
        borderColor: COLORS.blue,
        borderWidth: 2,
        borderRadius: 50,
        alignItems:'center',
        justifyContent:"center"
      },
      img:{
        width:SIZES.width*.9,
        height:SIZES.height*.2,
        borderRadius:10,
        marginTop:SIZES.height*.02
      },
      cross:{
        color:COLORS.black,
        fontSize:SIZES.width*.045
      },
      inputview:{
       width:SIZES.width*.9,
       borderWidth:1,
       borderColor:COLORS.gray20,
       borderRadius:10,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:"center",
       paddingHorizontal:SIZES.width*.04,
       marginTop:SIZES.height*.02
      },
      setting:{
        width:SIZES.width*.42,
        marginTop:SIZES.height*.02,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        alignSelf:"flex-end"
      },
      seticon:{
        fontSize:SIZES.width*.06,
        color:COLORS.blue
      },
      range:{
        width:SIZES.width*.9,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      input:{
        marginTop:SIZES.height*.04,
        width:SIZES.width*.9,
        elevation:0,
        backgroundColor:COLORS.blue,
        marginBottom:SIZES.height*.04,

    },
})
export default styles;