import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Svg3 from "@/assets/svg/svg3";
import Splash from "@/assets/images/splash";
import { Link } from "expo-router";
import PhoneInput from "@/components/custom/PhoneInput";
import PhoneInputComponent from "@/components/custom/PhoneInput";
import PhoneInputLib from "react-native-phone-number-input";
import InputField from "@/components/custom/inputField";

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const phoneInputRef = useRef<PhoneInputLib>(null);

  return (
    <SafeAreaView className="flex-1 bg-white pl-5">
      <View className="relative h-1/3">
        <Svg3 />
        <View className="mt-10">
          <Text className="text-green-600 font-bold text-xl mt-20">
            Create Account
          </Text>

          <View className="rounded-full bg-[#fffefe] my-5 shadow-lg shadow-gray-300 w-[90px] h-[90px] justify-center items-center p-1">
            <Splash viewBox="0 0 400 250" />
          </View>
        </View>
      </View>

      <View style={{ paddingHorizontal: 32, marginTop: 20 }}>
      <View style={{ marginBottom: 20 }}>
        <InputField placeholder="Usernames" value={username} setValue={setUsername} />
        <InputField placeholder="Password" value={password} setValue={setPassword} />
      </View>

      <View style={{ backgroundColor: "#F8F8F8", borderRadius: 50, paddingHorizontal: 16 }}>
        <PhoneInputComponent
          phoneInputRef={phoneInputRef}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
      </View>
    </View>

      <View className="px-8 flex-1 items-center" style={{marginTop:40}}>
      <TouchableOpacity activeOpacity={0.7} className="bg-green-600 w-[350px] rounded-md py-3">
      <Text className="text-center text-white font-bold text-lg">Done</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-center text-gray-500  font-medium mt-4">
            Already have an account{"  "}
            <Link
              href="/onBoarding/Login"
              className="text-green-600 font-poppinsSemibold"
            >
              Login
            </Link>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
