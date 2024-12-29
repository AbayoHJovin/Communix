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
            <View className="bg-white rounded-t-3xl p-16">
              <Text className="text-center text-xl font-bold mb-4">
                Choose an action
              </Text>
              <View className="flex flex-row justify-center">
                <Pressable
                  onPress={() => {
                    console.log("Share problem");
                    toggleModal();
                  }}
                  className="flex flex-col items-center p-4 border-b border-gray-200"
                >
                  <Feather
                    name="share-2"
                    size={24}
                    color="#7D7E93"
                    className="bg-[#EFE9E9] p-3 rounded-[12px]"
                  />
                  <Text className="ml-4 text-lg">Share problem</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    console.log("Edit problem");
                    toggleModal();
                  }}
                  className="flex flex-col items-center p-4 border-b border-gray-200"
                >
                  <Feather
                    name="edit"
                    size={24}
                    color="#FFFF"
                    className="bg-[#25B14C] p-3 rounded-[12px]"
                  />
                  <Text className="ml-4 text-lg">Edit problem</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    console.log("Delete problem");
                    toggleModal();
                  }}
                  className="flex flex-col items-center p-4"
                >
                  <Feather
                    name="trash"
                    size={24}
                    color="#ffff"
                    className="bg-[#F2583E] p-3 rounded-[12px]"
                  />
                  <Text className="ml-4 text-lg">
                    Delete problem
                  </Text>
                </Pressable>
              </View>
              <Pressable
                onPress={toggleModal}
                className="mt-4 bg-[#25B14C] py-4 rounded-lg"
              >
                <Text className="text-center text-lg text-white">Cancel</Text>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </Pressable>
      </Modal>
    </View>
  );
};

export default ComplaintOptions;
