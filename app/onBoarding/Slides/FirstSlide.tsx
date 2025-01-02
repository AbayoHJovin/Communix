import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SlideContext } from "@/contexts/slideContext";
import Icon from "react-native-vector-icons/FontAwesome";

export default function FirstSlide() {
  const context = useContext(SlideContext);
  const { setCurrentSlide } = context!;

  function handlePressButton() {
    console.log("Button Pressed");
  }

  return (
    <SafeAreaView className="flex-1 bg-white p-8">
      <Text className="text-[30px] text-[#25B14C] font-semibold mb-5">
        Welcome
      </Text>
      <View className="flex-row justify-between w-full mb-5">
        <View className="rounded-full bg-[#fffefe] shadow-lg shadow-gray-300 shadow-offset-[0px,4px] shadow-opacity-0.4 shadow-radius-10 w-32 h-32 justify-center items-center">
          <Text className="text-[#25B14C] text-center text-lg px-2">
            Submit your problems
          </Text>
        </View>
        <View className="rounded-full bg-[#fffefe] shadow-lg shadow-gray-300 shadow-offset-[0px,4px] shadow-opacity-0.4 shadow-radius-10 w-32 h-32 justify-center items-center">
          <Text className="text-[#25B14C] text-center text-lg px-2">
            Solve your problems
          </Text>
        </View>
      </View>

      <View className="flex-1 justify-center items-center">
        <View className="rounded-full bg-[#fffefe] shadow-lg shadow-gray-300 shadow-offset-[0px,8px] shadow-opacity-0.5 shadow-radius-20 w-[230px] h-[230px] justify-center items-center">
          <Text className="text-[#25B14C] text-center text-lg px-2 mb-1">
            All In one
          </Text>
          <Image
            source={require("../../../assets/images/splash-screen.png")}
            className="w-[150px] h-[150px]"
            resizeMode="contain"
          />
        </View>
      </View>

      <View className="items-start text-start mt-3 mb-10">
        <Text className="text-[20px] text-[#25B14C] font-semibold my-3">
          Community Complaints
        </Text>
        <Text className="text-[16px] mt-1 text-gray-600 w-[280px]">
          Easily make and talk your complaints to any leader
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => setCurrentSlide(2)}
        className="bg-[#25B14C] w-[350px] h-[59px] rounded-xl justify-center items-center"
      >
        <Text className="text-white text-center text-[18px]">
          Let's get started
        </Text>
      </TouchableOpacity>

      <View className="flex-row items-center justify-center mt-5">
        <Text className="text-gray-600 text-center w-[180px] items-center">
          I already have an account
        </Text>
        <View className="bg-green-500 rounded-full h-5 w-5 items-center justify-center">
          <Icon name="arrow-right" size={10} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
}
