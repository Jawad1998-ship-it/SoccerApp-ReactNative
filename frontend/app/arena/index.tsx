import { View, Text } from "react-native";
import React from "react";
import Navigation from "../components/Navigation/Navigation";

export default function page() {
  return (
    <View className="w-full">
      <View className="w-full flex-row items-center justify-center">
        <Navigation />
      </View>
      <Text className="font-gil">page</Text>
    </View>
  );
}
