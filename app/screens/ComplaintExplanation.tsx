import RoundedImageGroup from "@/components/custom/RoundedImageGroup";
import React, { useState } from "react";
import {
  ScrollView,
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const ComplaintDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const content =
    "In previous days when i was home enjoying my work i just got outside and i met a problem as i found that my cow which was in the cow’s hatch has been stolen by people that till now i dont know so i think dear leaders you can help me get my stolen cow this is the problem I was deliveringIn previous days when i was home enjoying my work i just got outside and i met a problem as i found that my cow which was in the cow’s hatch has been stolen by people that till now i dont know so i think dear leaders you can help me get my stolen cow this is the problem I was deliveringIn previous days when i was home enjoying my work i just got outside and i met a problem as i found that my cow which was in the cow’s hatch has been stolen by people that till now i dont know so i think dear leaders you can help me get my stolen cow this is the problem I was deliveringIn previous days when i was home enjoying my work i just got outside and i met a problem as i found that my cow which was in the cow’s hatch has been stolen by people that till now i dont know so i think dear leaders you can help me get my stolen cow this is the problem I was deliveringIn previous days when i was home enjoying my work i just got outside and i met a problem as i found that my cow which was in the cow’s hatch has been stolen by people that till now i dont know so i think dear leaders you can help me get my stolen cow this is the problem I was delivering";
  const maxLength = 400;
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldTruncate = content.length > maxLength;
  const displayedText =
    isExpanded || !shouldTruncate
      ? content
      : content.slice(0, maxLength) + "...";
  return (
    <ScrollView className="bg-gray-50">
      <View className="relative">
        <ImageBackground
          source={require("../../assets/images/complaintImage.png")}
          style={{
            height: 250,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
          resizeMode="stretch"
        >
          <View className="flex flex-row items-center justify-between w-full px-4">
            <View className="flex flex-row items-center">
              <ArrowLeftIcon color="white" size={25} />
              <Text className="text-white ml-2 font-poppinsBold text-2xl">
                Complaint Details
              </Text>
            </View>

            <View>
              <Image
                source={require("../../assets/images/options.png")}
                className="w-10 h-10"
              />
            </View>
          </View>
        </ImageBackground>

        <View className="absolute bottom-[-30px] left-10">
          <RoundedImageGroup />
        </View>
      </View>
      <View className="mt-12 px-4 gap-y-7">
        <Text className="text-[25px] font-poppinsSemibold text-center">
          Stealing of cow at my home
        </Text>
        <View className="flex flex-row items-center gap-x-4">
          <Image
            source={require("../../assets/images/date.png")}
            className="w-16 h-16"
          />
          <View>
            <Text className="text-lg font-poppinsSemibold">
              14 December, 2024
            </Text>
            <Text className="text-[#747688]">Tuesday,10:00AM</Text>
          </View>
        </View>
        <View className="flex flex-row items-center gap-x-4">
          <Image
            source={require("../../assets/images/location.png")}
            className="w-16 h-16"
          />
          <View>
            <Text className="text-lg font-poppinsSemibold">Kigali Rwanda</Text>
            <Text className="text-[#747688]">
              Gasabo, Kinyinya, Gasharu, Agatare
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center gap-x-4">
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
            className="w-16 h-16 rounded-xl"
          />
          <View>
            <Text className="text-lg font-poppinsSemibold">Steve Bertin</Text>
            <Text className="text-[#747688]">Mayor of Gasabo</Text>
          </View>
        </View>
        <View>
          <Text className="text-[18px] font-poppinsSemibold text-[#25B14C]">About Complaint</Text>
            <View className="">
                <Text className="text-gray-800 leading-6 text-[16.4px] font-poppinsRegular"> {displayedText}{" "}
                </Text>
            {shouldTruncate && !isExpanded && (
                <TouchableOpacity onPress={handleToggle}>
                <Text className="text-green-500 font-poppinsSemibold text-[16.4px]">Read more</Text>
              </TouchableOpacity>
            )}
            </View>
          {isExpanded && shouldTruncate && (
            <TouchableOpacity onPress={handleToggle}>
              <Text className="text-green-500 mt-2 font-poppinsSemibold text-[16.4px]">Show less</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default ComplaintDetails;
