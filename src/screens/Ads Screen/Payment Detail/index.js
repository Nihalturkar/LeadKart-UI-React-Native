import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, data, icons, images } from '../../../constants'
import styles from './style'
import ButtonCustom from '../../../components/mainButton/button'

const PaymentDetail = ({navigation}) => {
    const [selectedPaymentMode, setSelectedPaymentMode] = useState(null);
    const [selectedCardPaymentMode, setSelectedCardPaymentMode] = useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle='dark-content' />
            <ScrollView style={styles.innerContainer}>

                <View style={styles.mainCostView}>
                    <View style={styles.costView}>
                        <Text style={styles.adcost}>Total Advertising Cost</Text>
                        <Text style={styles.adcost}>₹5000.0</Text>
                    </View>
                    <View style={styles.costView}>
                        <Text style={styles.adcost2}>Total (Including GST)</Text>
                        <Text style={styles.adcost2}>₹5000.0</Text>
                    </View>
                </View>
                <Text style={styles.headingText}>Pay using UPI</Text>

                <View style={styles.paymentView}>
                    {data.paymentMode.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => setSelectedPaymentMode(index)} // Update selectedPaymentMode state on press
                                activeOpacity={.5} >
                                <View style={styles.paymentAppView}>
                                    <View style={styles.radio}>
                                        {index === selectedPaymentMode && ( // Show radio button if index matches selectedPaymentMode
                                            <View style={{ width: SIZES.width * 0.025, height: SIZES.height * 0.012, backgroundColor: COLORS.primary, borderRadius: 50 }}></View>
                                        )}
                                    </View>
                                    <Image source={item.icon} resizeMode='contain' style={styles.img} />
                                    <Text style={styles.ptext}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>


                <Text style={styles.headingText}>Pay using Other</Text>

                <View style={styles.paymentView}>
                    {data.CardMode.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => setSelectedCardPaymentMode(index)} // Update selectedPaymentMode state on press
                                activeOpacity={.5} >
                                <View style={styles.paymentAppView}>
                                    <View style={styles.radio}>
                                        {index === selectedCardPaymentMode && ( // Show radio button if index matches selectedPaymentMode
                                            <View style={{ width: SIZES.width * 0.02, height: SIZES.height * 0.01, backgroundColor: COLORS.primary, borderRadius: 50 }}></View>
                                        )}
                                    </View>
                                    <Image source={item.icon} resizeMode='contain' style={styles.img} />
                                    <Text style={styles.ptext}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>

        <ButtonCustom children="Proceed to Payment" btnStyle={styles.btn} onPress={()=>navigation.navigate("PaymentDetail")}/>


            </ScrollView>
        </SafeAreaView>

    )
}

export default PaymentDetail