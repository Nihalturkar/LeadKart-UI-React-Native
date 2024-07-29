import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Onboarding from '../screens/Onboarding'
import { createStackNavigator } from "@react-navigation/stack"
import Login from '../screens/Login';
import Verify from '../screens/VerifyOtp';
import { COLORS } from '../constants';
import StackNavigator from '../navigation/StackNavigator';

const Stack = createStackNavigator();
const Root = () => {
  const [token, settoken] = useState('')
  return (
    <>
    { token == null ?

    <Stack.Navigator>
      {/* Onboarding */}
      <Stack.Screen name='Onboarding' component={Onboarding}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "none",
          },
        }}
      />
     
     {/* Login */}

     <Stack.Screen name='Login' component={Login}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "none",
          },
        }}
      />

      {/* VerifyOtp */}

      <Stack.Screen name='Verify' component={Verify}
        options={{
          headerShown: true,
          title: "Verify OTP",
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor:COLORS.white,
          },
        }}
      />
    </Stack.Navigator>
      //  if token is null then first upside component will be showing otherwise downside 
 :
<Stack.Navigator>
  <Stack.Screen
  name='StackNavigator'
  component={StackNavigator}
  options={{
    headerShown: false,
  }}    
  />
</Stack.Navigator>
}
</>
  )
}
export default Root