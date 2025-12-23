import { View } from "react-native";
import React from "react";
import ProfileImage from "@/components/ProfileImage";
import ProfileName from "@/components/ProfileName";
import ProfileDesc from "@/components/ProfileDesc";
import ProfileBtn from "@/components/ProfileBtn";

const Index = () => {
  return (
    <View
        style={{
          padding: 15,
        }}>
      <View
        style={{
          padding: 25,
          backgroundColor: "#ffffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 15,
          borderRadius: 10,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ProfileImage />
        <ProfileName />
        <ProfileDesc />
        <ProfileBtn />
      </View>
    </View>
  );
};

export default Index;
