const { StyleSheet } = require("react-native");
const { COLORS, SIZES, FONTS } = require("../../../constants");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    innerContainer: {
        width: SIZES.width * .94,
        alignSelf: 'center',
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * .035
    },
    fcard: {
        width: SIZES.width * .85,
        elevation: 2,
        marginBottom: SIZES.height * .01,
        backgroundColor: COLORS.white,
        marginTop: SIZES.height * .02,
        flexDirection: 'row',
        padding: SIZES.width * .03,
        gap: SIZES.width * .05,
        borderRadius: 10
    },
    textureimg: {
        width: SIZES.width * .25,
        height: SIZES.height * .12,
        borderRadius: 5
    },
    title: {
        fontSize: SIZES.width * .04,
        color: COLORS.primary,
        ...FONTS.sixHundred
    },
    work: {
        fontSize: SIZES.width * .03,
        color: COLORS.primary,
        ...FONTS.sixHundred,
        borderWidth: 1,
        borderColor: COLORS.bottomblue,
        width: SIZES.width * .2,
        textAlign: 'center',
        marginTop: SIZES.height * .005,
        borderRadius: 20,
        padding: SIZES.width * .006,
        backgroundColor: "rgb(200, 220, 240)"
    },
    date: {
        color: COLORS.gray30,
        marginTop: SIZES.height * .005,
        fontSize: SIZES.width * .035,
        ...FONTS.fiveHundred,

    },
    see: {
        color: COLORS.bottomblue,
        position: "absolute",
        top: SIZES.height * .1,
        right: SIZES.width * -.12,
        ...FONTS.sixHundred,
        fontSize: SIZES.width * .035,
    },
    heading: {
        color: COLORS.black,
        marginTop: SIZES.height * .02,
        fontSize: SIZES.width * .04,
        ...FONTS.sixHundred
    },
    subheading: {
        color: COLORS.gray60,
        marginTop: SIZES.height * .01,
        fontSize: SIZES.width * .034,
        ...FONTS.fiveHundred
    },
    blueheading: {
        color: COLORS.bottomblue,
        marginTop: SIZES.height * .02,
        fontSize: SIZES.width * .04,
        ...FONTS.sixHundred,
        textAlign: 'center',
    },
    reportView: {
        width: SIZES.width * .85,
        backgroundColor: COLORS.white,
        borderColor: COLORS.gray20,
        borderWidth: .5,
        borderRadius: 10,
        marginTop: SIZES.height * .02,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: SIZES.width * .03,
    },
    key: {
        color: COLORS.gray30,
        fontSize: SIZES.width * .036,
        ...FONTS.sixHundred,

    },
    socialimg: {
        width: SIZES.width * .16,
        height: SIZES.height * .027,
    },
    socialbtn: {
        width: SIZES.width * .85,
        marginTop: SIZES.height * .02,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btn: {
        width: SIZES.width * .4,
        borderWidth: 1,
        borderColor: COLORS.bottomblue,
        padding: SIZES.width * .02,
        borderRadius: 20
    },
    btnname: {
        color: COLORS.black,
        fontSize: SIZES.width * .038,
        textAlign: 'center',
        ...FONTS.fiveHundred
    },
    headingView: {
        marginTop: SIZES.height * .025,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: SIZES.width * .025,
    },
    headingText: {
        fontSize: SIZES.width * .04,
        color: COLORS.black,
        ...FONTS.sixHundred
    },
    View: {
        color: COLORS.bottomblue,
        fontSize: SIZES.width * .038,
        ...FONTS.sixHundred
    },
    Sectionview: {
        alignItems: 'center',
        padding: SIZES.width * .04,
        borderBottomWidth: 1.5,
        borderBottomColor: COLORS.gray20,
         paddingBottom: SIZES.height *.03,

    },
    mobile: {
        width: SIZES.width * .08,
        height: SIZES.height * .05,
    },
    barlabel: {
        color: COLORS.black,
        fontSize: SIZES.width * .02,
        ...FONTS.sixHundred,
        width:SIZES.width*.1
    },
    toplabel: {
        color:COLORS.black,
        fontSize: SIZES.width * .02,
        ...FONTS.sixHundred
    },
    agegroup:{
        color:COLORS.gray40,
        textAlign:'center',
        fontSize: SIZES.width * .025,
    },

    barValueText:{
        color:COLORS.black,
        fontSize: SIZES.width * .01,
        ...FONTS.sixHundred
    },
    yaxis:{
        color:COLORS.black,
        fontSize: SIZES.width * .025,
    },
    postView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:SIZES.width*.02,
        width:SIZES.width*.85,
        marginTop:SIZES.height*.01
    },
    posticons:{
        width: SIZES.width * .035,
        height: SIZES.height * .018,
    },
    gen:{
        color:COLORS.gray60,
        fontSize: SIZES.width * .025,
        ...FONTS.fiveHundred,
        width:SIZES.width*.17,

    },
    pop:{
        color:COLORS.black,
        fontSize:SIZES.width*.03,
        ...FONTS.sixHundred,
        width:SIZES.width*.24,

    },
    per:{
        color:COLORS.primary,
        fontSize: SIZES.width * .025,
        width:SIZES.width*.24,

    },
    section1:{
        position:'absolute',
        left:SIZES.width*.05,
        top:SIZES.height*.03
    },
    section2:{
        position:'absolute',
        right:SIZES.width*-.1,
        top:SIZES.height*.12
    },
    section3:{
        position:'absolute',
        left:SIZES.width*.16,
        top:SIZES.height*.24
    },
    stateTable:{
        width:SIZES.width*.9,
        backgroundColor:'rgb(10, 102, 201)',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    column:{
        width:SIZES.width*.9,
       backgroundColor:'rgb(10, 102, 201)',
       alignItems:'center',
       flexDirection:'row',
       justifyContent:"space-between",
    },
    row:{
        color:COLORS.black,
        ...FONTS.sixHundred,
        width:SIZES.width*.23,
        textAlign:'center',
       padding:SIZES.width*.02,
       fontSize:SIZES.width*.028
    },
    tableView:{
        marginBottom:SIZES.height*.02,
        marginTop:SIZES.height*.01,
        borderBottomWidth: 1.5,
        borderBottomColor: COLORS.gray20,
    }
})
export default styles;