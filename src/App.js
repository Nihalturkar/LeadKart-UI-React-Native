import { View, Text } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS } from './constants'
import { NavigationContainer } from "@react-navigation/native"
import Root from './root'

const App = () => {
  return (
    <NavigationContainer>
      <Root/>
    </NavigationContainer>
  )
}

export default App