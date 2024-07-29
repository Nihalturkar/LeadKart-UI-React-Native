const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    innerContainer: {
        width: SIZES.width * 1,
        alignSelf: 'center',
        backgroundColor: COLORS.white,
    },
    image: {
        width: SIZES.width * .9,
        alignSelf: 'center',
        height: SIZES.height * .5,
        // marginTop:SIZES.height*.02
    },
    iconView: {
        marginTop: SIZES.height * .02,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: SIZES.width * .05
    },
    icon: {
        fontSize: SIZES.width * .06,
        color: COLORS.black,
        marginLeft: SIZES.width * .04,
    },
    downicon: {
        fontSize: SIZES.width * .04,
        color: COLORS.white,
        marginLeft: SIZES.width * .04,
        backgroundColor: COLORS.primary,
        padding: SIZES.width * .02,
        borderRadius: 5
    },
    scroll: {
        width: SIZES.width * 1,
        height: SIZES.height * .1,
        backgroundColor: "rgb(222, 235, 255)",
        alignItems: 'center',
        flexDirection: 'row',
        gap: SIZES.width * .04,
        marginTop: SIZES.height * .25,
        // position:'absolute',
        // bottom:SIZES.height*.05,
        // top:SIZES.height*.1
    },
    textView: {
        borderColor: COLORS.gray70,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: SIZES.width * .05,
        padding: SIZES.width * .015,
        color: COLORS.gray70,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        gap: SIZES.width * .01,
        marginLeft: SIZES.width * .035
    },
    text: {
        fontSize: SIZES.width * .038,
        ...FONTS.fiveHundred,
        color: COLORS.gray70,
        // marginRight: SIZES.width * .01,
    },


    //  Business Bottom View -------------------------

    bottomView: {
        backgroundColor: 'rgb(222, 235, 255)',
        height: SIZES.height,
        padding:SIZES.height*.01
    },
    close: {
        fontSize: SIZES.width * .045,
        color: COLORS.gray60,
        ...FONTS.sixHundred,
        alignSelf: "flex-start",
        marginLeft: SIZES.width * .02,
        marginTop: SIZES.height * .01
    },
    businessText:{
         color:COLORS.black,
         fontSize:SIZES.width*.04,
         color:COLORS.gray70
    },
    componentstyle: {
        flexDirection: 'row',
        alignItems: "center",
        width: SIZES.width * .32,
        gap: SIZES.width * .03,
        marginLeft: SIZES.width * .02,
        marginTop: SIZES.height * .015
    },
    check: {
        color: COLORS.black,
        fontSize: SIZES.width * .045,
        ...FONTS.sevenHundred,
        color:COLORS.primary
    },

    // --------------------------------------------
    modalView: {
        width: SIZES.width * .8,
        alignSelf: 'center',
        backgroundColor: COLORS.gray10,
        padding: SIZES.width * .04,
        borderRadius: 20
    },
    headingText: {
        color: COLORS.black,
        fontSize: SIZES.width * .05,
        ...FONTS.sixHundred
    },
    input: {
        width: SIZES.width * .7,
        // backgroundColor:'red'
        backgroundColor: COLORS.white
    },
    modalbtn: {
        width: SIZES.width * .28,
        fontSize: SIZES.width * .038,
        ...FONTS.fiveHundred,
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 10,
        // paddingHorizontal:SIZES.width*.05,
        padding: SIZES.width * .02,
        color: COLORS.gray70,
        textAlign: 'center'
    },
    imagepic: {
        width: SIZES.width * .9,
        marginTop: SIZES.height * .08,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: SIZES.width * .02,
        alignSelf: 'center'
    },
    pic: {
        color: COLORS.gray60,
        fontSize: SIZES.width * .035

    },
    upload: {
        color: COLORS.gray60,
        fontSize: SIZES.width * .05
    },

    // Image Modal Styling
    ImageModalView: {
        width: SIZES.width * .8,
        alignSelf: 'center',
        backgroundColor: COLORS.gray10,
        padding: SIZES.height * .02,
        borderRadius: 20
    },
    headingImgText: {
        color: COLORS.black,
        fontSize: SIZES.width * .05,
        ...FONTS.sixHundred
    },
    selectedImg: {
        width: SIZES.width * .25,
        height: SIZES.height * .12,
        // backgroundColor: "red",
        alignSelf: 'center',
        marginTop: SIZES.height * .03,
        borderRadius: 5
    },
    restart: {
        fontSize: SIZES.width * .035,
        color: COLORS.white,
        position: 'absolute',
        top: SIZES.width * -.27,
        padding: SIZES.width * .01,
        left: SIZES.width * .45,
        backgroundColor: COLORS.primary,
        borderRadius: 50
    },
    closeIcon: {
        color: COLORS.white,
        fontSize: SIZES.width * .05,
        textAlign: 'right',
        position: 'absolute',
        right: SIZES.width * -.02,
        top: SIZES.height * .022,
        backgroundColor: COLORS.red,
        borderRadius: 50
    },
    imageContainer: {
        // backgroundColor:"red",
        position: 'absolute',
        width: SIZES.width * .25,
        height: SIZES.height * .12,
        // backgroundColor: "red",
        alignSelf: 'center',
        marginTop: SIZES.height * .03,
        borderRadius: 5
    },
    resizeIcon: {
        color: COLORS.white,
        fontSize: SIZES.width * .04,
        textAlign: 'right',
        position: 'absolute',
        right: SIZES.width * -.02,
        bottom: SIZES.height * -.15,
        backgroundColor: COLORS.red,
        borderRadius: 50
    },
    TextContainer: {
        position: 'absolute',
        borderWidth: .4,
        borderColor: "rgb(163, 145, 252)",
        // padding:SIZES.width*.005,
    },
    stext: {
        color: COLORS.white,
        fontSize: SIZES.width * .08,
        ...FONTS.sixHundred
    },
    closeTextIcon: {
        color: COLORS.white,
        fontSize: SIZES.width * .04,
        textAlign: 'right',
        position: 'absolute',
        right: SIZES.width * -.03,
        top:SIZES.height*-.07,
        backgroundColor: COLORS.red,
        borderRadius: 50
    },
    stylingIcon: {
        width: SIZES.width * .04,
        height: SIZES.height * .022,
    },

    // for frame modal

    paymentAppView: {
        flexDirection: 'row',
        gap: SIZES.width * .05,
        alignItems: 'center',
        marginTop: SIZES.height * .01,
        marginLeft: SIZES.width * .02,
    },
    radio: {
        width: SIZES.width * .05,
        height: SIZES.height * .025,
        borderColor: COLORS.gray20,
        borderWidth: 2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: "center",
    },
    ptext: {
        color: COLORS.black,
        fontSize: SIZES.width * .038,
        textAlign:"center"
    },

    // Sticker View

    stickerModalContainer:{
        width: SIZES.width * .8,
        alignSelf: 'center',
        backgroundColor: COLORS.gray10,
        padding: SIZES.height * .02,
        borderRadius: 20
    },

    main: {
        width:SIZES.width,
        // height:SIZES.height*.15,
        flexDirection:'row',
        alignItems:'center',
        flexGrow:1,
        flexWrap:"wrap",
        justifyContent:'space-between',
        position:'absolute',
        bottom:-SIZES.height*.35,
        backgroundColor:"rgb(222, 235, 255)"
        // marginTop: 10,
    },
    ArrowView:{
      flexDirection:"row",
      alignItems:'center',
      justifyContent:'center',
      width:SIZES.width*.8,
      marginTop:SIZES.height*.04,
      marginLeft:SIZES.width*.04,
      alignSelf:'center'
    },
    Arrowicon:{
        fontSize: SIZES.width * .055,
        color: COLORS.black,
        backgroundColor:"rgb(115, 196, 255)",
        marginLeft:SIZES.width*.1,
        borderRadius:5,
        padding:SIZES.width*.02,
    },
 colorPicker: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10
  },
  colorOption: {
    width: 30,
    height: 30,
    borderRadius: 4,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  formatButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    // padding: 2,
    borderRadius: 5,
  },
  activeFormatButton: {
    backgroundColor: 'rgb(115, 196, 255)', // Light gray
  },
  AdjustView:{
    width: SIZES.width * 1,
    height: SIZES.height * .25,
    backgroundColor: "rgb(222, 235, 255)",
    alignItems: 'flex-start',
    justifyContent:'center',
    flexDirection: 'row',
    position:'absolute',
    top:SIZES.height*.6,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    padding:SIZES.height*.005
  },
  resizingIcon: {
    color: 'blue', // or any color to indicate active resizing
  },
  AdjustBottom:{
    backgroundColor:'red'
  },
  slider:{
    width:SIZES.width*.8,
    marginLeft:SIZES.width*.08
  }
})
export default styles;