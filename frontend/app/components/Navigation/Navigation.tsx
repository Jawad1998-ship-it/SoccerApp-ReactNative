import { View, Text } from "react-native";
import React from "react";
import { BackIcon, BookmarkIcon, NavigationIcon } from "../icons/Icons";

export default function Navigation() {
  return (
    <View className="w-[350px] h-[32px]">
      <View className="mt-[8px] flex-row items-center justify-between">
        <View className="flex-row items-center justify-center">
          <View className="flex-row items-center justify-center">
            <BackIcon />
          </View>
        </View>
        <View className="flex-row items-center">
          <BookmarkIcon />
          <NavigationIcon />
        </View>
      </View>
    </View>
  );
}
