import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import Ionicons  from "react-native-vector-icons/Ionicons"


const InputBox = ({
  placeholder,
  search,
  countryBox,
  maxLength,
  keyboardType,
  label,
  onChangeText,
  value,
  editable,
  icon,
  multiline,
  textAlignVertical,
  numberOfLines,
  labelStyle,
  inputboxstyle,
  errors,
  errorstyle,
  secureTextEntry,
  img,
  borderbox,
  rightimgstyle,
  placeholderstyle, placeholderTextColor,
}
) => {

  const [mobileNumber, setMobileNumber] = useState('');
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);

  
  return (
    <View>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles.container, inputboxstyle]}>
        <TextInput
          style={[
            styles.placeholdera,
            icon && { width: SIZES.width * 0.8 },
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
          secureTextEntry={secureTextEntry && visible}
        />
        {img && <Image source={img} style={[styles.image, rightimgstyle]} />}
        {icon && (
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible), setShow(!show);
            }}>
            <Ionicons
              name={show ? 'eye' : 'eye-off'}
              size={20}
              color={COLORS.gray70}
            />
          </TouchableOpacity>
        )}
      </View>
      {errors ? (
        <Text
          style={[
            styles.error,
            borderbox && { marginLeft: SIZES.width * 0.02 },
            errorstyle,
          ]}>
          {errors}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * .85,
    height:SIZES.height*.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: 'rgba(194, 194, 194, 1)',
    alignSelf: 'center',
    borderRadius:10 ,
    paddingHorizontal:SIZES.width*.02,
    backgroundColor: COLORS.white,
  },
  placeholdera: {
    ...FONTS.fourHundred,
    fontSize: SIZES.width * 0.040,
    color: COLORS.gray80,
    ...FONTS.fiveHundred,
    marginBottom: -3,
    width: SIZES.width * 0.78,
  },
  label: {
    fontSize: SIZES.width * .04,
    ...FONTS.fourHundred,
    color: COLORS.gray40,
    marginLeft: SIZES.width * 0.02,
    width: SIZES.width * 0.88,
  },

  icon: {
    width: SIZES.width * 0.06,
    height: SIZES.height * 0.025,
    resizeMode: 'contain',
    tintColor: COLORS.gray60,
  },
});

export default InputBox;