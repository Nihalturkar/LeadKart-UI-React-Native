import { View, Text, ScrollView, StatusBar, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons, images } from '../../constants'
import InputBox from '../../components/InputBox/input'
import ButtonCustom from '../../components/mainButton/button'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Login = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <SafeAreaView>
                <StatusBar backgroundColor={COLORS.transparent} translucent={true} barStyle='dark-content' />
                <ScrollView keyboardShouldPersistTaps='handled'  >
                    <View style={styles.imgView}>
                        <Image source={images.Login} resizeMode='cover' style={styles.img} />
                    </View>
                    <View style={styles.signView}>
                        <Text style={styles.text}>Let’s sign in </Text>
                        <Text style={styles.smallText}>
                            Sign in your account using mobile no. or , Google, Facebook and Mail
                        </Text>
                        <InputBox placeholder="Enter a mobile no" inputboxstyle={styles.input} maxLength={10} keyboardType="numeric" />

                        <ButtonCustom children="Continue" btnStyle={styles.input} onPress={() => navigation.navigate("Verify")} />

                        <View style={styles.loginwith}>
                            <View style={styles.line}></View>
                            <View><Text style={styles.with}>or Login with</Text></View>
                            <View style={styles.line}></View>
                        </View>
                        <View style={styles.social}>
                            <TouchableOpacity activeOpacity={.6}>
                                <Image source={icons.google} resizeMode='contain' style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={.6}>
                                <Image source={icons.fb} resizeMode='contain' style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        </View>
    )
}

export default Login