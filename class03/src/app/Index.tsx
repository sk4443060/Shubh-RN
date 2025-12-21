import { View, Text } from 'react-native'
import React from 'react'
import Greet from '../components/Greet'
import NewComponent from '../components/NewComponent'

const Index = () => {
  return (
    <View>
      <View>
        <Greet />
        <NewComponent />
      </View>
    </View>
  )
}

export default Index