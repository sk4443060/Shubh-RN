import { View, StyleSheet } from "react-native";
import React from "react";
import UserName from "@/components/UserName";
import UserAge from "@/components/UserAge";
import UserSocialAc from "@/components/UserSocialAc";
import UserLoves from "@/components/UserLoves";

const Index = () => {
  return (
    <View style={styles.container}>
      <UserName />
      <UserAge />
      <UserSocialAc />
      <UserLoves />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
});

export default Index;
