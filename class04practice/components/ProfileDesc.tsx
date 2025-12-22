import { View, Text } from 'react-native'
import React from 'react'

const ProfileDesc = () => {
  return (
    <View>
      <Text style={{ fontSize: 16, color: 'gray', marginTop: 5, marginBottom: 10 }}>
        This is the detailed description about the profile. It provides more information regarding the user.
      </Text>
    </View>
  )
}

export default ProfileDesc