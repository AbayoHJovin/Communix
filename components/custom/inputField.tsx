import { View, Text, TextInput } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

interface PropsValidation {
  placeholder: string;
  value: string | number;
  setValue: (newValue: string) => void; 
}

const InputField = ({ placeholder, value, setValue }: PropsValidation) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={String(value)}
      onChangeText={(text) => setValue(text)} 
      style={{
        height: 60,
        width: "100%",
        backgroundColor: "#F8F8F8",
        borderRadius: 50, 
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 16,
        marginTop:15
      }}
    />
  );
};

export default InputField;
