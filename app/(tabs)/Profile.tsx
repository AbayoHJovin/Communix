import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import ProfileSelector from "@/components/custom/ProfileSelector";

const Profile = () => {
  return (
    <View className="flex-1">
      <View className="flex-row items-center px-4 py-4 ">
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="ml-4 text-lg font-semibold text-gray-700">
          Profile
        </Text>
      </View>

      <View className="flex flex-row justify-center gap-x-10 mx-2 items-center mt-6">
        <Image
          source={{
            uri: "https://via.placeholder.com/100",
          }}
          className="w-28 h-28 rounded-full"
        />
        <View>
        <Text className="mt-4 text-xl font-bold text-gray-800">
          KARASIRA AINE
        </Text>
        <Text className="text-gray-500 underline">karasiraine5@gmail.com</Text>
        <TouchableOpacity className="mt-4 px-5 py-3 bg-green-600 rounded-md text-center">
          <Text className="text-white font-medium text-center">Edit Profile</Text>
        </TouchableOpacity>
        </View>
      </View>
      <ProfileSelector navigation={"./Complaints.tsx"}/>

      <View className="m-auto px-4 pb-10">
        <TouchableOpacity className="px-6 py-4 w-[300px] bg-red-500 rounded-md">
          <Text className="text-center text-white font-semibold">LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// interface MenuItemProps {
//   icon: React.ReactNode;
//   label: string;
// }

// const MenuItem: React.FC<MenuItemProps> = ({ icon, label }) => (
//   <TouchableOpacity className="flex-row items-center justify-between p-4 bg-white rounded-md ">
//     <View className="flex-row items-center">
//       {icon}
//       <Text className="ml-4 text-gray-700 text-base font-medium">{label}</Text>
//     </View>
//     <AntDesign name="right" size={20} color="#9CA3AF" />
//   </TouchableOpacity>
// );

export default Profile;
