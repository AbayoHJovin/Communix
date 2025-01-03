
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";

interface ProfileProps {
  navigation: any;
}

const ProfileSelector: React.FC<ProfileProps> = ({ navigation }) => {
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
    <View className="flex-1">
      <View className="mt-8 space-y-4 px-4">
        <TouchableOpacity
          onPress={() => setLanguageDropdownVisible(!languageDropdownVisible)}
          className="flex-row items-center justify-between p-4 rounded-md"
        >
          <View className="flex-row items-center">
            <MaterialIcons name="language" size={24} color="#4B5563" />
            <Text className="ml-4 text-gray-700 text-base font-medium">
              Language ({selectedLanguage})
            </Text>
          </View>
          <AntDesign
            name={languageDropdownVisible ? "down" : "right"}
            size={20}
            color="#9CA3AF"
          />
        </TouchableOpacity>
        {languageDropdownVisible && (
          <View className=" rounded-md mt-2">
            {["English", "French", "Kinyarwanda"].map((language) => (
              <TouchableOpacity
                key={language}
                onPress={() => handleLanguageSelect(language)}
                className="px-4 py-2"
              >
                <Text className="text-base text-gray-700">{language}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Location Menu */}
        <TouchableOpacity
        activeOpacity={0.7}
          onPress={() => setLocationDropdownVisible(!locationDropdownVisible)}
          className="flex-row items-center justify-between p-4 rounded-md"
        >
          <View className="flex-row items-center">
            <Feather name="map-pin" size={24} color="#4B5563" />
            <Text className="ml-4 text-gray-700 text-base font-medium">
              Location ({userLocation})
            </Text>
          </View>
          <AntDesign
            name={locationDropdownVisible ? "down" : "right"}
            size={20}
            color="#9CA3AF"
          />
        </TouchableOpacity>
        {locationDropdownVisible && (
          <View className="rounded-md mt-2">
            <TouchableOpacity
              onPress={() => setLocationDropdownVisible(false)}
              className="px-4 py-2"
            >
              <Text className="text-base text-gray-700">{userLocation}</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* View Complaints */}
        <TouchableOpacity
          onPress={handleViewComplaints}
          className="flex-row items-center justify-between p-4  rounded-md"
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

export default ProfileSelector;
