import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import { FootballIcon } from "../components/icons/Icons";
import { LinearGradient } from "expo-linear-gradient";

export default function page() {
  const [activeTab, setActiveTab] = useState("reserve");
  return (
    <View className="w-full">
      <View className="mt-[8px] w-full flex-row items-center justify-center">
        <Navigation />
      </View>
      <View className="mt-[8px]">
        <Image
          source={require("../../assets/images/banner-2.png")}
          resizeMode="contain"
          style={{
            width: 390,
            height: 172,
          }}
        />
      </View>
      <View className="bg-white px-[18.5px] py-[6px] flex-row items-center justify-between">
        <View>
          <Text className="text-[#18181B] font-bold leading-[100%] tracking-[0%] text-base font-gil">
            DBox Sports Complex
          </Text>
          <Text className="text-[#444444] leading-[24px] tracking-[0%] text-[9px] font-normal font-gil">
            Plot no 217, Block, B B Rd No. 3, Dhaka 1216
          </Text>
        </View>
        <View>
          <button className="w-[115px] h-[28px] rounded-[54px] bg-[#E4E7FF] text-[#6600A5] leading-[100%] tracking-[0%] text-xs font-normal font-gil">
            Follow
          </button>
        </View>
      </View>
      <View className="w-[390px] h-[1.5px]">
        <LinearGradient
          colors={["#FFFFFF", "#F0F0F0", "#F0F0F0", "#FFFFFF"]}
          locations={[0, 0.3, 0.7, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
          }}
        />
      </View>
      <View className=" bg-white border-b-2 border-[#EDEDED] h-[36px] w-full px-[11px] flex-row items-center justify-center gap-x-[24px]">
        <View
          className={`h-[36px] w-[70px] flex-row items-center justify-center ${
            activeTab === "reserve" ? "border-b-2 border-[#6600A5]" : ""
          }`}
          onPress={() => setActiveTab("reserve")}
        >
          {" "}
          <Text
            className={`text-xs flex-row items-center justify-center text-center leading-[100%] tracking-[0%] font-gil ${
              activeTab === "reserve"
                ? "font-bold text-[#6600A5]"
                : "font-normal text-[#18181B]"
            }`}
          >
            Reserve
          </Text>
        </View>
        <View
          className={`h-[36px] w-[70px] flex-row items-center justify-center ${
            activeTab === "reserve" ? "border-b-2 border-[#6600A5]" : ""
          }`}
          onPress={() => setActiveTab("reserve")}
        >
          {" "}
          <Text
            className={`text-xs flex-row items-center justify-center text-center leading-[100%] tracking-[0%] font-gil ${
              activeTab === "reserve"
                ? "font-bold text-[#6600A5]"
                : "font-normal text-[#18181B]"
            }`}
          >
            Reserve
          </Text>
        </View>
        <View
          className={`h-[36px] w-[70px] flex-row items-center justify-center ${
            activeTab === "reserve" ? "border-b-2 border-[#6600A5]" : ""
          }`}
          onPress={() => setActiveTab("reserve")}
        >
          {" "}
          <Text
            className={`text-xs flex-row items-center justify-center text-center leading-[100%] tracking-[0%] font-gil ${
              activeTab === "reserve"
                ? "font-bold text-[#6600A5]"
                : "font-normal text-[#18181B]"
            }`}
          >
            Reserve
          </Text>
        </View>
        <View
          className={`h-[36px] w-[70px] flex-row items-center justify-center ${
            activeTab === "reserve" ? "border-b-2 border-[#6600A5]" : ""
          }`}
          onPress={() => setActiveTab("reserve")}
        >
          {" "}
          <Text
            className={`text-xs flex-row items-center justify-center text-center leading-[100%] tracking-[0%] font-gil ${
              activeTab === "reserve"
                ? "font-bold text-[#6600A5]"
                : "font-normal text-[#18181B]"
            }`}
          >
            Reserve
          </Text>
        </View>
      </View>
      <View className="mt-[12.5px] px-[20px]">
        <Text className="text-[#000000] font-gil font-bold text-xs leading-[100%] tracking-[0%]">
          Select the days available in{" "}
          <Text className="font-bold font-gil text-[#6600A5] text-xs leading-[100%] tracking-[0%]">
            August
          </Text>
        </Text>
      </View>
      <View className="mt-[8px] px-[20px] h-[70px]">
        <View className="h-[46px] w-[32px]">
          <View className="w-[32px] h-[32px] rounded-[50px] border border-[#FFFFFF] bg-[#F3F3F3]">
            <Text className="text-[13px] text-black font-normal leading-[100%] tracking-[0%] font-gil">
              04
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
