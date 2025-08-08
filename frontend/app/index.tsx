import { Image, Text, View, TextInput, ScrollView } from "react-native";
import { useState } from "react";
import {
  BookmarkIcon,
  DownArrowIcon,
  LocationIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
} from "./components/icons/Icons";
import VenueContainer from "./components/VenueContainer/VenueContainer";
import Footer from "./components/Footer/Footer";

export default function Index() {
  const [activeTab, setActiveTab] = useState("venues");

  return (
    <ScrollView className="bg-[#F3F3F3] flex-1">
      <View className="bg-[#FFFFFF] px-[20px]">
        <View className="mt-[16px] w-[350px] h-[32px]">
          <View className="flex items-center justify-center flex-row gap-x-[24px]">
            <View className="flex flex-row items-center justify-between">
              <LocationIcon />
              <Text
                className="w-[170px] flex items-center justify-start font-gil text-[#18181B] font-normal
               text-sm leading-[100%] tracking-[0%] whitespace-nowrap overflow-hidden text-ellipsis"
              >
                Kawla Bazar, Airport Dhaka...
              </Text>
              <DownArrowIcon />
            </View>
            <View className="flex flex-row gap-x-[8px]">
              <MailIcon />
              <BookmarkIcon />
              <StarIcon />
            </View>
          </View>
        </View>

        <View className="mt-[16px]">
          <View className="relative">
            <TextInput
              className="bg-[#F3F3F3] w-[350px] h-[48px] rounded-[50px] px-[12px] py-[16px]
              pr-[48px] text-[#444444] text-[13px] leading-[24px] tracking-[0%] font-gil font-normal outline-none"
              placeholder="Search for Venues, Locations"
              placeholderTextColor="#444444"
            />
            <View className="absolute right-[16px] top-1/2 transform -translate-y-1/2">
              <SearchIcon />
            </View>
          </View>
        </View>

        <View
          className="relative w-[350px] h-[89px] mt-[23px] rounded-[12px] border-2 border-white
         bg-gradient-to-r from-[#07B388] to-[#00A55B] 
         [border-image:linear-gradient(93.7deg,_#FFFFFF_0%,_rgba(255,255,255,0)_33.17%,_rgba(255,255,255,0)_70.67%,_#FFFFFF_100%)_1]"
        >
          <Image
            source={require("../assets/images/football.png")}
            style={{
              position: "absolute",
              width: 204,
              height: 109,
              top: -20,
              left: -29,
              zIndex: 1,
            }}
            resizeMode="contain"
          />
          <View className="flex flex-col gap-y-[8px] items-end justify-center">
            <Text className="mr-[16px] mt-[15px] font-gil text-center text-white font-normal leading-[100%] tracking-[0%] text-sm">
              Challenge Your Rival On The Turf
            </Text>
            <button
              className="mr-[62.5px] bg-[#FFFFFF] w-[120px] h-[32px] rounded-[54px] py-[10px] flex items-center justify-center
            text-xs text-[#6600A5] leading-[100%] tracking-[0%] font-normal font-gil"
            >
              Join Match
            </button>
          </View>
        </View>

        <View className="mt-[12px] flex flex-row">
          {/* Venues Tab */}
          <View onPress={() => setActiveTab("venues")}>
            <Text
              className={`w-[175px] text-sm text-center leading-[100%] tracking-[0%] font-gil ${
                activeTab === "venues"
                  ? "font-bold text-[#6600A5]"
                  : "font-normal text-[#18181B]"
              }`}
            >
              Venues (12)
            </Text>
            {activeTab === "venues" && (
              <View className="w-[175px] mt-[8px] border-b-[2px] border-[#6600A5]"></View>
            )}
          </View>

          {/* Events Tab */}
          <View onPress={() => setActiveTab("events")}>
            <Text
              className={`w-[175px] text-sm text-center leading-[100%] tracking-[0%] font-gil ${
                activeTab === "events"
                  ? "font-bold text-[#6600A5]"
                  : "font-normal text-[#18181B]"
              }`}
            >
              Events (3)
            </Text>
            {activeTab === "events" && (
              <View className="w-[175px] mt-[8px] border-b-[2px] border-[#6600A5]"></View>
            )}
          </View>
        </View>
      </View>
      <View className="mt-[12px] px-[20px] pb-[7px] w-full">
        <VenueContainer />
      </View>
      <Footer />
    </ScrollView>
  );
}
