import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'

const ProfileBtn = () => {
  return (
    <View>
      <TouchableOpacity style={{ padding: 10, backgroundColor: 'green', borderRadius: 5, alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>Follow</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default ProfileBtn