// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import { Ionicons } from "@expo/vector-icons";

// interface ComplaintData {
//   image: string | null;
//   title: string;
//   description: string;
//   date: Date | null;
//   location: string;
// }

// interface AddComplaintScreenProps {
//   navigation: any;
// }

// const AddComplaintScreen: React.FC<AddComplaintScreenProps> = ({ navigation }) => {
//   const [step, setStep] = useState<number>(1);
//   const [complaintData, setComplaintData] = useState<ComplaintData>({
//     image: null,
//     title: "",
//     description: "",
//     date: null,
//     location: "",
//   });
//   const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

//   useEffect(() => {
//     (async () => {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== "granted") {
//         Alert.alert("Permission required", "Please allow access to the gallery to upload an image.");
//       }
//     })();
//   }, []);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
//     if (!result.canceled && result.assets) {
//       setComplaintData((prev) => ({ ...prev, image: result.assets[0].uri }));
//     }
//   };

//   const removeImage = () => {
//     setComplaintData((prev) => ({ ...prev, image: null }));
//   };

//   const handleDateChange = (event: any, selectedDate?: Date) => {
//     setShowDatePicker(false);
//     if (selectedDate && selectedDate <= new Date()) {
//       setComplaintData((prev) => ({ ...prev, date: selectedDate }));
//     }
//   };

//   return (
//     <ScrollView style={{ flex: 1, padding: 16 }}>
//       <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>Add New Complaint</Text>
//       <View style={{ alignItems: "center" }}>
//         {complaintData.image ? (
//           <View style={{ position: "relative" }}>
//             <Image source={{ uri: complaintData.image }} style={{ width: 200, height: 200, borderRadius: 12 }} />
//             <TouchableOpacity onPress={removeImage} style={{ position: "absolute", top: 5, right: 5, backgroundColor: "#ff0000", borderRadius: 15, padding: 5 }}>
//               <Ionicons name="trash" size={20} color="#fff" />
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <TouchableOpacity onPress={pickImage} style={{ padding: 20, borderWidth: 1, borderRadius: 12, borderColor: "#ccc", alignItems: "center" }}>
//             <Ionicons name="camera-outline" size={40} color="#666" />
//             <Text style={{ marginTop: 8, color: "#666" }}>Upload Image</Text>
//           </TouchableOpacity>
//         )}
//       </View>

//       <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 16 }}>
//         {["Title", "Description", "Others"].map((tab, index) => (
//           <TouchableOpacity key={index} onPress={() => setStep(index + 1)} style={{ padding: 10, borderBottomWidth: 3, borderBottomColor: step === index + 1 ? "green" : "#ccc" }}>
//             <Text style={{ fontSize: 16, color: step === index + 1 ? "green" : "#666" }}>{tab}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {step === 1 && (
//         <TextInput style={{ borderWidth: 1, borderRadius: 8, padding: 10, borderColor: "#ccc" }} placeholder="Enter complaint title" value={complaintData.title} onChangeText={(text) => setComplaintData((prev) => ({ ...prev, title: text }))} />
//       )}
//       {step === 2 && (
//         <TextInput style={{ borderWidth: 1, borderRadius: 8, padding: 10, borderColor: "#ccc", height: 100 }} placeholder="Enter complaint description" multiline value={complaintData.description} onChangeText={(text) => setComplaintData((prev) => ({ ...prev, description: text }))} />
//       )}
//       {step === 3 && (
//         <View>
//           <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{ backgroundColor: "#4CAF50", borderRadius: 8, padding: 12, marginBottom: 10 }}>
//             <Text style={{ color: "white", textAlign: "center" }}>Choose from Calendar</Text>
//           </TouchableOpacity>
//           <TextInput style={{ borderWidth: 1, borderRadius: 8, padding: 10, borderColor: "#ccc" }} placeholder="Enter location" value={complaintData.location} onChangeText={(text) => setComplaintData((prev) => ({ ...prev, location: text }))} />
//         </View>
//       )}
//     </ScrollView>
//   );
// };

// export default AddComplaintScreen;





import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

interface ComplaintData {
  image: string | null;
  title: string;
  description: string;
  date: Date | null;
  location: string;
}

interface AddComplaintScreenProps {
  navigation: any;
}

const AddComplaintScreen: React.FC<AddComplaintScreenProps> = ({ navigation }) => {
  const [step, setStep] = useState<number>(3);
  const [complaintData, setComplaintData] = useState<ComplaintData>({
    image: null,
    title: "",
    description: "",
    date: null,
    location: "",
  });
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission required", "Please allow access to the gallery to upload an image.");
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled && result.assets) {
      setComplaintData((prev) => ({ ...prev, image: result.assets[0].uri }));
    }
  };

  const removeImage = () => {
    setComplaintData((prev) => ({ ...prev, image: null }));
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate && selectedDate <= new Date()) {
      setComplaintData((prev) => ({ ...prev, date: selectedDate }));
    }
  };

  const isFormValid = () => {
    return (
      complaintData.image &&
      complaintData.title.trim() !== "" &&
      complaintData.description.trim() !== "" &&
      complaintData.date !== null &&
      complaintData.location.trim() !== ""
    );
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16, color: "#3D3B3B" }}>Add New Complaint</Text>
      <View style={{ width: "90%", alignItems: "center" }}>
        {complaintData.image ? (
          <View style={{ position: "relative", width: "100%" }}>
            <Image source={{ uri: complaintData.image }} style={{ width: "100%", height: 250, borderRadius: 12, marginHorizontal: 16 }} />
            <TouchableOpacity onPress={removeImage} style={{ position: "absolute", top: 5, right: 5, backgroundColor: "#ff0000", borderRadius: 15, padding: 5 }}>
              <Ionicons name="trash" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={pickImage} style={{ padding: 20, borderWidth: 1, borderRadius: 12, borderColor: "#ccc", alignItems: "center" }}>
            <Ionicons name="camera-outline" size={40} color="#666" />
            <Text style={{ marginTop: 8, color: "#666" }}>Upload Image</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 16, width: "100%" }}>
        {["Title", "Description", "Others"].map((tab, index) => (
          <TouchableOpacity key={index} onPress={() => setStep(index + 1)} style={{ padding: 10, borderBottomWidth: 3, borderBottomColor: step === index + 1 ? "green" : "#ccc" }}>
            <Text style={{ fontSize: 16, color: step === index + 1 ? "green" : "#3D3B3B" }}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {step === 1 && (
        <TextInput style={{ borderWidth: 1, borderRadius: 8, padding: 10, borderColor: "#ccc", width: "90%" }} placeholder="Enter complaint title" value={complaintData.title} onChangeText={(text) => setComplaintData((prev) => ({ ...prev, title: text }))} />
      )}
      {step === 2 && (
        <TextInput style={{ borderWidth: 1, borderRadius: 8, padding: 10, borderColor: "#ccc", height: 100, width: "90%" }} placeholder="Enter complaint description" multiline value={complaintData.description} onChangeText={(text) => setComplaintData((prev) => ({ ...prev, description: text }))} />
      )}
      {step === 3 && (
        <View style={{ width: "90%", alignItems: "center" }}>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{ backgroundColor: "#4CAF50", borderRadius: 8, padding: 12, marginBottom: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Choose from Calendar</Text>
          </TouchableOpacity>
          {showDatePicker && <DateTimePicker value={complaintData.date || new Date()} mode="date" display="default" maximumDate={new Date()} onChange={handleDateChange} />}
          <TextInput style={{ borderWidth: 1, borderRadius: 8, padding: 10, borderColor: "#ccc", width: "100%" }} placeholder="Enter location" value={complaintData.location} onChangeText={(text) => setComplaintData((prev) => ({ ...prev, location: text }))} />
        </View>
      )}
      <Button title="Save" onPress={() => Alert.alert("Complaint Saved")} disabled={!isFormValid()} color={isFormValid() ? "#4CAF50" : "#ccc"} />
    </ScrollView>
  );
};

export default AddComplaintScreen;
