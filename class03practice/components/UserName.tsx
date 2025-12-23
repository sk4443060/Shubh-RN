import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const UserName = () => {
  return (
    <View style={styles.container}>
      <Text>
        My name is Shubh
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    backgroundColor: '#ffffffff',
    padding: 25,
    borderRadius: 4,
    boxShadow: '0px 4px 6px #00000029',
  },
})

export default UserName