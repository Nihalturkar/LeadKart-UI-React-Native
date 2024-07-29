import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from '../BottomTabNavigation';
import NewLeads from '../../screens/Home Screen/NewLeads';
import { COLORS, SIZES } from '../../constants';
import styles from '../BottomTabNavigation/style';
import Feather from 'react-native-vector-icons/Feather'
import AdDetail from '../../screens/Ads Screen/Ad Detail';
import AdDetail2 from '../../screens/Ads Screen/Ad Detail(Google)';
import SelectPlan from '../../screens/Ads Screen/Select Plan';
import PaymentDetail from '../../screens/Ads Screen/Payment Detail';
import CreateADs from '../../screens/Home Screen/Create an Ads';
import FollowUp from '../../screens/Home Screen/Follow Up';
import DemoLead2 from '../../screens/Leads Screen/Demo Lead 2';
import AdCampaign from '../../screens/Business Screen/Ad Campaign Settings';
import CreateAd2 from '../../screens/Ads Screen/Additional Details';
import CreateUser from '../../screens/Home Screen/Create User';
import AssignLeads from '../../screens/Home Screen/Assign Leads';
import AdditionalDetails from '../../screens/Home Screen/Additional Details';
import TransactionHistory from '../../screens/Business Screen/Transaction History';
import ImageCreate from '../../screens/Ad Images Screen/Image Create';
import SelectImage from '../../screens/Ad Images Screen/Select Images';
import WhatsAppMessages from '../../screens/Home Screen/Whatsapp Messages';
import NewCalls from '../../screens/Home Screen/New Calls';
import AdditionalDetails2 from '../../screens/Home Screen/Additional Details2';

const Stack = createStackNavigator();

const StackNavigator = ({navigation}) => {
  return (

    <Stack.Navigator>
      <Stack.Screen
        name='BottomTab'
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />

      {/* Get new leads */}

      <Stack.Screen
        name='NewLeads'
        component={NewLeads}
        options={{
          headerShown: true,
          headerTitle: 'Get New Leads',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6}>
                <View style={styles.rightIcon}>
                  <Feather name="phone" style={styles.hrighttext} />
                  <Text style={styles.hrighttext}>
                    Help?
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      {/* Ad detail */}

      <Stack.Screen
        name='AdDetail'
        component={AdDetail}
        options={{
          headerShown: true,
          headerTitle: 'Ad detail',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        }}
        />

        {/* --Ad Detail 2 */}
        <Stack.Screen
        name='AdDetail2'
        component={AdDetail2}
        options={{
          headerShown: true,
          headerTitle: 'Ad detail',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        }}
        />

        {/* Select Plan */}

        <Stack.Screen
        name='SelectPlan'
        component={SelectPlan}
        options={{
          headerShown: true,
          headerTitle: 'Select a Plan',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6}>
                <View style={styles.rightIcon}>
                  <Feather name="phone" style={styles.hrighttext} />
                  <Text style={styles.hrighttext}>
                    Help?
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      {/* Payment detail */}

      <Stack.Screen
        name='PaymentDetail'
        component={PaymentDetail}
        options={{
          headerShown: true,
          headerTitle: 'Payment details',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6}>
                <View style={styles.rightIcon}>
                  <Feather name="phone" style={styles.hrighttext} />
                  <Text style={styles.hrighttext}>
                    Help?
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ),
        }}
      />

{/* ---Create An Ad */}

<Stack.Screen
        name='CreateADs'
        component={CreateADs}
        options={{
          headerShown: true,
          headerTitle: 'Create an Ad',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        }}
        />

        {/* Follow up  */}

        <Stack.Screen
        name='FollowUp'
        component={FollowUp}
        options={{
          headerShown: true,
          headerTitle: 'Set Follow up date',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        }}
        />

        {/* Demo Lead 2 */}
         
        <Stack.Screen
        name='DemoLead2'
        component={DemoLead2}
        options={{
          headerShown: true,
          headerTitle:'',
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .055, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        }}
        />

        {/* Ad Campaign Settings */}
        <Stack.Screen
        name='AdCampaign'
        component={AdCampaign}
        options={{
          headerShown: true,
          headerTitle: 'Ad Campaign Settings',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.blue },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        }}
        />

{/* CreateAd2 ad screen */}

<Stack.Screen
        name='CreateAd2'
        component={CreateAd2}
        options={{
          headerShown: true,
          headerTitle: 'Create an Ad',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        }}
        />

        {/* Create an User */}

        <Stack.Screen
        name='CreateUser'
        component={CreateUser}
        options={{
          headerShown: true,
          headerTitle: 'Create an user',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        }}
        />

        {/* Assign Leads */}

        <Stack.Screen
        name='AssignLeads'
        component={AssignLeads}
        options={{
          headerShown: true,
          headerTitle: 'Assign Leads',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        }}
        />

        {/* Additional Details */}

        
        <Stack.Screen
        name='AdditionalDetails'
        component={AdditionalDetails}
        options={{
          headerShown: true,
          headerTitle: '',
          // headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6}>
                <View style={styles.rightIcon}>
                  <Feather name="phone" style={styles.hrighttext} />
                  <Text style={styles.hrighttext}>
                    Help?
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ),
        }}
        />

        {/* Transaction History */}

        <Stack.Screen
        name='TransactionHistory'
        component={TransactionHistory}
        options={{
          headerShown: true,
          headerTitle: 'Transaction History',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        }}
        />

        {/* Select Images */}

        <Stack.Screen
        name='SelectImage'
        component={SelectImage}
        options={{
          headerShown: true,
          headerTitle: 'Select your Image',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        }}
        />

        {/* Image Create */}

        <Stack.Screen
        name='ImageCreate'
        component={ImageCreate}
        options={{
          headerShown: true,
          headerTitle: 'Select frame',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6}>
                <View style={styles.rightIcon}>
                  <Text style={styles.hrighttext}>
                    Next
                  </Text>
                  <Feather name="arrow-right" style={styles.hrighttext} />
                </View>
              </TouchableOpacity>
            </View>
          ),
        }}
        />

        {/* WhatsAppMessages */}

        <Stack.Screen
        name='WhatsAppMessages'
        component={WhatsAppMessages}
        options={{
          headerShown: true,
          headerTitle: 'WhatsApp Messages',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        }}
        />

        {/* New Calls */}
        <Stack.Screen
        name='NewCalls'
        component={NewCalls}
        options={{
          headerShown: true,
          headerTitle: 'New Calls',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        }}
        />

        {/* AdditionalDetails2 home screen */}
        <Stack.Screen
        name='AdditionalDetails2'
        component={AdditionalDetails2}
        options={{
          headerShown: true,
          headerTitle: 'Additional Detail',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigation.goBack()}>
                <Feather name="arrow-left" style={{ color: COLORS.white, fontSize: SIZES.width * .05, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        }}
        />

    </Stack.Navigator>
  )
}

export default StackNavigator;