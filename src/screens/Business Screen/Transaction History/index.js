import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import { COLORS } from '../../../constants';
import styles from './style';

const data = [...Array(9)].map((_, index) => ({
  id: index + 1,
  date: `10 ${index + 1} May`,
  transactionId: `Transaction id : 457567hh8${index + 1}`,
  amount: `₹59${index + 1}`,
}));

const TransactionHistory = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <ScrollView style={styles.innerContainer}>
        {data.map((item, index) => (
          <View key={item.id} style={styles.mainBox}>
            <View>
              <Text style={styles.dtext}>{item.date.split(' ')[0]}</Text>
              <Text style={styles.dtext}>May</Text>
            </View>
            <View>
              <Text style={styles.get}>Get WhatsApp Message</Text>
              <Text style={styles.text}>{item.transactionId}</Text>
            </View>
            <View>
              <Text style={styles.green}>{item.amount}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionHistory;