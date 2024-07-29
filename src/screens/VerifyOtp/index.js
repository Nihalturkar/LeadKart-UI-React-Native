import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import { COLORS, images } from '../../constants';
import ButtonCustom from '../../components/mainButton/button';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Verify = ({navigation}) => {
  const [countdown, setCountdown] = useState(30);
  let interval;
  const startCountdown = () => {
    interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 1) {
          clearInterval(interval);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };
  useEffect(() => {
    startCountdown();
    return () => clearInterval(interval);
  }, []);

  const handleResendOtp = () => {
    clearInterval(interval);
    setCountdown(30);
    startCountdown();
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <StatusBar backgroundColor={COLORS.transparent} translucent={true} barStyle='dark-content' />
        <View style={styles.container}>
          <Image source={images.mobile} resizeMode='contain' style={styles.mobImg} />
          <Text style={styles.text}>
            We have sent you a 4 digit code to verify your phone number on <Text style={styles.number}>9988090679</Text>
          </Text>
          <View style={styles.otpView}>
            <OTPInputView
              pinCount={4}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={(code => {
                console.log(`Code is ${code}, you are good to go!`)
              })}
              keyboardType='numeric'
              placeholderTextColor={COLORS.black}
            />
          </View>
          <View style={styles.resendView}>
            <Text style={styles.smallText}>Please wait 00:{countdown < 10 ? `0${countdown}` : countdown}s</Text>
            <TouchableOpacity activeOpacity={0.6} disabled={countdown > 0} onPress={handleResendOtp}>
              <Text style={[styles.smallText, countdown > 0 ? { color: 'grey' } : { color: 'blue' }]}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
          <ButtonCustom children="Verify OTP" btnStyle={styles.input} onPress={() => navigation.navigate("Home")} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Verify;
