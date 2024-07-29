import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS, data } from '../../../constants';
import styles from './style';
import { FlatList } from 'react-native-gesture-handler';
import DemoLead from '../../../components/Leads Components/demo leads';

const scrolldata = [
  { id: 1, name: "All" },
  { id: 2, name: "Pending" },
  { id: 3, name: "In-Progress" },
  { id: 4, name: "Follow" },
  { id: 5, name: "Following" },
  { id: 6, name: "Sent" },
];

const Leads = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle='dark-content' />
      <ScrollView style={styles.innerContainer}>
        <View style={styles.scroll}>
        <FlatList
            data={scrolldata}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => setActiveIndex(index)}>
                <Text 
                style={[
                  styles.text,
                  activeIndex === index ? { backgroundColor: 'rgb(200, 240, 231)',color:COLORS.black } : null,
                ]}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      <TouchableOpacity style={styles.leadcontainer}  onPress={()=>navigation.navigate("DemoLead2")} activeOpacity={.9}>
      {data.leadData && (
          <FlatList
            data={data.leadData}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <DemoLead
                imageSource={item?.img}
                name={item.name}
                phoneNumber={item?.no}
                add={item?.add}
              />
            )}
          />
        )}
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Leads;