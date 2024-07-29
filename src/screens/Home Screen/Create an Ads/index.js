import { View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, Image } from 'react-native'
import React from 'react'
import { COLORS, data, icons } from '../../../constants'
import styles from './style'
import PickerInput from '../../../components/Picker Component'
import AntDesign from "react-native-vector-icons/AntDesign"
import ButtonCustom from '../../../components/mainButton/button'
const CreateADs = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle='dark-content' />
            <ScrollView style={styles.innerContainer}
            >
                <Text style={styles.headingText}>What's your Business </Text>
                <Text style={styles.text}>
                    Let us know which of the following describe the  business
                </Text>
                <PickerInput label="Business Name" placeholder="Enter your business name" placeholderstyle={styles.place} />
                <PickerInput label="Mobile no." placeholder="Please enter mobile no." maxLength={10} keyboardType="numeric"  placeholderstyle={styles.place} />

                <Text style={styles.headingText}>Select business category</Text>
                <View style={styles.searchcontainer}>
                    <TextInput style={styles.placeholdera} placeholder='Search business category' placeholderTextColor={COLORS.gray50} />
                    <AntDesign name="search1" style={styles.icon} />
                </View>

                {data.businessCategory.map((item, index) => {
                    return(
                           <View  style={styles.bcategory}>
                           <Image source={item.icon} style={styles.icon2} />
                           <Text style={styles.txt}>{item.name}</Text>
                       </View>
                    )
                })}

        <ButtonCustom children="Next" btnStyle={styles.btn} onPress={()=>navigation.navigate("FollowUp")}/>

            </ScrollView>
        </SafeAreaView>
    )
}

export default CreateADs