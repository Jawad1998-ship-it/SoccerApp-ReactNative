import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function VenueContainer() {
  return (
    <ScrollView className="bg-[#F3F3F3] flex flex-col items-center justify-start">
      <View className="bg-white h-[250px] w-[350px] rounded-[16px] overflow-hidden px-[4px] py-[4px]">
        {/* Image Section */}
        <View className="relative">
          <Image
            source={require("../../../assets/images/banner.png")}
            style={{
              width: 350,
              height: 160,
            }}
            className="rounded-[12px]"
            resizeMode="cover"
          />
        </View>

        {/* Content Section */}
        <View className="p-5">
          {/* Title */}
          <Text className="text-base text-[#18181B] leading-[100%] tracking-[0%] font-gil font-bold">
            JAFF Arena & Academy
          </Text>

          {/* Address */}
          <Text className="text-sm text-gray-500 mt-1">
            RC6F+RR6, Bashundhara Main Gate, Dhaka 1229
          </Text>
          {/* Price and Button Row */}
          <View className="flex-row justify-between items-center mt-6">
            {/* Price */}
            <View>
              <Text className="text-sm text-gray-500">Starting From</Text>
              <Text className="text-lg font-bold text-gray-800">
                BDT 3,000/-
              </Text>
            </View>

            {/* Reserve Now Button */}
            <TouchableOpacity className="bg-[#EAEAFE] py-3 px-6 rounded-full">
              <Text className="text-[#4C43D5] font-bold text-base">
                Reserve Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
