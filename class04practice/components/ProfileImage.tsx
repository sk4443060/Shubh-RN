import { View, Image } from 'react-native'
import React from 'react'

const ProfileImage = () => {
  return (
    <View>
      <Image
        source={require("../src/assets/user.jpg")}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
    </View>
  )
}

export default ProfileImage