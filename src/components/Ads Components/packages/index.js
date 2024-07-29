import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonCustom from '../../mainButton/button';


const Package = ({
  duration,
  title,
  recommandation,
  lead,
  reach,
  platform,
  icon,
  icon1,
}) => {
  return (

    <View style={styles.planContainer}>
      {recommandation && (
        <Text style={styles.recommand}>Recommendation</Text>
      )}
      <View style={styles.fview}>
        <Text style={styles.title}>{title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.duration}>Duration : {duration}</Text>
        </View>
      </View>

      <View style={styles.sview}>
        <Text style={styles.htext}>Lead</Text>
        <Text style={styles.htext}>Reach</Text>
        <Text style={styles.htext}>Platform</Text>
      </View>
      <View style={styles.ssview}>
        <Text style={styles.htext}>{lead}</Text>
        <Text style={styles.htext}>{reach}</Text>
        <View style={styles.social}>
          <TouchableOpacity>
          <Image source={icon} style={styles.socialicon} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={icon1} style={styles.socialicon2} />
          </TouchableOpacity>
        </View>
      </View>
      <ButtonCustom children="Choose Package" btnStyle={styles.btn} btntextStyle={{color:COLORS.primary}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  planContainer: {
    width: SIZES.width * .9,
    alignSelf: 'center',
    elevation: 2,
    backgroundColor: COLORS.white,
    marginBottom: SIZES.height * 0.01,
    marginTop: SIZES.height * 0.02,
    borderRadius: 8,
    paddingHorizontal: SIZES.width * .04,
    padding:SIZES.height*.02
  },
  recommand:{
   backgroundColor:"rgb(199, 255, 222)",
   color:COLORS.black,
   position:'absolute',
   width:SIZES.width*.3,
   padding:SIZES.width*.008,
   borderBottomRightRadius:20
  },
  title:{
   color:COLORS.black,
   fontSize:SIZES.width*.04,
   ...FONTS.sixHundred,
   marginTop: SIZES.height * 0.01,
  },
  fview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  duration: {
    color: COLORS.gray40,
    ...FONTS.fourHundred,
    marginRight: SIZES.width * .02
  },
  rupee: {
    fontSize: SIZES.width * .04,
    color: COLORS.black,
    ...FONTS.sixHundred
  },
  radio: {
    width: SIZES.width * .05,
    height: SIZES.height * .025,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 50,
    alignItems:'center',
    justifyContent:"center"
  },
  sview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:SIZES.height*.005,
  },
  ssview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:SIZES.height*.005,
    width:SIZES.width*.92
  },
  htext: {
    fontSize: SIZES.width * .038,
    color: COLORS.gray70,
    ...FONTS.fiveHundred
  },
  social:{
    flexDirection:'row',
    gap:SIZES.width*.03,
    marginTop:SIZES.width*.01,
    alignItems:'center',
    width:SIZES.width*.25,

},
   socialicon:{
    width:SIZES.width*.05,
    height:SIZES.height*.023,
   },
   socialicon2:{
    width:SIZES.width*.02,
    height:SIZES.height*.02,
    // backgroundColor:"red"
   },
  btn:{
    width:SIZES.width*.82,
    height:SIZES.height*.055,
    backgroundColor:COLORS.transparent,
    borderWidth:1,
    borderColor:COLORS.primary,
    elevation:0,
    marginTop:SIZES.height*.02

  }


})

export default Package