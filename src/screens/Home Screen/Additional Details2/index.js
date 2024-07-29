import { View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, data, images } from '../../../constants'
import styles from './style'
import PickerInput from '../../../components/Picker Component'
import AntDesign from "react-native-vector-icons/AntDesign"
import CustomDropdown from '../../../components/Dropdown Component'
const AdditionalDetails2 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
      
      <View style={styles.logoview}>
     
     <TouchableOpacity style={styles.logo}>
          <Text style={styles.text}>Business Logo</Text>
        </TouchableOpacity>
  
        <View>
          <PickerInput placeholder="Your Business Name" inputContainer={styles.input}/>
          <CustomDropdown dropDownStyle={styles.input}/>
        </View>
      </View>

      <PickerInput placeholder="+91 9988076789" label="Business Contact No."/>
      <PickerInput placeholder="Please enter mobile no" label="Add WhatsApp No."/>

      <PickerInput placeholder="Enter your state name" label="State"/>

      <PickerInput placeholder="Enter your City name" label="City"/>
      <CustomDropdown label="Business Name"/>
      <PickerInput placeholder="https://www.Leadkart.com/" label="Website Link"/>
      <PickerInput placeholder="https://www.instagram.com/" label="Instagram Link"/>

      <PickerInput placeholder="https://www.x.com/" label="Twitter Link"/>
      <PickerInput placeholder="https://www.youtube.com/" label="Youtube Link"/>
      <PickerInput placeholder="https://www.facebook.com/" label="Facebook Link"/>
      <PickerInput placeholder="Matwari chowck, Hazaribagh,Jharkhand (825301)" label="Address"/>
      <PickerInput placeholder="property call center, Ads " label="Tagline" inputContainer={{marginBottom:SIZES.height*.04}}/>





        </ScrollView>
        </SafeAreaView>
  )
}
export default AdditionalDetails2;