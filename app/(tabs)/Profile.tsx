// import React from "react";
// import { View, Text, Image, TouchableOpacity } from "react-native";
// import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";

// const Profile = () => {
//   return (
//     <View className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center px-4 py-4 bg-white">
//         <TouchableOpacity>
//           <AntDesign name="arrowleft" size={24} color="#000" />
//         </TouchableOpacity>
//         <Text className="ml-4 text-lg font-semibold text-gray-700">
//           Profile
//         </Text>
//       </View>

//       <View className="items-center mt-6">
//         <Image
//           source={{
//             uri: "https://via.placeholder.com/100", // Replace with actual image URL
//           }}
//           className="w-24 h-24 rounded-full"
//         />
//         <Text className="mt-4 text-xl font-bold text-gray-800">
//           KARASIRA AINE
//         </Text>
//         <Text className="text-gray-500">karasiraine5@gmail.com</Text>
//         <TouchableOpacity className="mt-4 px-6 py-2 bg-green-600 rounded-full">
//           <Text className="text-white font-medium">Edit Profile</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Menu Options */}
//       <View className="mt-8 space-y-4 px-4">
//         <MenuItem
//           icon={<MaterialIcons name="language" size={24} color="#4B5563" />}
//           label="Language"
//         />
//         <MenuItem
//           icon={<Feather name="map-pin" size={24} color="#4B5563" />}
//           label="Location"
//         />
//         <MenuItem
//           icon={<AntDesign name="eyeo" size={24} color="#4B5563" />}
//           label="View your Complaints"
//         />
//       </View>

//       <View className="m-auto px-4 pb-10">
//         <TouchableOpacity className="px-6 py-3 bg-red-500 rounded-md">
//           <Text className="text-center text-white font-semibold">LOGOUT</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

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

// export default Profile;

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";

interface ProfileProps {
  navigation: any;
}

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [locationDropdownVisible, setLocationDropdownVisible] = useState(false);
  const [userLocation, setUserLocation] = useState("Kigali, Rwanda");

  const handleLanguageSelect = (language: React.SetStateAction<string>) => {
    setSelectedLanguage(language);
    setLanguageDropdownVisible(false);
  };

  const handleViewComplaints = () => {
    navigation.navigate("Complaints"); // Navigate to Complaints screen
  };

  return (
    <View className="flex-1 bg-gray-100">
      <View className="mt-8 space-y-4 px-4">
        {/* Language Menu */}
        <TouchableOpacity
          onPress={() => setLanguageDropdownVisible(!languageDropdownVisible)}
          className="flex-row items-center justify-between p-4 bg-white rounded-md shadow-sm"
        >
          <View className="flex-row items-center">
            <MaterialIcons name="language" size={24} color="#4B5563" />
            <Text className="ml-4 text-gray-700 text-base font-medium">
              Language ({selectedLanguage})
            </Text>
          </View>
          <AntDesign
            name={languageDropdownVisible ? "up" : "down"}
            size={20}
            color="#9CA3AF"
          />
        </TouchableOpacity>
        {languageDropdownVisible && (
          <View className="bg-white rounded-md shadow-md mt-2">
            {["English", "French", "Kinyarwanda"].map((language) => (
              <TouchableOpacity
                key={language}
                onPress={() => handleLanguageSelect(language)}
                className="px-4 py-2 border-b border-gray-200"
              >
                <Text className="text-base text-gray-700">{language}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Location Menu */}
        <TouchableOpacity
          onPress={() => setLocationDropdownVisible(!locationDropdownVisible)}
          className="flex-row items-center justify-between p-4 bg-white rounded-md shadow-sm"
        >
          <View className="flex-row items-center">
            <Feather name="map-pin" size={24} color="#4B5563" />
            <Text className="ml-4 text-gray-700 text-base font-medium">
              Location ({userLocation})
            </Text>
          </View>
          <AntDesign
            name={locationDropdownVisible ? "up" : "down"}
            size={20}
            color="#9CA3AF"
          />
        </TouchableOpacity>
        {locationDropdownVisible && (
          <View className="bg-white rounded-md shadow-md mt-2">
            <TouchableOpacity
              onPress={() => setLocationDropdownVisible(false)}
              className="px-4 py-2 border-b border-gray-200"
            >
              <Text className="text-base text-gray-700">{userLocation}</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* View Complaints */}
        <TouchableOpacity
          onPress={handleViewComplaints}
          className="flex-row items-center justify-between p-4 bg-white rounded-md shadow-sm"
        >
          <View className="flex-row items-center">
            <AntDesign name="eyeo" size={24} color="#4B5563" />
            <Text className="ml-4 text-gray-700 text-base font-medium">
              View your Complaints
            </Text>
          </View>
          <AntDesign name="right" size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
