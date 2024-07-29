import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from "react-native-vector-icons/AntDesign"
import { COLORS, FONTS, SIZES } from '../../constants';

const items = [{
    id: '1',
    name: 'Foodshopper'
}, {
    id: '2',
    name: 'Retailer'
}, {
    id: '3',
    name: 'Consumer'
}, {
    id: '4',
    name: 'Owner'
}, {
    id: '5',
    name: 'Dealer'
}];

const MultiSelectExample = ({label}) => {
    const [selectedItems, setSelectedItems] = useState([]);

    return (
        <View style={styles.container}>
            {label && <Text style={[styles.label]}>{label}</Text>}
            <View style={styles.innercontainer}>
                <SectionedMultiSelect
                    items={items}
                    IconRenderer={() => <Icon name="plus" style={styles.icon} />} // Wrap Icon in a function
                    uniqueKey="id"
                    onSelectedItemsChange={setSelectedItems}
                    selectedItems={selectedItems}
                    hideSearch={true}
                    showItemSelected={false}
                    selectText="Select Audience"
                />
                {selectedItems.map((item) => (
                    <Text key={item.id}>{item.name}</Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: SIZES.width * .88,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'rgba(194, 194, 194, 1)',
        borderRadius: 10,
        paddingHorizontal: SIZES.width * .02,
        backgroundColor: COLORS.white,
        marginTop: SIZES.height * .025,
    },
    innercontainer: {
        width:SIZES.width*.8,
        // backgroundColor:'red'
    },
    icon:{
        color:COLORS.black,
        fontSize:SIZES.width*.035
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
});

export default MultiSelectExample;