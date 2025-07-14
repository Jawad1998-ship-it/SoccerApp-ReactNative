import {
  Text,
  View,
} from "react-native";
import {
  DownArrowIcon,
  LocationIcon,
} from "./components/icons/Icons";

export default function Index() {
  return (
    <View className="bg-[#F3F3F3]">
      <View className="bg-[#FFFFFF] px-[20px]">
        <View className="mt-[16px] w-[350px] h-[32px]">
          <View className="flex items-center flex-row gap-x-[2px]">
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
          <View></View>
        </View>
      </View>
    </View>
  );
}
