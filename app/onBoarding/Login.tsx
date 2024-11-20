import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Splash from "@/assets/images/splash";
import { Link } from "expo-router";
import PhoneInput from "@/components/custom/PhoneInput";
import PhoneInputComponent from "@/components/custom/PhoneInput";
import PhoneInputLib from "react-native-phone-number-input";
import InputField from "@/components/custom/inputField";
import Svg4 from "@/assets/svg/svg4";
import Svg5 from "@/assets/svg/svg5";
import Icon from "react-native-vector-icons/FontAwesome";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const phoneInputRef = useRef<PhoneInputLib>(null);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View>
        <Svg4 />
        <Svg5 />
      </View>
      <View className="mt-20 mb-5 px-10">
        <Text className="text-green-600 font-poppinsBold text-[52px] ">
          Login
        </Text>
        <View className="flex-row  items-center">
          <Text className="text-[19px] mr-2">Good to see you back!</Text>{" "}
          <Icon name="heart" size={20} color="green" />
        </View>
      </View>

      <View style={{ paddingHorizontal: 32, marginTop: 20 }}>
        <View
          style={{
            backgroundColor: "#F8F8F8",
            borderRadius: 50,
            paddingHorizontal: 16,
          }}
        >
          <PhoneInputComponent
            phoneInputRef={phoneInputRef}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <InputField
            placeholder="Password"
            value={password}
            setValue={setPassword}
          />
        </View>
      </View>

      <View className="px-8 flex-1 items-center" style={{ marginTop: 40 }}>
        <TouchableOpacity activeOpacity={0.7} className="bg-green-600 w-[350px] rounded-md py-3">
          <Text className="text-center text-white font-bold text-lg">Done</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-center text-gray-500  font-medium mt-4">
            Don't have an account{"  "}
            <Link
              href="/onBoarding/Signup"
              className="text-green-600 font-poppinsSemibold"
            >
              Register
            </Link>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
