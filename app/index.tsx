import React from "react";
import CustomButton from "@/components/custom/CustomButton";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, Tabs } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import FirstSlide from "./onBoarding/Slides/FirstSlide";
import SecondSlide from "./onBoarding/Slides/SecondSlide";
import ThirdSlide from "./onBoarding/Slides/ThirdSlide";
import Signup from "./onBoarding/Signup";
import Login from "./onBoarding/Login";
import SlideProvider from "@/contexts/slideContext";
import OnBoarding from "./onBoarding/onBoarding";
import LandingPage from "./screens/LandingPage";
import "../global.css"
import Home from "./(tabs)/Index";
import Profile from "./(tabs)/Profile";
import TabLayout from "./(tabs)/_layout";
import ComplaintExplanation from "./screens/ComplaintExplanation";


export default function App() {
  return <Home/>
}





// import React from "react";
// import { Slot } from "expo-router"; // This renders child routes
// import SlideProvider from "@/contexts/slideContext";
// import "../global.css";

// export default function App() {
//   return (
//     <SlideProvider>
//       <Slot /> {/* Allows the router to render the appropriate screen */}
//     </SlideProvider>
//   );
// }
