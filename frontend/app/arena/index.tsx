import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import { FootballIcon } from "../components/icons/Icons";

export default function page() {
  const [activeTab, setActiveTab] = useState("venues");
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
      <View className="px-[18.5px] py-[6px] flex-row items-center justify-between">
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
      <View className="h-[36px] w-full px-[11px] flex-row items-center justify-center gap-x-[24px]">
        <View onPress={() => setActiveTab("reserve")}>
          <Text
            className={`w-[45px] text-xs text-center leading-[100%] tracking-[0%] font-gil ${
              activeTab === "reserve"
                ? "font-bold text-[#6600A5]"
                : "font-normal text-[#18181B]"
            }`}
          >
            Reserve
          </Text>
          {activeTab === "reserve" && (
            <View className="w-[70px] mt-[8px] border-b-[2px] border-[#6600A5]"></View>
          )}
        </View>
        <View onPress={() => setActiveTab("captain-clash")}>
          <View className="flex-row items-center justify-center">
            <Text
              className={`w-[68px] text-xs text-center leading-[100%] tracking-[0%] font-gil ${
                activeTab === "captain-clash"
                  ? "font-bold text-[#6600A5]"
                  : "font-normal text-[#18181B]"
              }`}
            >
              Captain Clash
            </Text>
            <FootballIcon />
          </View>

          {activeTab === "captain-clash" && (
            <View className="w-[70px] mt-[8px] border-b-[2px] border-[#6600A5]"></View>
          )}
        </View>
        <View onPress={() => setActiveTab("tournaments")}>
          <Text
            className={`w-[81px] text-xs text-center leading-[100%] tracking-[0%] font-gil ${
              activeTab === "events"
                ? "font-bold text-[#6600A5]"
                : "font-normal text-[#18181B]"
            }`}
          >
            Tournaments (2)
          </Text>
          {activeTab === "tournaments" && (
            <View className="w-[70px] mt-[8px] border-b-[2px] border-[#6600A5]"></View>
          )}
        </View>
        <View onPress={() => setActiveTab("turf-insights")}>
          <Text
            className={`w-[59px] text-xs text-center leading-[100%] tracking-[0%] font-gil ${
              activeTab === "turf-insights"
                ? "font-bold text-[#6600A5]"
                : "font-normal text-[#18181B]"
            }`}
          >
            Turf Insights
          </Text>
          {activeTab === "turf-insights" && (
            <View className="w-[70px] mt-[8px] border-b-[2px] border-[#6600A5]"></View>
          )}
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
      <View className="mt-[8px] px-[20px]"></View>
    </View>
  );
}
