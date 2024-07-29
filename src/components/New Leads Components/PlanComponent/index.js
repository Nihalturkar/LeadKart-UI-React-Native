import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Plan = ({
  duration,
  price,
  recommandation,
  showRadio,
  lead,
  reach,
  platform,
  aiImages,
  icon,
  icon1,
}) => {
  return (

    <View style={styles.planContainer}>
      {recommandation && (
        <Text style={styles.recommand}>Recommendation</Text>
      )}
      <View style={styles.fview}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.duration}>Duration : {duration}</Text>
          <Text style={styles.rupee}>{price}</Text>
        </View>
        
          <View style={styles.radio}>
          {showRadio && (
            <View style={{ width: SIZES.width * 0.03, height: SIZES.height * 0.015, backgroundColor: COLORS.primary, borderRadius: 50 }}></View>
          )}
          </View>
      </View>

      <View style={styles.sview}>
        <Text style={styles.htext}>Lead</Text>
        <Text style={styles.htext}>Reach</Text>
        <Text style={styles.htext}>Platform</Text>
        <Text style={styles.htext}>AI Images</Text>
      </View>
      <View style={styles.sview}>
        <Text style={styles.htext}>{lead}</Text>
        <Text style={styles.htext}> > {reach}</Text>
        <View style={styles.social}>
          <TouchableOpacity activeOpacity={.6}><Image source={icon} style={styles.socialicon} /></TouchableOpacity>
          <TouchableOpacity activeOpacity={.6}> 
          <Image source={icon1} style={styles.socialicon2} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.htext, { textAlign: 'left', width: SIZES.width * 0.12 }]}>{aiImages}</Text>
      </View>
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
    padding:SIZES.height*.025
  },
  recommand:{
   backgroundColor:"rgb(199, 255, 222)",
   color:COLORS.black,
   position:'absolute',
   width:SIZES.width*.3,
   padding:SIZES.width*.008,
   borderBottomRightRadius:20
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
    marginTop:SIZES.height*.01
  },
  htext: {
    fontSize: SIZES.width * .04,
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
   },



})

export default Plan