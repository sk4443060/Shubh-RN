import { View, Text } from 'react-native'
import React from 'react'
import ProfileImage from '@/components/ProfileImage'
import ProfileName from '@/components/ProfileName'
import ProfileDesc from '@/components/ProfileDesc'
import ProfileBtn from '@/components/ProfileBtn'

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f5f5f5', borderRadius: 10, width: '90%', height: 250, alignSelf: 'center' }}>
        <ProfileImage />
        <ProfileName />
        <ProfileDesc />
        <ProfileBtn />
    </View>
  )
}

export default Index