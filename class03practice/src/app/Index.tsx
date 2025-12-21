import { View, Text } from 'react-native'
import React from 'react'
import UserName from '@/components/UserName'
import UserAge from '@/components/UserAge'
import UserSocialAc from '@/components/UserSocialAc'
import UserLoves from '@/components/UserLoves'

const Index = () => {
  return (
    <View>
      <View>
        <UserName />
        <UserAge />
        <UserSocialAc />
        <UserLoves />
      </View>
    </View>
  )
}

export default Index