import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import ImagePicker from 'react-native-image-crop-picker';

import { COLORS, SIZES, data } from '../../../constants'
import Feather from "react-native-vector-icons/Feather"




const SelectImage = ({ navigation }) => {
  const [image, setImage] = useState(null);


  const handleImagePick = () => {
    ImagePicker.openPicker({
      width: SIZES.width*1,
      height: SIZES.height*.5,
      cropping: true,
    }).then((image) => {
      setImage(image);
      navigation.navigate('ImageCreate', { image: image }); // Pass the image as a parameter
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle='dark-content' />
      <ScrollView style={styles.innerContainer}>
        {/* Ai images */}
        <View style={styles.headingView}>
          <Text style={styles.headingText}>AI Created Images</Text>

        </View>
        <View style={styles.imgView}>
          <FlatList
            data={data.aiImages}
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
        {/* Business images  */}

        <View style={styles.headingView}>
          <Text style={styles.headingText}>Added Image</Text>

        </View>
        <View style={styles.imgView}>
          <FlatList
            data={data.businessImages}
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


        <View style={styles.loginwith}>
          <View style={styles.line}></View>
          <View><Text style={styles.with}>OR</Text></View>
          <View style={styles.line}></View>
        </View>
        <TouchableOpacity onPress={handleImagePick} style={styles.imagepic}>
                    <Feather name="upload-cloud" style={styles.upload} />
                    <Text style={styles.pic}>Upload your own Image</Text>
                </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SelectImage