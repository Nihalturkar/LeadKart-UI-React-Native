import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../../constants';
import Feather from 'react-native-vector-icons/Feather';

const DemoLead = ({ imageSource, name, phoneNumber, add ,containerStyle}) => {
  return (
    <View style={[styles.container,containerStyle]}>
      <Text style={styles.newLead}>New Lead</Text>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.leadName}>{name}</Text>
        <Text style={styles.info}>{phoneNumber}</Text>
        <Text style={styles.info}>{add}</Text>
      </View>
      <Feather name="phone" style={styles.phoneIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    backgroundColor: COLORS.white,
    marginBottom: SIZES.height * 0.01,
    marginTop: SIZES.height * 0.02,
    borderRadius: 10,
    paddingHorizontal: SIZES.width * .04,
    padding: SIZES.height * .015,
    borderColor:COLORS.gray20,
  },
  image: {
    width: SIZES.width * 0.15,
    height: SIZES.height * 0.06,
    borderRadius: 5,
  },
  infoContainer: {
    width: SIZES.width * 0.45,
  },
  leadName: {
    color: COLORS.black,
    fontSize: SIZES.width * 0.04,
  },
  info: {
    color: COLORS.gray40,
  },
  newLead: {
    color: COLORS.black,
    position: 'absolute',
    right: SIZES.width * 0.001,
    top: SIZES.height * 0.001,
    fontSize: SIZES.width * 0.025,
    backgroundColor:"#86bdf2",
    width: SIZES.width * 0.2,
    textAlign: 'center',
    borderBottomLeftRadius: 20,
    borderTopRightRadius:110
  },
  phoneIcon: {
    fontSize: SIZES.width * 0.05,
    backgroundColor: COLORS.bottomblue,
    padding: SIZES.width * 0.03,
    borderRadius: 50,
    color: COLORS.white,
  },
});

export default DemoLead;