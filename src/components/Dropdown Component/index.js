import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Dropdown} from "react-native-element-dropdown"
import { COLORS, FONTS, SIZES } from '../../constants';
import Entypo from "react-native-vector-icons/Entypo"


const campaigns = [
  { label: 'Diwali Offers Marketing', value: 'diwali-offers' },
  { label: 'Summer Sale Campaign', value: 'summer-sale' },
  { label: 'Back to School Promo', value: 'back-to-school' },
  { label: 'Black Friday Deals', value: 'black-friday' },
];

const CustomDropdown = ({ label ,data,dropDownStyle}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);


  return (
    <View style={[styles.container]}>
       <Text style={[styles.label]}>
        {label}
        </Text>
      <Dropdown
          style={[styles.dropdown,dropDownStyle]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={campaigns || data}
          labelField="label"
          valueField="value"
          visibleSelectedItem={true}
          itemContainerStyle={{backgroundColor:COLORS.white,borderRadius:20}}
          itemTextStyle={styles.listItems}
          placeholder={!isFocus ? 'Select item' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderRightIcon={() => (
            <Entypo
              style={styles.down}
              color={isFocus ? 'blue' : 'black'}
              name="chevron-down"
              size={20}
            />
          )}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.height * .025,
  },
  label: {
    fontSize: SIZES.width * .035,
    ...FONTS.fiveHundred,
    color: COLORS.gray50,
    position: 'absolute',
    top: SIZES.width * -.03,
    left: SIZES.width * .04,
    backgroundColor: COLORS.white,
    zIndex:99
  },
  input: {
    color: COLORS.black,
    width:SIZES.width*.6
  },
  dropdown: {
    width:SIZES.width*.88,
    paddingHorizontal:SIZES.width*.02,
    padding:SIZES.width*.015,
    borderWidth: 1,
    borderColor: 'rgba(194, 194, 194, 1)',
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  icon: {
    marginRight: 5,
    color:COLORS.black
  },
  placeholderStyle: {
    fontSize:SIZES.width*.035,
    color:COLORS.black
  },
  selectedTextStyle: {
    fontSize:SIZES.width*.035,
    color:COLORS.black
  },
  inputSearchStyle: {
    fontSize: 16,
    color:COLORS.black

  },
  down: {
    color: COLORS.black,
    fontSize: SIZES.width * .04
  },
  listItems:{
    color:COLORS.black,
  }
});

export default CustomDropdown;