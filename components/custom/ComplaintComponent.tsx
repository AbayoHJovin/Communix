import { View, Text, Image } from "react-native";
import React from "react";

const ComplaintComponent = () => {
  return (
    <View>
      <View className="bg-red-500">
        <View className="bg-white">
          <Text className="text-[#25B14C] font-poppinsSemibold">10</Text>
          <Text className="text-[#25B14C]">e</Text>
        </View>
        {/* <Image source={require("../../assets/images/complaintImage.png")} resizeMode="contain"  className="w-20 h-20" /> */}
      </View>
    </View>
  );
};

export default ComplaintComponent;
