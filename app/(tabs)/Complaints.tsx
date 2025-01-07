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

const Complaints = () => {
  const complaints = useContext(ComplaintsContext) as Complaint[];
  return (
    <ScrollView className="bg-white min-h-screen p-5">
       <View className="flex flex-row items-center my-5 ">
              <ArrowLeftIcon
                strokeWidth={1.4}
                stroke={"#3D3B3B"}
                size={25}
                onPress={() => router.back()}
              />
      
              <Text className="text-[#3D3B3B] ml-2 font-semibold text-2xl">
                Your complaints
              </Text>
            </View>
       { complaints?.map((complaint) => (
          <ComplaintListCard
          key={complaint.id}
            date={complaint.date}
            day={complaint.day}
            time={complaint.time}
            title={complaint.title}
            imageUri={complaint.backgroundImage}
          />
        ))}
    </ScrollView>
  );
};

export default Complaints;
