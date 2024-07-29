import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../../../constants'

const AIData = ({imageSource,title}) => {
  return (
    <View style = {styles.aicard}>
        <Image source={imageSource} resizeMode='contain' style={styles.img}/>
        <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
 aicard:{
    width:SIZES.width*.45,
    height:SIZES.height*.04,
    marginTop:SIZES.height*.02,
    flexDirection:'row',
    marginRight:SIZES.width*.04,
    alignItems:'center',
    gap:SIZES.width*.02
 },
 img:{
    width:SIZES.width*.07,
    height:SIZES.height*.03, 
 },
 text:{
    fontSize:SIZES.width*.04,
    color:COLORS.black,
    ...FONTS.fiveHundred
 }
})

export default AIData