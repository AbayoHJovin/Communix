import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const RoundedImageGroup = () => {
  const images = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
  ];

  return (
    <View className="flex-row items-center bg-white shadow-lg p-5 px-7 w-96 rounded-full">
      <View className="flex-row items-center">
        {images.map((image, index) => (
          <View
            key={index}
            className={`w-10 h-10 rounded-full border-2 border-white overflow-hidden ${
              index > 0 ? "-ml-3" : ""
            }`}
          >
            <Image source={{ uri: image }} className="w-full h-full" />
          </View>
        ))}
      </View>

      {/* Text */}
      <Text className="ml-3 text-green-600 font-semibold">+20 Views</Text>

      {/* Button */}
      <TouchableOpacity className="ml-auto bg-green-600 px-4 py-2 rounded-md">
        <Text className="text-white font-semibold">View</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoundedImageGroup;
