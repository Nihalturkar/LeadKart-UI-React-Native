import { View, Text, FlatList, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import Onboard from '../../components/Onboard';
import styles from './style';
import { COLORS, SIZES, data } from '../../constants';

const Onboarding = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
      <StatusBar backgroundColor={COLORS.transparent} translucent={true} barStyle='dark-content' />
        <View>
          {data.Onboarding && data.Onboarding.length > 0 && (
            <FlatList
            ref={ref}
              renderItem={({ item }) => (
                <Onboard
                  currentIndex={currentIndex}
                  ImageSource={item.img}
                  title={item.title}
                  desc={item.description}
                />
              )}
              data={data.Onboarding}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              onMomentumScrollEnd={(event) => {
                const newIndex = Math.floor(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
                setCurrentIndex(newIndex);
              }}
            />
          )}
        </View>
        <View style={styles.indicatorContainer}>
          {data.Onboarding?.map((item, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index ? styles.activeIndicator : null,
              ]}
            />
          ))}
        </View>

        <View style={styles.Nextconatiner}>
        <TouchableOpacity  activeOpacity={.6}>
        <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>{
           if(currentIndex == data?.Onboarding?.length -1){
              navigation.navigate("Login")
            }else{
              const nextSlideIndex = currentIndex + 1;
              if (nextSlideIndex != data.Onboarding.length) {
                const offset = nextSlideIndex * SIZES.width;
                ref?.current?.scrollToOffset({ offset });
                setCurrentIndex(nextSlideIndex);
              }
            }
         }} activeOpacity={.6}>
            <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>
    </View>
        
        {/* <View style={styles.skipView}>
          <Skip  onPressContinue={()=> {
            if(currentIndex == data?.Onboarding?.length -1){
              navigation.navigate("Login")
            }else{
              const nextSlideIndex = currentIndex + 1;
              if (nextSlideIndex != data.Onboarding.length) {
                const offset = nextSlideIndex * SIZES.width;
                ref?.current?.scrollToOffset({ offset });
                setCurrentIndex(nextSlideIndex);
              }
            }
            // const newIndex = Math.floor(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width)
            
          }}/>
        </View> */}
      </SafeAreaView>
    </View>
  );
};

export default Onboarding;