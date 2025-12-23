import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CarComponent = () => {
    const carPrice = "₹ 5000.00";
    const imageHeight = 200;
    const imageWidth = 300;
    const carName = "Premium Car";
    const carRating = 4.8;
    const carDescription = "This is a premium car with excellent features.";
    const buttonText = "Book Now";
  return (
    <View>
      <Text>{carPrice}</Text>
      <Text>
        <Image
          source={require('../src/assets/images/car.jpg')}
          style={{ height: imageHeight, width: imageWidth, marginTop: 10, marginBottom: 50 }}
        />
      </Text>
      <Text>{imageHeight}
      </Text>
      <Text>{imageWidth}</Text>
      <Text>{carName}{carRating}</Text>
      <Text>{carDescription}</Text>
      <TouchableOpacity style={{ backgroundColor: 'green', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 10 }}>
        <Text style={{ color: '#fff' }}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CarComponent