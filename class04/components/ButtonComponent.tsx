import { View, Text, Button, TouchableOpacity, Pressable } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <View>
      <Text>ButtonComponent</Text>
      {/* FIRST WAY */}
      <Button
        color="red"
        title="Press me"
        onPress={() => alert("Button pressed!")}
      />

      {/* SECOND WAY */}
      <Button title="Press me" color="green" disabled></Button>

      {/* THIRD WAY */}
      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 5,
          backgroundColor: "yellow",
          alignItems: "center",
          marginTop: 10,
        }}
        onPress={() => alert("TouchableOpacity pressed!")}
      >
        <Text style={{ color: "black" }}>Press me</Text>
      </TouchableOpacity>

      {/* FOURTH WAY */}
      <Pressable
        onPress={() => alert("TouchableOpacity pressed!")}
        style={{
          marginTop: 10,
          padding: 10,
          backgroundColor: "cyan",
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <Text>I'm pressable!</Text>
      </Pressable>

      {/* 
        1. onPress: Function that is called when the component is pressed. Required.
        2. onPressIn: Function that is called when the press gesture starts.
        3. onPressOut: Function that is called when the press gesture ends (or is cancelled).
        4. onLongPress: Function that is called when a long press is detected.
      */}

      <Text>You have already used onPress in Button and TouchableOpacity components.
      Explore and try the other props onPressIn, onPressOut, and onLongPress by yourself.</Text>
    </View>
  );
};

export default ButtonComponent;
