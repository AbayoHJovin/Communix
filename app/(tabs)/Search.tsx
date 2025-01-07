import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/mini";
import { router } from "expo-router";
import MenuIcon from "@/assets/svg/MenuIcon";
import ComplaintListCard from "@/components/custom/ComponentListCard";
import { ComplaintsContext } from "@/contexts/complaintsContext";
import DropUp from "@/components/custom/DropUp";

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
  backgroundImage: string;
  leader: Leader;
  category: string;
}

const Search = () => {
  const complaints = useContext(ComplaintsContext) as Complaint[];
  const [filteredComplaints, setFilteredComplaints] = useState<Complaint[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showNull, setShowNull] = useState<boolean>(false);
  const [isDropUpVisible, setDropUpVisible] = useState<boolean>(false);

  // Filters
  const [filters, setFilters] = useState<{
    categories: string[];
    date: string | null;
    location: string | null;
  }>({ categories: [], date: null, location: null });

  // Handle Filtering
  const applyFilters = () => {
    let filtered: Complaint[] = complaints;

    // Filter by category
    if (filters.categories.length > 0) {
      filtered = filtered.filter((complaint) =>
        filters.categories.includes(complaint.category)
      );
    }

    // Filter by date
    if (filters.date) {
      filtered = filtered.filter((complaint) => complaint.day === filters.date);
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter((complaint) =>
        complaint.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((complaint) =>
        complaint.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredComplaints(filtered);
  };

  // Apply filters whenever inputs change
  useEffect(() => {
    applyFilters();
  }, [searchQuery, filters]);

  useEffect(() => {
    setShowNull(filteredComplaints.length === 0);
  }, [filteredComplaints]);

  return (
    <ScrollView className="bg-white min-h-screen p-5">
      {/* Header */}
      <View className="flex flex-row items-center">
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

      {/* Search Input */}
      <View className="flex flex-row items-center mt-5 justify-between space-x-3">
        <TextInput
          onChangeText={(text) => setSearchQuery(text)}
          className="flex-1 bg-[#F8F8F8] rounded-xl h-16 px-4 py-2 text-gray-600"
          placeholder="Search for any complaint"
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity
          className="flex items-center justify-center p-3"
          onPress={() => setDropUpVisible(true)}
        >
          <MenuIcon />
        </TouchableOpacity>
      </View>

      {/* Complaints */}
      {showNull ? (
        <View className="flex-1 justify-center items-center mt-10">
          <Text className="text-center text-gray-600">
            No such complaint exists
          </Text>
        </View>
      ) : (
        filteredComplaints.map((complaint) => (
          <ComplaintListCard
            key={complaint.id}
            date={complaint.date}
            day={complaint.day}
            time={complaint.time}
            title={complaint.title}
            imageUri={complaint.backgroundImage}
          />
        ))
      )}

            <DropUp
              onFilterSelect={(selectedFilters) => {
                setFilters(selectedFilters);
              }}
              isModalVisible={isDropUpVisible}
              toggleModal={() => setDropUpVisible(!isDropUpVisible)}
            />
    </ScrollView>
  );
};

export default Search;
