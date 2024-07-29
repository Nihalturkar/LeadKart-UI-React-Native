import { View, Text, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, data, images } from '../../../constants'
import { ScrollView } from 'react-native-gesture-handler'
import AIData from '../../../components/Home Component/HomeAIData'
import HowToUseApp from '../../../components/Home Component/HowToUse'
import AdsRequirement from '../../../components/Home Component/AdComponent'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle='dark-content' />
      <ScrollView style={styles.innerContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}

      >
        <Text style={styles.headingText}>Introducing AI-powered ads with Leadkart</Text>
        <View style={styles.datastyle}>
          <FlatList
            data={data.AIdata}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <AIData
                  imageSource={item.icon}
                  title={item.text}
                />
              );
            }}
          />
        </View>

        {/* use app  */}
        <View style={styles.how}>
          <FlatList
            data={data.HowToUse}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <HowToUseApp
                  Imagesource={item.images}
                />
              )
            }}
            horizontal
            pagingEnabled
          />
        </View>
        <View style={styles.callContainer}>
          <View style={{ gap: SIZES.height * .01 }}>
            <Text style={styles.blueText}>Need help for  Leads?</Text>
            <Text style={styles.calltext}>Call us for support in the lead generation</Text>
            <TouchableOpacity activeOpacity={.6}>
              <Text style={styles.button}>Call Now</Text>
            </TouchableOpacity>
          </View>
          <Image source={images.girl} style={styles.girl} />
        </View>

        <Text style={styles.headingText}>
          Choose your Ad requirement
        </Text>

        <View>
          <FlatList
            data={data.adsData}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <AdsRequirement
                  iconsource={item.icon}
                  text1={item.title}
                  text2={item.title2}
                  insta={item.instaimg}
                  fb={item.fbimg}
                  google={item.google}
                  onPress={() => navigation.navigate(item.press)}
                />
              )
            }}
          />
        </View>

        <TouchableOpacity activeOpacity={.6} onPress={() => navigation.navigate("CreateADs")}>
          <Image source={images.createBanner} style={styles.createBanner} />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home