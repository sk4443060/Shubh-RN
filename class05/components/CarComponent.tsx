import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "../utils/styles";

const CarComponent = () => {
  const carPrice = "₹ 5000.00";
  const carName = "Premium Car";
  const carRating = 4.8;
  const carDescription = "This is a premium car with excellent features.";
  const buttonText = "Add to Cart";
  return (
    <View>
      <View style={ styles.priceTag }>
        <Text style={ styles.priceText }>{carPrice}</Text>
      </View>
      
        <Image
          source={require("../src/assets/images/car.jpg")}
          style={ styles.carImage }
        />
      <View style={  styles.cardHeader }>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{carName}</Text>
        <Text style={{ fontSize: 18 }}>Rating: {carRating}</Text>
      </View>
      <Text style={{ fontSize: 16 }}>{carDescription}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#fff" }}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CarComponent;
