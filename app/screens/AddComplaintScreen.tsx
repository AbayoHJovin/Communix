import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TitleScreen = ({ setComplaintData }: any) => {
  const [title, setTitle] = useState("");

  return (
    <View className="flex-1 p-4">
      <Text className="text-lg font-bold mb-2">
        Enter the title of your complaint:
      </Text>
      <TextInput
        className="border border-gray-300 rounded-md p-2"
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TouchableOpacity
        className="mt-4 bg-green-500 rounded-md p-2"
        onPress={() => setComplaintData((prev: any) => ({ ...prev, title }))}
      >
        <Text className="text-white text-center">Save Title</Text>
      </TouchableOpacity>
    </View>
  );
};

const DescriptionScreen = ({ setComplaintData }: any) => {
  const [description, setDescription] = useState("");

  return (
    <View className="flex-1 p-4">
      <Text className="text-lg font-bold mb-2">
        Enter the description of your complaint:
      </Text>
      <TextInput
        className="border border-gray-300 rounded-md p-2"
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline
      />
      <TouchableOpacity
        className="mt-4 bg-green-500 rounded-md p-2"
        onPress={() =>
          setComplaintData((prev: any) => ({ ...prev, description }))
        }
      >
        <Text className="text-white text-center">Save Description</Text>
      </TouchableOpacity>
    </View>
  );
};

const OthersScreen = ({ setComplaintData }: any) => {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  return (
    <View className="flex-1 p-4">
      <Text className="text-lg font-bold mb-2">Date:</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-2"
        placeholder="Choose date"
        value={date}
        onChangeText={(text) => setDate(text)}
      />
      <Text className="text-lg font-bold mt-4 mb-2">Location:</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-2"
        placeholder="Enter location"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
      <TouchableOpacity
        className="mt-4 bg-green-500 rounded-md p-2"
        onPress={() =>
          setComplaintData((prev: any) => ({ ...prev, date, location }))
        }
      >
        <Text className="text-white text-center">Save Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const AddComplaintScreen = () => {
  const [complaintData, setComplaintData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const handlePostComplaint = () => {
    console.log("Complaint Submitted:", complaintData);
    // Submit the data to your backend API here
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName:
              | "document-text-outline"
              | "chatbox-ellipses-outline"
              | "options-outline" = "document-text-outline";
            if (route.name === "Title") {
              iconName = "document-text-outline";
            } else if (route.name === "Description") {
              iconName = "chatbox-ellipses-outline";
            } else if (route.name === "Others") {
              iconName = "options-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Title">
          {() => <TitleScreen setComplaintData={setComplaintData} />}
        </Tab.Screen>
        <Tab.Screen name="Description">
          {() => <DescriptionScreen setComplaintData={setComplaintData} />}
        </Tab.Screen>
        <Tab.Screen name="Others">
          {() => <OthersScreen setComplaintData={setComplaintData} />}
        </Tab.Screen>
      </Tab.Navigator>
      <View className="absolute bottom-8 left-4 right-4">
        <TouchableOpacity
          className="bg-green-500 rounded-md p-4"
          onPress={handlePostComplaint}
        >
          <Text className="text-white text-center text-lg">Post Complaint</Text>
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
};

export default AddComplaintScreen;
