import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import FirstSlide from "./Slides/FirstSlide";
import SecondSlide from "./Slides/SecondSlide";
import ThirdSlide from "./Slides/ThirdSlide";
import { SlideContext } from "@/contexts/slideContext";

const OnBoarding = () => {
  const context = useContext(SlideContext);
  if(!context){
    return <Text>No context is availble</Text>
  }
  const { currentSlide } = context!;


  return (
    <View className="h-screen">
      {currentSlide === 1 ? (
        <FirstSlide />
      ) : currentSlide === 2 ? (
        <SecondSlide />
      ) : currentSlide === 3 ? (
        <ThirdSlide />
      ) :<Text>Slide Not Found</Text>}
    </View>
  );
};

export default OnBoarding;

