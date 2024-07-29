import { View, Text, SafeAreaView, StatusBar, ScrollView, Image } from 'react-native'
import React from 'react'
import { COLORS, images } from '../../../constants'
import styles from './style'
import PickerInput from '../../../components/Picker Component'
import CustomDropdown from '../../../components/Dropdown Component'
import ButtonCustom from '../../../components/mainButton/button'

const CreateUser = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
    <ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
         <Image source={images.users} resizeMode='contain' style={styles.img}/>

         <PickerInput label="Name" placeholder="Enter user name"/>
         <PickerInput label="Email-ID" placeholder="Enter email id "/>
         <CustomDropdown label="Role"/>
         <PickerInput label="Password"
          placeholder="Enter 6 digit password "
          secureTextEntry={true}
          maxLength={8}
          />
           <PickerInput label="Confirm Password"
          placeholder="Confirn password"
          secureTextEntry={true}
          maxLength={8}
          />
        <ButtonCustom children="Create" btnStyle={styles.btn} onPress={() => navigation.navigate("AssignLeads")} />
         

        </ScrollView>
        </SafeAreaView>
  )
}

export default CreateUser