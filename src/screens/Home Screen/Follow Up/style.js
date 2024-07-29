const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center'
    },
    innerContainer: {
        width: SIZES.width * .94,
        alignSelf: 'center',
        backgroundColor: COLORS.white,
        marginLeft: SIZES.width * .02,
    },
    selectbox: {
        marginTop: SIZES.height * .01,
    },
    clock: {
        width: SIZES.width * .9,
        height: SIZES.height * .25,
        alignItems: "center",
        marginTop: SIZES.height * .04
    },
    righticon: {
        width: SIZES.width * .06,
        height: SIZES.height * .03,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.width * .03,
    },
    place: {
        width: SIZES.width * .75
    },
    btn:{
        width:SIZES.width*.85,
        marginLeft:SIZES.width*.02,
        marginTop:SIZES.height*.04,
        marginBottom:SIZES.height*.01,
        elevation:0

    },
    
    //  bottomview styling 
    bottomView: {
        padding: SIZES.width * .04,
        // zIndex:1
    },
    left:{
        color:COLORS.black,
        fontSize:SIZES.width*.045
    },
    heading:{
        fontSize:SIZES.width*.045,
        color:COLORS.gray90,
        ...FONTS.fiveHundred
    },
    sdate:{
        color:COLORS.black,
        marginLeft:SIZES.width*.1
    },
    dateView:{
        width:SIZES.width*.4,
        marginTop:SIZES.height*.03,
        alignItems:'center',
        justifyContent:'center',
        padding:SIZES.width*.04,
        borderRadius:20,
        borderColor:COLORS.primary,
        borderWidth:2,
        marginRight:SIZES.width*.05,
        // zIndex:99

    },
    date:{
        fontSize:SIZES.width*.04,
        color:COLORS.black
    },
    time:{
        fontSize:SIZES.width*.04,
        color:COLORS.black
    }
})
export default styles;