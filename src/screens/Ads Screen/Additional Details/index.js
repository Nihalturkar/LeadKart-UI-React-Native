import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Modal, Switch } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import styles from './style';
import CustomDropdown from '../../../components/Dropdown Component';
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import PickerInput from '../../../components/Picker Component';
import MultiSelectExample from '../../../components/Multiple select component';
import ButtonCustom from '../../../components/mainButton/button';

const CreateAd2 = ({ navigation }) => {
    const [switchValue, setSwitchValue] = useState(false);



    const handleSwitchChange = (value) => {
        setSwitchValue(value);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
            <ScrollView style={styles.innerContainer}>
                <CustomDropdown label="campaign" />
                <TouchableOpacity onPress={() => navigation.navigate("SelectImage")} style={styles.imagepic}>
                    <Feather name="upload-cloud" style={styles.upload} />
                    <Text style={styles.pic}>Select an Image</Text>
                </TouchableOpacity>
                {/* {image && (
                    <View>
                        <Text>Selected Image:</Text>
                        <Image source={{ uri: image.path }} style={{ width: 300, height: 400 }} />
                    </View>
                )} */}
                <PickerInput label="Title" placeholder="Nanny's Diwali Offer" />

                <PickerInput
                    label="Caption"
                    placeholder="Exclusive discounts on momos this diwali"
                    rightimgstyle={{ display: "none" }}
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                />

                <View style={styles.boxContainer}>
                    <View style={styles.innerbox}>
                        <Text style={styles.aitext}>AI Suggested Caption</Text>
                        <Text style={[styles.boxtxt, { width: SIZES.width * .55 }]}>Order tastiest momos in Bhopal.
                            Click on Link now</Text>
                    </View>
                    <TouchableOpacity activeOpacity={.8}>
                        <Text style={styles.maintxt}>Add</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.action}>
                    <Text style={styles.headingText}>Call to Action</Text>
                    <View style={styles.switch}>
                        <Switch
                            value={switchValue}
                            onValueChange={handleSwitchChange}
                            trackColor={{ true: "rgb(49, 131, 255)", false: "gray" }}
                            thumbColor={COLORS.white}
                        />
                    </View>
                </View>

                <CustomDropdown label="Select a Call to Action" />

                <PickerInput
                    label="Destination URL"
                    placeholder="https://destination"
                />

                <View>
                    <MultiSelectExample label="Audience" />
                </View>

                <View style={styles.boxContainer}>
                    <View style={styles.innerbox}>
                        <Text style={styles.aitext}>AI Suggested Audience</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.audience}>
                                <Text style={styles.boxtxt}>Food Shopper</Text>
                                <AntDesign name="plus" style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.audience}>
                                <Text style={styles.boxtxt}>Food Shopper</Text>
                                <AntDesign name="plus" style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <PickerInput label="Target Area" placeholder="Add a location" />

                <ButtonCustom children="Next" btnStyle={styles.btn} onPress={() => navigation.navigate("PaymentDetail")} />

            </ScrollView>
        </SafeAreaView>
    );
};

export default CreateAd2;