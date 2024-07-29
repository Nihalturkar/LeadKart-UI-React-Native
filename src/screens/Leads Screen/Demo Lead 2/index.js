import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, data, images } from '../../../constants'
import styles from './style'
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"


const scrolldata = [
    { id: 1, name: "Interested" },
    { id: 2, name: "Not Connection" },
    { id: 3, name: "Done" },
    { id: 4, name: "In progress" },
    { id: 5, name: "Visited" },
    { id: 6, name: "Not Answer" },
];
const DemoLead2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle='dark-content' />
            <ScrollView style={styles.innerContainer}>

                <View style={styles.fview}>
                    <View>
                        <Text style={styles.main}>Demo Lead 2</Text>
                        <Text style={styles.smain}>+918799632754</Text>
                        <Text style={styles.smain}>Intrested</Text>
                        <View style={{ flexDirection: 'row', gap: SIZES.width * .03 }}>
                            <TouchableOpacity activeOpacity={.6}><Feather name="phone" style={styles.icon} /></TouchableOpacity>
                           <TouchableOpacity activeOpacity={.6}>
                           <Feather name="message-circle" style={styles.icon} />
                           </TouchableOpacity>
                           <TouchableOpacity>
                           <FontAwesome name="whatsapp" style={styles.icon} />
                           </TouchableOpacity>
                        </View>
                    </View>
                    <Image source={images.seedetail} style={styles.see} resizeMode='contain' />
                </View>
                <Text style={styles.headingText}>Choose Digital Ads package</Text>

                <View style={styles.scroll}>
                    <FlatList
                        data={scrolldata}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={3}
                        renderItem={({ item,index }) => (
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

                <View style={styles.headingView}>
                    <Text style={styles.headingText1}>AI Created Images</Text>
                    <TouchableOpacity>
                        <Text style={styles.seemore}>Set Following</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.headingView2}>
                    <View style={styles.sheadingView}>
                        <Text style={styles.headingText1}>Notes</Text>
                        <TouchableOpacity>
                            <Text style={styles.seemore}>Add notes</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.Text1}>Talk to him and he is instrested in our services</Text>
                </View>

                <Text style={styles.headingText}>Timeline</Text>
                <Text style={styles.headingText3}>Recent Activities</Text>
               <View style={{marginBottom:SIZES.height*.04}}>
               {data.RecentActivities.map((item,index)=>{
                    return(
                        <View>
                        <View style={styles.line}></View>
                        <Text style={styles.headingText1}>
                        {item.date}
                        </Text>
                        <Text style={styles.Text2}>
                           {item.text}
                        </Text>
                       </View>
                    )
                 })}
               </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default DemoLead2