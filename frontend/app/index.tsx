import {
  Image,
  Text,
  View,
} from "react-native";
import {
  BookmarkIcon,
  DownArrowIcon,
  LocationIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
} from "./components/icons/Icons";
import footballImage from "../assets/images/football.png";

export default function Index() {
  return (
    <View className="bg-[#F3F3F3]">
      <View className="bg-[#FFFFFF] px-[20px]">
        <View className="mt-[16px] w-[350px] h-[32px]">
          <View className="flex items-center justify-center flex-row gap-x-[24px]">
            <View className="flex flex-row items-center justify-between">
              <LocationIcon />
              <Text
                className="w-[170px] flex items-center justify-start font-gil text-[#18181B] font-normal 
              text-sm leading-[100%] tracking-[0%] whitespace-nowrap overflow-hidden text-ellipsis"
              >
                Kawla Bazar, Airport
                Dhaka...
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
            <input
              type="text"
              className="bg-[#F3F3F3] w-[350px] h-[48px] rounded-[50px] px-[12px] py-[16px]
              pr-[48px] placeholder:text-[#444444] placeholder:text-[13px] 
              placeholder:font-gil placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[0%]"
              placeholder="Search for Venues, Locations"
            />
            <SearchIcon className="absolute right-[16px] top-1/2 transform -translate-y-1/2" />
          </View>
        </View>
        <View
          className="relative w-[350px] h-[89px] mt-[23px] rounded-[8px] border-2 border-white 
        bg-gradient-to-r from-[#07B388] to-[#00A55B] relative overflow-hidden"
        >
          <Image
            source={require("../assets/images/football.png")}
            className="absolute w-[204px] h-[109px] top-[-20px] left-[-36px]"
            resizeMode="contain"
          />
          {/* Your other content goes here */}
        </View>
      </View>
    </View>
  );
}
