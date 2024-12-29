import RoundedImageGroup from "@/components/custom/RoundedImageGroup";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
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
import ComplaintOptions from "@/components/custom/ComplaintOptions";

interface Leader {
  name: string;
  responsibilities: string;
}

interface ComplaintProps {
  id: number;
  date: string;
  day: string;
  time: string;
  title: string;
  subtitle: string;
  location: string;
  backgroundImage: any;
  leader: Leader;
}

const ComplaintDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalVisible,setIsModalVisible]=useState(false)
  const params = useLocalSearchParams();
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const complaint: ComplaintProps = params.complaint
    ? JSON.parse(params.complaint as string) // Cast and parse
    : null;
  const content = complaint.subtitle;
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
          source={complaint.backgroundImage}
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
              <ArrowLeftIcon
                color="white"
                size={25}
                onPress={() => router.back()}
              />
              <Text className="text-white ml-2 font-poppinsBold text-2xl">
                Complaint Details
              </Text>
            </View>
                  <TouchableOpacity onPress={toggleModal}>
                    <Image
                      source={require("../../assets/images/options.png")}
                      className="w-10 h-10"
                    />
                  </TouchableOpacity>
            <ComplaintOptions isModalVisible={isModalVisible} toggleModal={toggleModal} />
          </View>
        </ImageBackground>

        <View className="absolute bottom-[-30px] left-10">
          <RoundedImageGroup />
        </View>
      </View>
      <View className="mt-12 px-4 gap-y-7">
        <Text className="text-[25px] font-bold text-center">
          {complaint.title}
        </Text>
        <View className="flex flex-row items-center gap-x-4">
          <Image
            source={require("../../assets/images/date.png")}
            className="w-16 h-16"
          />
          <View>
            <Text className="text-lg font-semibold">{complaint.date}</Text>
            <Text className="text-[#747688] font-semibold">
              {complaint.day} , {complaint.time}
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center gap-x-4">
          <Image
            source={require("../../assets/images/location.png")}
            className="w-16 h-16"
          />
          <View>
            <Text className="text-lg font-semibold">{complaint.location}</Text>
            <Text className="text-[#747688] font-semibold">
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
            <Text className="text-lg font-semibold">
              {complaint.leader.name}
            </Text>
            <Text className="text-[#747688] font-semibold">
              {complaint.leader.responsibilities}
            </Text>
          </View>
        </View>
        <View>
          <Text className="text-[18px] font-poppinsSemibold text-[#25B14C] my-5">
            About Complaint
          </Text>
          <View className="">
            <Text className="text-black leading-6 text-[16.4px] font-poppinsRegular">
              {" "}
              {displayedText}{" "}
            </Text>
            {shouldTruncate && !isExpanded && (
              <TouchableOpacity onPress={handleToggle}>
                <Text className="text-green-500 font-poppinsSemibold text-[16.4px]">
                  Read more
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {isExpanded && shouldTruncate && (
            <TouchableOpacity onPress={handleToggle}>
              <Text className="text-green-500 mt-2 font-poppinsSemibold text-[16.4px]">
                Show less
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default ComplaintDetails;
