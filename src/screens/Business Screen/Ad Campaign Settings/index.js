import { View, Text, SafeAreaView, ScrollView, StatusBar, Image, TextInput } from 'react-native'
import React, { useCallback, useState } from 'react'
import { COLORS, SIZES, images } from '../../../constants'
import styles from './style'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ButtonCustom from '../../../components/mainButton/button'
import { Slider } from '@miblanchard/react-native-slider';

const AdCampaign = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState("male")
  const [minValue, setMinValue] = useState(18);
  const [maxValue, setMaxValue] = useState(66);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.blue} barStyle='light-content' />
      <ScrollView style={styles.innerContainer}>

        <View style={styles.boxContainer}>
          <View style={styles.innerbox}>
            <Text style={styles.maintxt}>Target our area and audience</Text>
            <Text style={styles.boxtxt}># Place the icon in the top right corner# Place the icon in the top right corner# </Text>
          </View>
          <Image source={images.speaker} resizeMode='contain' style={styles.speaker} />
        </View>
        <Text style={styles.headingText}>Select Gender</Text>
        <View style={styles.radioView}>
          <TouchableOpacity style={styles.radiotab} onPress={() => setSelectedGender('male')} activeOpacity={.6}>
            <View style={styles.radio}>
              <View style={{
                width: SIZES.width * 0.025,
                height: SIZES.height * 0.012,
                backgroundColor: selectedGender === 'male' ? COLORS.blue : null,
                borderRadius: 50
              }}></View>
            </View>
            <Text style={styles.boxtxt}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radiotab} onPress={() => setSelectedGender('female')} activeOpacity={.6}>
            <View style={styles.radio}>
              <View style={{
              width: SIZES.width * 0.025,
              height: SIZES.height * 0.012,
                backgroundColor: selectedGender === 'female' ? COLORS.blue : null,
                borderRadius: 50
              }}></View>
            </View>
            <Text style={styles.boxtxt}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radiotab} onPress={() => setSelectedGender('other')} activeOpacity={.6}>
            <View style={styles.radio}>
              <View style={{
                 width: SIZES.width * 0.025,
                 height: SIZES.height * 0.012,
                backgroundColor: selectedGender === 'other' ? COLORS.blue : null,
                borderRadius: 50
              }}></View>
            </View>
            <Text style={styles.boxtxt}>Other</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headingText}>Target areas</Text>
        <Text style={styles.boxtxt}>Your ad will be shown in this area. It could be list of local area/ city / state or pan india</Text>
        <Image source={images.location} resizeMode='contain' style={styles.img} />

        <View style={[styles.boxContainer, { backgroundColor: COLORS.gray20, padding: SIZES.width * .02 }]}>
          <View style={styles.innerbox}>
            <Text style={[styles.boxtxt, { width: SIZES.width * .7 }]}>Bhopal Railway station, Railway Colony , Bhopal Madhya Predesh India</Text>
          </View>
          <TouchableOpacity>
          <Entypo name="cross" style={styles.cross}/>
          </TouchableOpacity>
        </View>

        <View style={styles.inputview}>
          <TextInput placeholder='Add Target Area' placeholderTextColor={COLORS.gray30} style={{ color: COLORS.black,width:SIZES.width*.6 }} />
          <TouchableOpacity>
            <Text style={styles.maintxt}>Add</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.headingText}>Targeting Suggestions <Text style={{ color: COLORS.gray30 }}>(optional)</Text></Text>
        <Text style={styles.boxtxt}>You can suggest to which type of audience you want to show this ad</Text>

        <View style={styles.inputview}>
          <Text style={[styles.boxtxt, { fontSize: SIZES.width * .038 }]}>
            Business Man/ HNI/ Parent / Food lover/ Travels/ IT Professionals/ Social women workers
          </Text>
        </View>
        <TouchableOpacity style={styles.setting} activeOpacity={.6}>
          <Fontisto name="player-settings" style={styles.seticon} />
          <Text style={styles.maintxt}>Advance settings</Text>
        </TouchableOpacity>
        <View style={styles.range}>
          <Text style={styles.headingText}>Age Range</Text>
          <Text style={styles.headingText}>{minValue}-{maxValue}</Text>
        </View>
        <View>
      <Slider
        value={[minValue, maxValue]}
        onValueChange={(values) => {
          setMinValue(values[0]);
          setMaxValue(values[1]);
        }}
        minimumValue={18}
        maximumValue={66}
        thumbTintColor="blue"
        minThumbTintColor="blue"
        maxThumbTintColor="blue"
        step={1}
        trackStyle={COLORS.blue}
      />
    </View>
        <Text style={styles.headingText}>Days</Text>

        <ButtonCustom children="Proceed to payment" btnStyle={styles.input} onPress={() => navigation.navigate("PaymentDetail")} />



      </ScrollView>
    </SafeAreaView>
  )
}

export default AdCampaign