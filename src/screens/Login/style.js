import { StyleSheet } from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center"
    },
    imgView: {
        marginTop: SIZES.height * .08
    },
    img: {
        width: SIZES.width * 1,
        height: SIZES.height * .38
    },
    signView: {
        width: SIZES.width * 1,
        backgroundColor: COLORS.white,
        elevation: 10,
        alignItems:'center',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
    },
    text: {
        fontSize: SIZES.width * .055,
        color: COLORS.black,
        ...FONTS.sixHundred,
        marginTop: SIZES.height * .04
    },
    smallText: {
        fontSize: SIZES.width * .036,
        color: COLORS.gray50,
        width:SIZES.width*.9,
        textAlign:'center',
        ...FONTS.fiveHundred,
        marginTop: SIZES.height * .02
    },
    input:{
        marginTop:SIZES.height*.04,
        shadowColor:'none'
    },
    loginwith:{
        flexDirection:"row",
        width:SIZES.width*.85,
        alignItems:'center',
        justifyContent:"space-between",
        marginTop:SIZES.height*.045

    },
    line:{
        width:SIZES.width*.28,
        height:SIZES.height*.001,
        backgroundColor:COLORS.gray30
    },
    with:{
        color:COLORS.gray40,
        fontSize:SIZES.width*.04,
        ...FONTS.fiveHundred
    },
    social:{
        width:SIZES.width*.85,
        flexDirection:'row',
        marginTop:SIZES.height*.03,
        justifyContent:'space-between',
    },
    icon:{
        width:SIZES.width*.35,
        height:SIZES.height*.06,
        borderColor:COLORS.gray20,
        padding:10, 
        borderWidth:.5,
        borderRadius:10,
        backgroundColor:COLORS.white
    },
    icon2:{
       fontSize:SIZES.width*.09,
       height:SIZES.height*.066,
        color:"#13a2fa",
        borderColor:COLORS.gray20,
        paddingHorizontal:SIZES.width*.14,
        padding:10,
        borderWidth:.5,
        borderRadius:10,
        backgroundColor:COLORS.white
    }
})
export default styles;