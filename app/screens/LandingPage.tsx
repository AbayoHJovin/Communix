import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Bell from "@/assets/svg/Bell";
import SearchButton from "@/assets/svg/SearchButton";
import ComplaintComponent from "@/components/custom/ComplaintComponent";

const LandingPage = () => {
  return (
    <ScrollView >
      <View className="bg-[#25B14C] w-full h-60 p-5 flex flex-col justify-evenly">
        <View className="flex flex-row items-center justify-between">
          <Image
            source={require("../../assets/images/userImage.png")}
            resizeMode="cover"
            className="w-14 h-14 rounded-full"
          />
          <Text className="text-white font-poppinsSemibold text-xl">
            Weldcome
          </Text>
          <Bell />
        </View>

        <View className="flex flex-row items-center mt-5 justify-between space-x-3">
          <TextInput
            className="flex-1 bg-white rounded-[12px] h-[50px] px-4 py-2 text-gray-600" // Full width with rounded edges and padding
            placeholder="Search for any complaint"
            placeholderTextColor="#A9A9A9"
          />
          <TouchableOpacity className="bg-white rounded-full flex items-center justify-center">
            <SearchButton />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row justify-between p-5">
        <Text className="text-[#25B14C] font-poppinsSemibold text-lg">Your Complaints</Text>
        <Text className="text-[#25B14C]">See all</Text>
      </View>
      <ComplaintComponent/>
    </ScrollView>
  );
};

export default LandingPage;
