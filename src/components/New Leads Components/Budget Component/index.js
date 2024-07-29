import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES, icons } from '../../../constants'
import CheckBox from 'react-native-check-box'
import AntDesign from "react-native-vector-icons/AntDesign"

const Budget = ({ icons }) => {
    const [isChecked, setIsChecked] = useState(true)
    const [isMinus, setIsMinus] = useState(true)

    return (
        <View style={styles.container}>
            <CheckBox
                style={{padding: 10, }}
                onClick={() => setIsChecked(!isChecked)}
                isChecked={isChecked}
                checkBoxStyle={[styles.checkBox, { backgroundColor: isChecked? COLORS.primary : COLORS.white, borderColor: isChecked? COLORS.primary : COLORS.gray60 }]}
            />
            <View style={styles.inputview}>
                <View style={styles.iconview}>
                    <Image source={icons} resizeMode='contain' style={styles.icon} />
                    <TextInput style={styles.input} placeholder='2000' placeholderTextColor={COLORS.gray30} keyboardType='numeric' />
                </View>
                <View style={styles.calculate}>
                    <TouchableOpacity onPress={() => setIsMinus(true)} style={[styles.calIcon, { backgroundColor:!isMinus? COLORS.lightblue2 : COLORS.white }]}>
                        <AntDesign name="minus" style={[styles.Icon, { color:!isMinus? "white" : "black", backgroundColor:!isMinus? "blue" : COLORS.white }]} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsMinus(false)} style={[styles.calIcon, { backgroundColor: isMinus? COLORS.lightblue2 : COLORS.white }]}>
                        <AntDesign name="plus" style={[styles.Icon, { color: isMinus? "white" : "black", backgroundColor: isMinus? "blue" : COLORS.white }]} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: SIZES.width * 0.9,
        height: SIZES.height * 0.05,
        marginTop: SIZES.height * 0.02,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputview: {
        width: SIZES.width * 0.78,
        height: SIZES.height * 0.05,
        borderColor: COLORS.gray60,
        borderWidth: 0.4,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        gap: SIZES.width * 0.1
    },
    iconview: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    icon: {
        width: SIZES.width * 0.035,
        height: SIZES.height * 0.05,
        // marginLeft: SIZES.width *.03,
    },
    input: {
        width: SIZES.width * 0.3,
        height: SIZES.height * 0.05,
        marginLeft: SIZES.width * 0.05,
        borderLeftWidth: 0.2,
        borderLeftColor: COLORS.gray60,
        color: COLORS.black,
        fontSize: SIZES.width * 0.04,
        paddingHorizontal: SIZES.width * 0.02
    },
    calculate: {
        width: SIZES.width * 0.15,
        height: SIZES.height * 0.029,
        flexDirection: 'row',
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: COLORS.gray60
    },
    calIcon: {
        width: SIZES.width * 0.073,
        height: SIZES.height * 0.025,
        textAlign: 'center',
        color: COLORS.black,
      ...FONTS.fiveHundred,
        borderRadius: 5,
        padding: 5,
        alignItems: 'center'
    },
    Icon: {
        fontSize: SIZES.width * 0.03,
        borderRadius: 50,
    },
    checkBox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: COLORS.gray60,
        backgroundColor: COLORS.white
    }
})

export default Budget