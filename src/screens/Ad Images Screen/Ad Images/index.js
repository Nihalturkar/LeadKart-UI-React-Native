import { View, Text, StatusBar,ScrollView, Image, TouchableOpacity ,FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import { COLORS, data } from '../../../constants'

const AdImages = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={COLORS.primary} barStyle='dark-content' />
    <ScrollView style={styles.innerContainer}>

      {/* Ai images */}
    <View style={styles.headingView}>
      <Text style={styles.headingText}>AI Created Images</Text>
      <TouchableOpacity>
      <Text style={styles.seemore}>See more</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.stext}>For Your Business</Text>
    <View style={styles.imgView}>
    <FlatList
            data={data.aiImages}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
             <TouchableOpacity  activeOpacity={.6}  >
              <Image source={item.image} style={styles.image} />
             </TouchableOpacity>
              )
            }}
          />
    </View>
    {/* Business images  */}

    <View style={styles.headingView}>
      <Text style={styles.headingText}>Business Images</Text>
      <TouchableOpacity>
      <Text style={styles.seemore}>See more</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.stext}>For Your Business</Text>
    <View style={styles.imgView}>
    <FlatList
            data={data.businessImages}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity  activeOpacity={.6}>
                <Image source={item.image} style={styles.image} />
               </TouchableOpacity>
              )
            }}
          />
    </View>
    
    {/* Ayushman Bharat images */}
    
    <View style={styles.headingView}>
      <Text style={styles.headingText}>Ayushman Bharat Diwas</Text>
      <TouchableOpacity>
      <Text style={styles.seemore}>See more</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.stext}>For Your Business</Text>
    <View style={styles.imgView}>
    <FlatList
            data={data.PMImages}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity activeOpacity={.6}>
                <Image source={item.image} style={styles.image} />
               </TouchableOpacity>
              )
            }}
          />
    </View>
      </ScrollView>
      </SafeAreaView>
  )
}

export default AdImages