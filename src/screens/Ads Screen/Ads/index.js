import { View, Text, StatusBar,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import { COLORS, data } from '../../../constants'
import Card from '../../../components/Ads Components/Card'
import { FlatList } from 'react-native-gesture-handler'
import Package from '../../../components/Ads Components/packages'

const Ads = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={COLORS.primary} barStyle='dark-content' />
    <ScrollView style={styles.innerContainer}>

      <Text style={styles.heading}>How ads report will look</Text>
      <Text style={styles.stext}>You can see your ad performance in real time</Text>

    <View style={styles.cardComponent}>
      <FlatList
      data={data.AdCardData}
      renderItem={({item})=>{
        return(
        <Card
        date={item.date}
        title={item.title}
        view={item.view}
        spent={item.spent}
        lead={item.lead}
        click={item.Clicks}
        onPress={()=>navigation.navigate(item.press)}
        onPress1={()=>navigation.navigate(item.press1)}
        />
        )
      }}
      
      />
    </View>

    <View style={styles.headingView}>
      <Text style={styles.headingText}>Select a Package</Text>
      <TouchableOpacity>
      <Text style={styles.seemore}>See more</Text>
      </TouchableOpacity>
    </View>
    <FlatList
            data={data.packageData}
            renderItem={({ item, index }) => {
              return (
                <Package
                  duration={item.duration}
                  date={item.date}
                  title={item.title}
                  recommandation={index === 0} // show recommandation only for the first item
                  showRadio={index === 0} // show radio only for the first item
                  lead={item.lead}
                  reach={item.reach}
                  platform={item.platform}
                  aiImages={item.aiImages}
                  icon={item.icon}
                  icon1={item.icon1}
                />
              )
            }}
          />
      </ScrollView>
      </SafeAreaView>
  )
}

export default Ads