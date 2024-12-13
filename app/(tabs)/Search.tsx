import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ArrowLeftIcon } from "react-native-heroicons/mini";
import { router } from "expo-router";
import MenuIcon from "@/assets/svg/MenuIcon";
import ComplaintListCard from "@/components/custom/ComponentListCard";
import { ComplaintsContext } from "@/contexts/complaintsContext";

interface Leader {
  name: string;
  responsibilities: string;
}

interface Complaint {
  id: number;
  date: string;
  day: string;
  time: string;
  title: string;
  subtitle: string;
  location: string;
  backgroundImage: ImageSourcePropType;
  leader: Leader;
}

const Search = () => {
  const complaints = useContext(ComplaintsContext) as Complaint[];
  const [filteredComplaints, setFilteredComplaints] = useState<Complaint[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showNull, setShowNull] = useState<boolean>(false);
  useEffect(() => {
    if (searchQuery === "" || searchQuery.trim() === "") {
      setFilteredComplaints(complaints);
    } else {
      const filtered:Complaint[] = complaints?.filter((complaint) =>
        complaint.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredComplaints(filtered);
    }
  }, [searchQuery, complaints]);
  useEffect(() => {
    if (!filteredComplaints || filteredComplaints.length === 0) {
      setShowNull(true);
    } else {
      setShowNull(false);
    }
  }, [filteredComplaints]);
  return (
    <ScrollView className="bg-white min-h-screen p-5">
      <View className="flex flex-row items-center ">
        <ArrowLeftIcon
          strokeWidth={1.4}
          stroke={"#3D3B3B"}
          size={25}
          onPress={() => router.back()}
        />

        <Text className="text-[#3D3B3B] ml-2 font-semibold text-2xl">
          Search
        </Text>
      </View>
      <View className="flex flex-row items-center mt-5 justify-between space-x-3">
        <TextInput
          onChangeText={(e) => setSearchQuery(e)}
          className="flex-1 bg-[#F8F8F8] rounded-xl h-16 px-4 py-2 text-gray-600"
          placeholder="Search for any complaint"
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity className="flex items-center justify-center p-3">
          <MenuIcon />
        </TouchableOpacity>
      </View>
      {showNull ? (
        <View className="flex-1 justify-center items-center">
        <Text className="text-center">No such complaint exists</Text>
      </View>
      
      ) : (
        filteredComplaints?.map((complaint) => (
          <ComplaintListCard
            date={complaint.date}
            day={complaint.day}
            time={complaint.time}
            title={complaint.title}
            imageUri={complaint.backgroundImage}
          />
        ))
      )}
    </ScrollView>
  );
};

export default Search;
