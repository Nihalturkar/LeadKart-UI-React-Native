import { View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, Image } from 'react-native'
import React from 'react'
import { COLORS, data, images } from '../../../constants'
import styles from './style'
import PickerInput from '../../../components/Picker Component'
import AntDesign from "react-native-vector-icons/AntDesign"
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import ButtonCustom from '../../../components/mainButton/button'
const AdditionalDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <ScrollView style={styles.innerContainer}>
      <Text style={[styles.headingText,{color:COLORS.gray60}]}>What’s your business</Text>
      <Text style={styles.Text}>Let’s us know which of the following describe the business</Text>
        <PickerInput label="Business name" placeholder="Enter your business name"/>
        <Text style={styles.headingText}>Select business category</Text>
         <View style={styles.inputView}>
         <AntDesign name="search1" style={styles.search}/>
         <TextInput placeholder='Search business category'
         placeholderTextColor={COLORS.black} style={styles.input}/>
         </View>

      <FlatList
      data={data.AdditionalBusinessDetails}
      keyExtractor={(key)=>key.id}
      numColumns={3}
      renderItem={({item})=>{
        return(
            <TouchableOpacity>
            <View style={styles.card}>
                 <Image source={item.img} resizeMode='contain' style={styles.img}/>
                 <Text style={styles.cardText}>
                 {item.name}
                 </Text>
              </View>
            </TouchableOpacity>
        )
      }}
      />
        <ButtonCustom children="Next" btnStyle={styles.btn} onPress={() => navigation.navigate("AdditionalDetails2")} />

        </ScrollView>
        </SafeAreaView>
  )
}
export default AdditionalDetails;