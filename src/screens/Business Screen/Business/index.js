import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, Images, data, icons, images } from '../../../constants'

import EvilIcons from "react-native-vector-icons/EvilIcons"
import styles from './style'

const Bussiness = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={COLORS.primary} barStyle='dark-content' />
    <View style={styles.innerContainer}>
      <View style={styles.profilecard}>
        <TouchableOpacity><EvilIcons name="pencil" style={styles.pencil}/></TouchableOpacity>
       <Image source={images.dog} resizeMode='contain' style={styles.img} />
       <Text style={styles.name}>Pawan Kumar</Text>
       <Text style={styles.address}><Text style={{color:COLORS.primary}}>Address :</Text> Amar Nagar, shivpuri Bhopal Madhya pradesh</Text>
      </View>

       <View style={styles.businessdets}>
       <FlatList
       data={data.businessData}
       keyExtractor={(key)=>key.id}
       renderItem={({item})=>{
        return(
         <TouchableOpacity activeOpacity={.92} onPress={()=>navigation.navigate(item.onpress)}>
           <View style={styles.section}>
          <Image source={item.icon} style={styles.icon}/>
          <Text style={styles.title}>{item.title}</Text>
        </View>
         </TouchableOpacity>
        )
      }}
      />
       </View>
      </View>
      </SafeAreaView>
  )
}

export default Bussiness