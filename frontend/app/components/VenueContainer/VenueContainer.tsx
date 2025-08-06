import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function VenueContainer() {
  return (
    <View className="bg-[#F3F3F3] flex flex-col gap-y-[8px] items-center justify-start">
      <View className="bg-white h-[250px] w-[350px] rounded-[16px] overflow-hidden px-[4px] pt-[4px]">
        {/* Image Section */}
        <View className="relative">
          <Image
            source={require("../../../assets/images/banner.png")}
            style={{
              width: 342,
              height: 160,
            }}
            className="rounded-[12px]"
            resizeMode="cover"
          />
        </View>

        {/* Content Section */}
        <View className="mt-[4px] px-[9px]">
          {/* Title */}
          <Text className="text-base text-[#18181B] leading-[100%] tracking-[0%] font-gil font-bold">
            JAFF Arena & Academy
          </Text>
          {/* Address */}
          <Text className="text-[10px] text-[#444444] font-gil font-normal leading-[24px] tracking-[0%]">
            RC6F+RR6, Bashundhara Main Gate, Dhaka 1229
          </Text>
          <View className="mt-[4px]" style={{ height: 1 }}>
            <LinearGradient
              colors={["#FFFFFF", "#F0F0F0", "#FFFFFF"]}
              locations={[0, 0.5045, 1]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={{ flex: 1 }}
            />
          </View>
          {/* Price and Button Row */}
          <View className="flex-row justify-between items-start mt-[4px]">
            {/* Price */}
            <View className="flex-row">
              <Text className="text-[10px] text-[#444444] font-normal font-gil leading-[24px] tracking-[0%]">
                Starting From
              </Text>
              <Text className="text-[10px] font-gil font-bold text-[#000000] leading-[24px] tracking-[0%]">
                {" "}
                BDT 3,000/-
              </Text>
            </View>

            {/* Reserve Now Button */}
            <TouchableOpacity className="bg-[#E4E7FF] flex-row justify-between items-center w-[105px] h-[28px] py-3 px-6 rounded-[54px]">
              <Text className="text-[#6600A5] text-[10px] font-normal font-gil leading-[100%] tracking-[0%]">
                Reserve Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="bg-white h-[250px] w-[350px] rounded-[16px] overflow-hidden px-[4px] pt-[4px]">
        {/* Image Section */}
        <View className="relative">
          <Image
            source={require("../../../assets/images/banner.png")}
            style={{
              width: 342,
              height: 160,
            }}
            className="rounded-[12px]"
            resizeMode="cover"
          />
        </View>

        {/* Content Section */}
        <View className="mt-[4px] px-[9px]">
          {/* Title */}
          <Text className="text-base text-[#18181B] leading-[100%] tracking-[0%] font-gil font-bold">
            JAFF Arena & Academy
          </Text>
          {/* Address */}
          <Text className="text-[10px] text-[#444444] font-gil font-normal leading-[24px] tracking-[0%]">
            RC6F+RR6, Bashundhara Main Gate, Dhaka 1229
          </Text>
          <View className="mt-[4px]" style={{ height: 1 }}>
            <LinearGradient
              colors={["#FFFFFF", "#F0F0F0", "#FFFFFF"]}
              locations={[0, 0.5045, 1]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={{ flex: 1 }}
            />
          </View>
          {/* Price and Button Row */}
          <View className="flex-row justify-between items-start mt-[4px]">
            {/* Price */}
            <View className="flex-row">
              <Text className="text-[10px] text-[#444444] font-normal font-gil leading-[24px] tracking-[0%]">
                Starting From
              </Text>
              <Text className="text-[10px] font-gil font-bold text-[#000000] leading-[24px] tracking-[0%]">
                {" "}
                BDT 3,000/-
              </Text>
            </View>

            {/* Reserve Now Button */}
            <TouchableOpacity className="bg-[#E4E7FF] flex-row justify-between items-center w-[105px] h-[28px] py-3 px-6 rounded-[54px]">
              <Text className="text-[#6600A5] text-[10px] font-normal font-gil leading-[100%] tracking-[0%]">
                Reserve Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="bg-white h-[250px] w-[350px] rounded-[16px] overflow-hidden px-[4px] pt-[4px]">
        {/* Image Section */}
        <View className="relative">
          <Image
            source={require("../../../assets/images/banner.png")}
            style={{
              width: 342,
              height: 160,
            }}
            className="rounded-[12px]"
            resizeMode="cover"
          />
        </View>

        {/* Content Section */}
        <View className="mt-[4px] px-[9px]">
          {/* Title */}
          <Text className="text-base text-[#18181B] leading-[100%] tracking-[0%] font-gil font-bold">
            JAFF Arena & Academy
          </Text>
          {/* Address */}
          <Text className="text-[10px] text-[#444444] font-gil font-normal leading-[24px] tracking-[0%]">
            RC6F+RR6, Bashundhara Main Gate, Dhaka 1229
          </Text>
          <View className="mt-[4px]" style={{ height: 1 }}>
            <LinearGradient
              colors={["#FFFFFF", "#F0F0F0", "#FFFFFF"]}
              locations={[0, 0.5045, 1]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={{ flex: 1 }}
            />
          </View>
          {/* Price and Button Row */}
          <View className="flex-row justify-between items-start mt-[4px]">
            {/* Price */}
            <View className="flex-row">
              <Text className="text-[10px] text-[#444444] font-normal font-gil leading-[24px] tracking-[0%]">
                Starting From
              </Text>
              <Text className="text-[10px] font-gil font-bold text-[#000000] leading-[24px] tracking-[0%]">
                {" "}
                BDT 3,000/-
              </Text>
            </View>

            {/* Reserve Now Button */}
            <TouchableOpacity className="bg-[#E4E7FF] flex-row justify-between items-center w-[105px] h-[28px] py-3 px-6 rounded-[54px]">
              <Text className="text-[#6600A5] text-[10px] font-normal font-gil leading-[100%] tracking-[0%]">
                Reserve Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
