import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SIZES } from '../../../constants'

const HowToUseApp = ({Imagesource}) => {
  return (
    <View style={styles.imgview}>
    <Image source={Imagesource} resizeMode='contain' style={styles.useImg} />
    </View>
  )
}

const styles = StyleSheet.create({
    imgview:{
        width:SIZES.width*1,
        alignItems:"center",
        justifyContent:"center"
    },
    useImg:{
        width:SIZES.width*.9,
     height:SIZES.height*.3
    },
})

export default HowToUseApp