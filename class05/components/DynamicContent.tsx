import { View, Text } from 'react-native'
import React from 'react'

const DynamicContent = () => {
    const userName = "Shubh";
    const sumVal = (a: number, b: number) => a + b;
  return (
    <View>
        <Text>
            Dynamic Content: {userName}
        </Text>
        <Text>
            Sum of 5 and 3: {sumVal(5, 3)}
        </Text>
    </View>
  )
}

export default DynamicContent