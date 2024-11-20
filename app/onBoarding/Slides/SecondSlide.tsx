import CheckMark from '@/assets/svg/CheckMark';
import English from '@/assets/svg/English';
import Kin from '@/assets/svg/Kin';
import Svg1 from '@/assets/svg/svg1';
import { SlideContext } from '@/contexts/slideContext';
import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Circle } from 'react-native-svg';

const { width } = Dimensions.get('window');

export default function SecondSlide() {
  const [language, setLanguage] = useState('English');
  const context = useContext(SlideContext);
  const { setCurrentSlide } = context!;

  return (
    <SafeAreaView className="flex-1 bg-[#f8fcf9] p-2">
      <Svg1/>
      <View className="flex-1 items-center justify-center">
        <Text className="text-[20px] font-semibold text-[#34C759] px-5 text-center mt-8 mb-4">
          Welcome To Community Complaints
        </Text>
        <Text className="text-lg text-gray-500 text-center mt-2 mx-16">
          Choose your preferred language to use on this app
        </Text>

        <View className="mt-8 w-[80%]">
          <TouchableOpacity
            className="flex-row items-center bg-white py-3 px-5 rounded-lg my-2 justify-between"
            onPress={() => setLanguage('English')}
          >
           <English/>
            <Text className="text-lg text-[#34C759] ml-3 text-center  flex-1">English</Text>
            {language === 'English' && <CheckMark height={18} width={18}/>}
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center bg-white py-3 px-5 rounded-lg my-2 justify-between"
            onPress={() => setLanguage('Kinyarwanda')}
          >
           <Kin/>
            <Text className="text-lg text-[#34C759] ml-3 flex-1 text-center">Kinyarwanda</Text>
            {language === 'Kinyarwanda' && <CheckMark height={18} width={18}/>}
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.7} onPress={()=>setCurrentSlide(3)} className="mt-20 w-[80%] bg-[#34C759] py-4 rounded-lg items-center">
          <Text className="text-white text-lg font-semibold">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
