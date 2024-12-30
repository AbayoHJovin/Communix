import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
interface PropsDef {
  toggleModal: () => void;
  isModalVisible: boolean;
}
const ComplaintOptions = ({ toggleModal, isModalVisible }: PropsDef) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            justifyContent: "flex-end",
          }}
          onPress={toggleModal}
        >
        <TouchableWithoutFeedback>
  <View className="bg-white rounded-t-3xl py-16 px-6">
    <Text className="text-center text-xl font-bold mb-6">
      Choose an action
    </Text>
    <View className="flex flex-row justify-between items-center mx-6">
      <Pressable
        onPress={() => {
          console.log("Share problem");
          toggleModal();
        }}
        className="flex flex-col items-center space-y-2"
      >
        <View className="bg-[#EFE9E9] p-4 rounded-[12px]">
          <Feather name="share-2" size={24} color="#7D7E93" />
        </View>
        <Text className="text-center text-sm font-medium text-gray-600">
          Share problem
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          console.log("Edit problem");
          toggleModal();
        }}
        className="flex flex-col items-center space-y-2"
      >
        <View className="bg-[#25B14C] p-4 rounded-[12px]">
          <Feather name="edit" size={24} color="#FFFFFF" />
        </View>
        <Text className="text-center text-sm font-medium text-gray-600">
          Edit problem
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          console.log("Delete problem");
          toggleModal();
        }}
        className="flex flex-col items-center space-y-2"
      >
        <View className="bg-[#F2583E] p-4 rounded-[12px]">
          <Feather name="trash" size={24} color="#FFFFFF" />
        </View>
        <Text className="text-center text-sm font-medium text-gray-600">
          Delete problem
        </Text>
      </Pressable>
    </View>

    <Pressable
      onPress={toggleModal}
      className="mt-8 mx-6 bg-[#25B14C] py-4 rounded-lg"
    >
      <Text className="text-center text-lg text-white font-semibold">
        Cancel
      </Text>
    </Pressable>
  </View>
</TouchableWithoutFeedback>

        </Pressable>
      </Modal>
    </View>
  );
};

export default ComplaintOptions;
