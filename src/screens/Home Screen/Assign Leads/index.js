import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, FlatList, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, data } from '../../../constants'
import styles from './style'
import CustomDropdown from '../../../components/Dropdown Component'
import ButtonCustom from '../../../components/mainButton/button'
import DemoLead from '../../../components/Leads Components/demo leads'
import AntDesign from "react-native-vector-icons/AntDesign"

const AssignLeads = ({ navigation }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (item) => {
    setCheckedItems((prevItems) => ({
     ...prevItems,
      [item.id]:!prevItems[item.id],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <ScrollView style={styles.innerContainer}>
        <CustomDropdown label="Assign User" />
        <Text style={styles.headingText}>Select leads</Text>

        <View>
          <FlatList
            data={data.leadData}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity activeOpacity={.9} onPress={() => handleCheck(item)}>
                  <View style={styles.componentstyle}>
                    <View style={styles.radio}>
                      {checkedItems[item.id]? (
                        <AntDesign name="check" style={styles.check} />
                      ) : (
                        <AntDesign name="close" style={styles.uncheck} />
                      )}
                    </View>
                    <DemoLead
                      imageSource={item.img}
                      name={item.name}
                      phoneNumber={item.no}
                      add={item.add}
                      containerStyle={{width:SIZES.width*.8}}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <ButtonCustom children="Assign Leads" btnStyle={styles.btn} onPress={() => navigation.navigate("AdditionalDetails")} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AssignLeads;