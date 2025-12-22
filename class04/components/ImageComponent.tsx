import { View, Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View>
      <Image source={ require('../src/assets/OIP.jpg') } style={{ width: '100%' }}/>
      <Image source={{ uri: 'https://tse3.mm.bing.net/th/id/OIP.VnjHEswSDhh-xeDgtm5QdgHaEo?pid=Api&P=0&h=180' }} style={{ width: '100%', height: 180, marginTop: 10 }}/>
    </View>
  )
}

export default ImageComponent