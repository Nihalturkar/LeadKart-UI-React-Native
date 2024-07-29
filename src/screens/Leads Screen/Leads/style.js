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
    scroll:{
        width:SIZES.width*1,
        height:SIZES.height*.06,
        alignItems:'center',
        flexDirection:'row',
        marginTop:SIZES.height*.02
    },
    text:{
        fontSize:SIZES.width*.038,
        ...FONTS.fiveHundred,
        borderColor:COLORS.primary,
        borderWidth:2,
        borderRadius:20,
        paddingHorizontal:SIZES.width*.06,
        padding:SIZES.width*.015,
        marginRight:SIZES.width*.035,
        color:COLORS.black
    },
    leadcontainer:{
        alignItems:"center"
    }
    
})

export default styles;