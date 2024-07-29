import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, SIZES, icons } from '../../constants';
import { TextInput } from 'react-native-gesture-handler';

const PickerInput = ({
    label, labelStyle, inputboxstyle, placeholder, placeholderstyle, maxLength,
    editable, keyboardType, placeholderTextColor, onChangeText, value,
    multiline, numberOfLines, textAlignVertical, secureTextEntry,img,
    rightimgstyle,inputContainer,onClick,leftimg,leftimgstyle
}) => {
    const [selectedValue, setSelectedValue] = useState("");

    return (
        <View style={[styles.container,inputContainer]}>
            {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
            <View style={inputboxstyle}>
                
                <TextInput
                    style={[
                        styles.placeholdera, { width: SIZES.width * 0.8 },
                        placeholderstyle,
                    ]}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    editable={editable}
                    keyboardType={keyboardType}
                    placeholderTextColor={placeholderTextColor || COLORS.gray50}
                    onChangeText={onChangeText}
                    value={value}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    // textAlignVertical='top'
                    textAlignVertical={textAlignVertical}
                    secureTextEntry={secureTextEntry}
                />
                <TouchableOpacity onPress={onClick}>
                {img && <Image source={img} style={[styles.image, rightimgstyle]} />}
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: SIZES.width * .88,
        // height: SIZES.height * .06,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'rgba(194, 194, 194, 1)',
        borderRadius: 10,
        paddingHorizontal:SIZES.width*.02,
        backgroundColor: COLORS.white,
        marginTop: SIZES.height * .025,
    },
    placeholdera: {
        ...FONTS.fourHundred,
        fontSize: SIZES.width * 0.037,
        color: COLORS.gray80,
        ...FONTS.fiveHundred,
        marginBottom: -3,
        width: SIZES.width * 0.78,
    },
    label: {
        fontSize: SIZES.width * .035,
        ...FONTS.fiveHundred,
        color: COLORS.gray50,
        position: 'absolute',
        top: SIZES.width * -.03,
        left: SIZES.width * .04,
        backgroundColor: COLORS.white,
    },
    leftimage:{
        width:SIZES.width*.04,
        height:SIZES.height*.02,
        marginBottom:SIZES.height*.055
    }
});

export default PickerInput;
