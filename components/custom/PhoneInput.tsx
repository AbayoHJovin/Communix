import { View } from 'react-native';
import React, { RefObject } from 'react';
import PhoneInput from 'react-native-phone-number-input';

// Define the Props Interface
interface PhoneInputProps {
  phoneNumber: string;
  setPhoneNumber: (text: string) => void;
  phoneInputRef: RefObject<any>; // Corrected type for PhoneInput ref
}

const PhoneInputComponent = ({
  phoneNumber,
  setPhoneNumber,
  phoneInputRef,
}: PhoneInputProps) => {
  return (
    <View className="bg-[#F8F8F8] rounded-full px-4">
      <PhoneInput
        ref={phoneInputRef}
        defaultValue={phoneNumber}
        defaultCode="RW"
        layout="first"
        onChangeFormattedText={(text) => setPhoneNumber(text)}
        containerStyle={{
          height: 60,
          width: '100%',
          borderRadius: 50,
          backgroundColor: '#F8F8F8',
        }}
        textContainerStyle={{
          borderRadius: 50,
          backgroundColor: '#F8F8F8',
          paddingVertical: 0,
        }}
        textInputStyle={{
          fontSize: 16,
        }}
        withShadow={false}
      />
    </View>
  );
};

export default PhoneInputComponent;
