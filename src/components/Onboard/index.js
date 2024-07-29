
import { View, Text, StatusBar, Image, FlatList, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './style'
import { COLORS, data, images } from '../../constants'

const Onboard = ({ navigation, title, desc, ImageSource }) => {

  return (
    <View style={styles.mainContainer}>
        <View style={styles.bannerView}>
          <Image source={ImageSource} resizeMode='contain' style={styles.image} />
        </View>
        <Text style={styles.text}>
          {title}
        </Text>
        <Text style={styles.smallText}>
          {desc}
        </Text>
    </View>
  )
}

export default Onboard;




