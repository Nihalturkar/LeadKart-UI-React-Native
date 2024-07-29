import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../../../constants'
import Feather from "react-native-vector-icons/Feather"
import { TouchableOpacity } from 'react-native-gesture-handler'

const AdsRequirement = ({iconsource, text1,text2, insta,fb,google,onPress}) => {
  return (
  <TouchableOpacity activeOpacity={.6} onPress={onPress}>
      <View style={styles.container}>
     <View style={styles.iconContainer}>
      <Image source={iconsource} resizeMode='contain' style={styles.icon}/>
     </View>
     <View style={styles.middleArea}>
        <Text style={styles.text1}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>
        <View style={styles.social}>
           <Image source={insta} style={styles.socialicon}/>
           <Image source={fb} style={styles.socialicon2}/>
           <Image source={google} style={styles.socialicon}/>

        </View>
     </View>
     <Feather name="chevron-right" style={styles.righticon}/>
    </View> 
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    width:SIZES.width*.9,
    paddingTop:SIZES.height*.015,
    paddingBottom:SIZES.height*.015,
    paddingHorizontal:SIZES.width*.02,
    marginTop:SIZES.height*.03,
    backgroundColor:COLORS.white,
    borderRadius:5,
    borderColor:COLORS.gray30,
    borderWidth:.2,
    // elevation:3,
    border:'none',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:SIZES.height*.02,

  },
  iconContainer:{
    width:SIZES.width*.15,
    height:SIZES.height*.07,
    backgroundColor:COLORS.gray10,
    borderRadius:50
  },
  icon:{
    width:SIZES.width*.08,
    height:SIZES.height*.07,
    alignSelf:'center',
  },
  middleArea:{
    gap:SIZES.height*.002,
    width:SIZES.width*.6,
    marginLeft:SIZES.width*.03,
},
  text1:{
   color:COLORS.black,
   ...FONTS.fiveHundred,
   fontSize:SIZES.width*.036
  },
  text2:{
    color:COLORS.gray40,
    ...FONTS.fiveHundred,
    fontSize:SIZES.width*.035
   },
   social:{
    flexDirection:'row',
    gap:SIZES.width*.03,
    marginTop:SIZES.width*.01,
    alignItems:'center'
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
   righticon:{
    fontSize:SIZES.width*.08,
    color:COLORS.black
   }
})
export default AdsRequirement