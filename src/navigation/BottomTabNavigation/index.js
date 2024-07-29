import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { COLORS, SIZES, icons, images } from '../../constants';
import styles from './style';
import AdImages from '../../screens/Ad Images Screen/Ad Images';
import Ads from '../../screens/Ads Screen/Ads';
import Leads from '../../screens/Leads Screen/Leads';
import Feather from "react-native-vector-icons/Feather"
import Home from '../../screens/Home Screen/Home';
import Bussiness from '../../screens/Business Screen/Business';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.black,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle:styles.tabstyle,
    tabBarLabelStyle: styles.label,
  }
const BottomTab = () => {

  return (
   <Tab.Navigator initialRouteName='Home'  
   screenOptions={screenOptions}>

    {/* Home Screen */}

    <Tab.Screen
    name='Home'
    component={Home}
    options={() => ({
        headerShown:true,
        headerStyle:{backgroundColor:COLORS.primary},
        headerTitle:"SK e solution",
        headerTitleStyle:{color:COLORS.white},
        headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity activeOpacity={.6}>
                <Image source={images.homeheader} resizeMode='contain' style={styles.leftheader}/>
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
        title: 'Home',
        tabBarIcon: ({ color }) => <Image style={[styles.tabicons, { tintColor: color }]} source={icons.home} resizeMode="contain" />
      })}
    />

    {/* Ad Images */}

    <Tab.Screen
    name='AdImages'
    component={AdImages}
    options={() => ({
      headerShown:true,
      headerStyle:{backgroundColor:COLORS.primary},
      headerTitle:"SK e solution",
      headerTitleStyle:{color:COLORS.white},
      headerLeft: () => (
          <View style={styles.headerLeftContainer}>
            <TouchableOpacity activeOpacity={.6}>
              <Image source={images.homeheader} resizeMode='contain' style={styles.leftheader}/>
            </TouchableOpacity>
          </View>
        ),
        headerRight: () => (
          <View style={styles.headerLeftContainer}>
            <TouchableOpacity activeOpacity={.6}>
              <View style={styles.rightIcon}>
           <Feather name="search" style={styles.hrighttext} />
                  <Text style={styles.hrighttext}>
                     Search
                  </Text>
              </View>
            </TouchableOpacity>
          </View>
        ),
        title: 'Ad images',
        tabBarIcon: ({ color }) => <Image style={[styles.tabicons, { tintColor: color }]} source={icons.adimg} resizeMode="contain" />
      })}
    />

    {/* ADS */}
    <Tab.Screen
    name='Ads'
    component={Ads}
    options={() => ({
      headerShown:true,
      headerStyle:{backgroundColor:COLORS.primary},
      headerTitle:"SK e solution",
      headerTitleStyle:{color:COLORS.white},
      headerLeft: () => (
          <View style={styles.headerLeftContainer}>
            <TouchableOpacity activeOpacity={.6}>
              <Image source={images.homeheader} resizeMode='contain' style={styles.leftheader}/>
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
        title: 'Ads',
        tabBarIcon: ({ color }) => <Image style={[styles.tabicons, { tintColor: color }]} source={icons.ad} resizeMode="contain" />
      })}
    />

    {/* Leads */}
    <Tab.Screen
    name='Leads'
    component={Leads}
    options={() => ({
      headerShown:true,
      headerStyle:{backgroundColor:COLORS.primary},
      headerTitle:"Leads",
      headerTitleStyle:{color:COLORS.white},
      headerLeft: () => (
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity activeOpacity={.6}>
            <Feather name="arrow-left" style={{color: COLORS.white, fontSize: SIZES.width*.05,marginLeft:10}} />
          </TouchableOpacity>
        </View>
      ),
        headerRight: () => (
          <View style={styles.headerLeftContainer}>
            <TouchableOpacity activeOpacity={.6}>
              <View style={styles.rightIcon}>
           <Feather name="search" style={styles.hrighttext} />
                  <Text style={styles.hrighttext}>
                     Search
                  </Text>
              </View>
            </TouchableOpacity>
          </View>
        ),
        title: 'Leads',
        tabBarIcon: ({ color }) => <Image style={[styles.tabicons, { tintColor: color }]} source={icons.leads} resizeMode="contain" />
      })}
    />

    {/* Business */}
    <Tab.Screen
    name='Business'
    component={Bussiness}
    options={() => ({
      headerShown:true,
      headerStyle:{backgroundColor:COLORS.primary},
      headerTitle:"Business Detail",
      headerTitleStyle:{color:COLORS.white},
      headerLeft: () => (
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity activeOpacity={.6}>
            <Feather name="arrow-left" style={{color: COLORS.white, fontSize: SIZES.width*.05,marginLeft:10}} />
          </TouchableOpacity>
        </View>
      ),
        title: 'Business',
        tabBarIcon: ({ color }) => <Image style={[styles.tabicons, { tintColor: color }]} source={icons.business} resizeMode="contain" />
      })}
    />
   </Tab.Navigator>
  )
}

export default BottomTab