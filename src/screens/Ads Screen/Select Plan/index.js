import { View, Text, SafeAreaView, StatusBar, ScrollView, FlatList, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, data } from '../../../constants'
import styles from './style'
import Plan from '../../../components/New Leads Components/PlanComponent'
import ButtonCustom from '../../../components/mainButton/button'

const SelectPlan = ({navigation}) => {
  const { width } = useWindowDimensions(); // To get screen width
  const [selectedPlan, setSelectedPlan] = useState(0); // Initialize selectedPlan state with 0 (first plan)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle='dark-content' />
      <ScrollView style={styles.innerContainer}>
        <Text style={styles.headingText}>Select a Plan</Text>

        <View>
          <FlatList
            data={data.ADplanData}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity activeOpacity={.9} onPress={() => setSelectedPlan(index)} // Update selectedPlan state on press
                >
                  <Plan
                    duration={item.duration}
                    price={item.price}
                    recommandation={index === 0}
                    showRadio={index === selectedPlan} // show radio based on selectedPlan state
                    lead={item.lead}
                    reach={item.reach}
                    platform={item.platform}
                    aiImages={item.aiImages}
                    icon={item.icon}
                    icon1={item.icon1}
                    width={width} // Pass screen width to Plan component
                  />
                </TouchableOpacity>
              )
            }}
          />

        </View>
        <ButtonCustom children="Proceed to Payment" btnStyle={styles.btn} onPress={()=>navigation.navigate("PaymentDetail")}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SelectPlan