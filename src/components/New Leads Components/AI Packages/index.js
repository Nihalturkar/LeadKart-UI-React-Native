import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, images } from '../../../constants'

const AIPackagesComp = ({imagesource,title,desc}) => {
  return (
    <View style = {styles.container}>
        <Image source={imagesource} resizeMode='contain' style={styles.img}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      width:SIZES.width*.5,
      elevation:3.5,
      borderRadius:8,
      backgroundColor:COLORS.white,
      marginTop:SIZES.height*.01,
      marginBottom:SIZES.height*.02,
      // paddingHorizontal:SIZES.width*.025,
      padding:SIZES.width*.03,
        marginBottom:SIZES.height*.02,
        marginRight:SIZES.width*.04,
        marginLeft:SIZES.width*.02

    },
    img:{
      width:SIZES.width*.15,
      height:SIZES.height*.05,
    },
    title:{
      color:COLORS.primary,
      ...FONTS.sixHundred,
      fontSize:SIZES.width*.045
    },
    desc:{
      color:COLORS.gray30,
      fontSize:SIZES.width*.036,
      width:SIZES.width*.51,
    },
    
})
export default AIPackagesComp