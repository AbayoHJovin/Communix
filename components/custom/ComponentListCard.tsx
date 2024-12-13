import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface ComplaintListCardProps {
  date: string;
  day: string;
  time: string;
  title: string;
  imageUri: ImageSourcePropType;
}

const ComplaintListCard: React.FC<ComplaintListCardProps> = ({
  date,
  day,
  time,
  title,
  imageUri,
}) => {
  return (
    <View className="flex-row items-center bg-white shadow-md rounded-lg overflow-hidden p-4 my-2">
      <Image
        source={imageUri}
        className="w-16 h-16 rounded-lg"
        resizeMode="cover"
      />

      <View className="ml-4 flex-1">
        <Text className="text-green-600 text-xs font-semibold uppercase">
          {date} - {day} - {time}
        </Text>
        <Text className="text-gray-800 text-sm font-medium mt-1">
          {title}
        </Text>
      </View>
    </View>
  );
};

export default ComplaintListCard