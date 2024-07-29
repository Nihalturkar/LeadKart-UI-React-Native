import React, { useRef, useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity,FlatList } from 'react-native';
import { COLORS, SIZES, data, icons, images } from '../../../constants';
import styles from './style';
import PickerInput from '../../../components/Picker Component';
import ButtonCustom from '../../../components/mainButton/button';
import RBSheet from "react-native-raw-bottom-sheet";
import DateTimePicker from '@react-native-community/datetimepicker';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FollowUp = ({ navigation }) => {
    const refRBSheet = useRef();
    const [isClicked, setIsClicked] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [timePickerVisible, setTimePickerVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());

    const OpenBottom = () => {
        refRBSheet.current.open();
    };
    const closeBottom = () => {
        refRBSheet.current.close();
    };

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const showTimePicker = () => {
        setTimePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const hideTimePicker = () => {
        setTimePickerVisible(false);
    };

    const handleDatePicked = (event, selectedDate) => {
        const currentDate = selectedDate || new Date();
        setSelectedDate(currentDate);
        hideDatePicker();
    };

    const handleTimePicked = (event, selectedTime) => {
        const currentTime = selectedTime || new Date();
        setSelectedTime(currentTime);
        hideTimePicker();
    };

    // Example content for the bottom sheet
    const DateComponent = () => {
        return (
            <View style={styles.bottomView}>
                <View style={{ flexDirection: 'row', gap: SIZES.width * 0.04, alignItems: 'center' }}>
                    <TouchableOpacity onPress={closeBottom}>
                    <AntDesign name="arrowleft" style={styles.left}/>
                    </TouchableOpacity>
                    <Text style={styles.heading}>Set Follow up date</Text>
                </View>
                <Text style={styles.sdate}>07 May 2024, 09:32 AM</Text>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={data.dateData}
                    numColumns={2}
                    renderItem={({ item,index }) => (
                        <TouchableOpacity
                        style={[
                            styles.dateView,
                            activeIndex === index ? { backgroundColor: 'rgb(200, 240, 231)'} : null,
                          ]}
                            onPress={() => handleClick()}
                        >
                            <Text style={styles.date}>{item.date}</Text>
                            <Text style={styles.time}>{item.time}</Text>
                        </TouchableOpacity>
                    )}
                />
                  <TouchableOpacity style={styles.selectbox} onPress={()=>OpenBottom()}>
                    <PickerInput
                        value="Select a time for a follow up"
                        img={icons.date}
                        rightimgstyle={styles.righticon}
                        inputboxstyle={styles.box}
                        editable={false}
                        placeholderstyle={styles.place}
                    />
                </TouchableOpacity>

                <View style={styles.selectbox}>
                    <PickerInput
                        label="Add Notes"
                        placeholder="Write a note here"
                        inputboxstyle={styles.box}
                        placeholderstyle={styles.place}
                        numberOfLines={4}
                        textAlignVertical="top"
                        multiline
                    />
                </View>
                <ButtonCustom children="Save" btnStyle={styles.btn} onPress={() => refRBSheet.current.close()} />
            </View>
        );
    };

 

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle='dark-content' />
            <ScrollView style={styles.innerContainer}>
                <Image source={images.clock} style={styles.clock} />
                <TouchableOpacity style={styles.selectbox} onPress={()=>OpenBottom()}>
                    <PickerInput
                        value="Select a date for a follow up"
                        label="Select date"
                        img={icons.date}
                        rightimgstyle={styles.righticon}
                        inputboxstyle={styles.box}
                        editable={false}
                        placeholderstyle={styles.place}
                        onClick={showDatePicker}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.selectbox}  onPress={()=>OpenBottom()}>
                    <PickerInput
                        value="Select time for a follow up"
                        label="Select time"
                        img={icons.date}
                        rightimgstyle={styles.righticon}
                        inputboxstyle={styles.box}
                        editable={false}
                        placeholderstyle={styles.place}
                        onClick={showTimePicker}
                    />
                </TouchableOpacity>
                <View style={styles.selectbox}>
                    <PickerInput
                        label="Add Notes"
                        placeholder="✍🏼Write a note here"
                        inputboxstyle={styles.box}
                        placeholderstyle={styles.place}
                        numberOfLines={4}
                        textAlignVertical="top"
                        multiline
                        leftimg
                    />
                </View>
                <ButtonCustom children="Save" btnStyle={styles.btn} onPress={() => navigation.navigate("FollowUp")} />
                <RBSheet
                    ref={refRBSheet}
                    height={800}
                    openDuration={200}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "rgba(0,0,0,0.5)",
                        },
                        draggableIcon: {
                            backgroundColor: '#000',
                        },
                        container: {
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        },
                    }}
                    onClose={closeBottom}
                >
                    <DateComponent />
                </RBSheet>
                {datePickerVisible && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={selectedDate}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={handleDatePicked}
                    />
                )}
                {timePickerVisible && (
                    <DateTimePicker
                        testID="timePicker"
                        value={selectedTime}
                        mode={'time'}
                        is24Hour={true}
                        display="default"
                        onChange={handleTimePicked}
                    />
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default FollowUp;