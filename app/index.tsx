import React from "react";
import CustomButton from "@/components/custom/CustomButton";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import FirstSlide from "./onBoarding/Slides/FirstSlide";
import SecondSlide from "./onBoarding/Slides/SecondSlide";
import ThirdSlide from "./onBoarding/Slides/ThirdSlide";
import Signup from "./onBoarding/Signup";
import Login from "./onBoarding/Login";
import SlideProvider from "@/contexts/slideContext";
import OnBoarding from "./onBoarding/onBoarding";
import LandingPage from "./screens/LandingPage";

export default function App() {
  // <SlideProvider>
  //   <OnBoarding />
  //  </SlideProvider>
  return <LandingPage />;
}
