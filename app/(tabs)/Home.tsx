import React, { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import Bell from "@/assets/svg/Bell";
import SearchButton from "@/assets/svg/SearchButton";
import ComplaintComponent from "@/components/custom/ComplaintComponent";
import { router } from "expo-router";
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

const Home = () => {
  const complaints = useContext(ComplaintsContext) as Complaint[]
  function onClick() {}
  function onPin() {
    console.log("Pinned!");
  }

  return (
    <ScrollView className="bg-gray-50">
      <View className="bg-[#25B14C] w-full h-60 p-5 flex flex-col justify-evenly">
        <View className="flex flex-row items-center justify-between">
          <Image
            source={require("../../assets/images/userImage.png")}
            resizeMode="cover"
            className="w-14 h-14 rounded-full"
          />
          <Text className="text-white font-semibold text-xl">Welcome</Text>
          <Bell />
        </View>
        <View className="flex flex-row items-center mt-5 justify-between space-x-3">
          <TouchableOpacity activeOpacity={0.8}  onPress={()=>router.push("/(tabs)/Search")} className="flex-1 bg-white rounded-xl h-[3.2rem] px-4 py-4 text-gray-600 items-center">
            <Text className="text-[#A9A9A9] ">Search for any complaint</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={()=>router.push("/(tabs)/Search")} className="flex items-center justify-center p-3">
            <SearchButton/>
          </TouchableOpacity>
        </View>
      </View>
      {complaints && complaints.length > 0 ? (
        <View>
          <View className="flex flex-row justify-between p-5">
            <Text className="text-[#25B14C] font-semibold text-lg">
              Your Complaints
            </Text>
            <Text className="text-[#25B14C]">See all</Text>
          </View>
          <FlatList
            data={complaints}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: `/screens/ComplaintExplanation`,
                    params: { complaint: JSON.stringify(item) },
                  })
                }
              >
                <ComplaintComponent
                  complaintBackground={item.backgroundImage}
                  date={item.date}
                  location={item.location}
                  subtitle={item.subtitle}
                  title={item.title}
                  onClick={onClick}
                  onPin={onPin}
                />
              </Pressable>
            )}
            horizontal
            contentContainerStyle={{
              paddingHorizontal: 10,
            }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ) : (
        <View className="flex-1 justify-center items-center h-[350px]">
          <Text className="text-center text-gray-600 text-lg">
            You haven't posted any complaint yet!
          </Text>
        </View>
      )}
      <View className="bg-[#25B14C] mx-5 p-6 rounded-3xl gap-y-4 my-5">
        <Text className="text-white text-lg font-poppinsSemibold">
          Post your problem
        </Text>
        <Text className="text-white text-base w-[16rem] leading-6">
          Take your time and add here your problem and it get solved{" "}
        </Text>
        <TouchableOpacity className="bg-white px-4 py-4 w-[140px] items-center rounded-lg">
          <Text className="text-[#25B14C] text-center font-poppinsSemibold">
            Add Complaint
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;
