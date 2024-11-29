// // import { Circle } from "react-native-heroicons/mini"; // For solid variant

// import { Tabs } from "expo-router";
// import { Text, View } from "react-native";

// interface PropsDef {
//   focused: boolean;
//   name: string;
// }
// function TabIcon({ focused, name }: PropsDef) {
//   return (
//     <View className="items-center justify-center gap-2">
//       <View className="w-10 h-10 rounded-full bg-[#25B14C]"></View>
//       <Text
//         className={`${
//           focused ? "font-semibold" : "font-poppins-regular"
//         } text-xs`}
//       >
//         {name}
//       </Text>
//     </View>
//   );
// }

// function TabsLayout() {
//   return (
//     <>
//       <Tabs
//         screenOptions={{
//           tabBarShowLabel: false,
//           tabBarActiveTintColor: "#FFA001",
//           tabBarInactiveTintColor: "#CDCDE0",
//           tabBarStyle: {
//             paddingVertical: 10,
//             paddingHorizontal: 15,
//             height: 90,
//             backgroundColor: "#161622",
//             borderTopWidth: 1,
//             borderTopColor: "#232533",
//           },
//         }}
//       >
//         <Tabs.Screen
//           name="Home"
//           options={{
//             title: "Home",
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <TabIcon focused={focused} name="Home"/>
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="Complaints"
//           options={{
//             title: "Complaints",
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <TabIcon focused={focused} name="Complaints"/>
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="Search"
//           options={{
//             title: "Search",
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <TabIcon focused={focused} name="Search"/>
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="Profile"
//           options={{
//             title: "Profile",
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <TabIcon focused={focused} name="Profile"/>
//             ),
//           }}
//         />
//       </Tabs>
//     </>
//   );
// }

// export default TabsLayout;








import { Tabs } from "expo-router";
import { Text, View } from "react-native";

interface PropsDef {
  focused: boolean;
  name: string;
}

function TabIcon({ focused, name }: PropsDef) {
  return (
    <View className="items-center justify-center gap-2">
      {/* Circle Icon */}
      <View
        className={`w-10 h-10 rounded-full ${
          focused ? "bg-[#FFA001]" : "bg-[#CDCDE0]"
        }`}
      />
      {/* Label */}
      <Text
        className={`text-xs ${
          focused ? "font-semibold text-[#FFA001]" : "font-poppins-regular text-[#CDCDE0]"
        }`}
      >
        {name}
      </Text>
    </View>
  );
}

const TabsLayout = () => {
    return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: "#0000",
          borderTopWidth: 1,
          borderTopColor: "#232533",
        },
      }}
    >
      {/* Home Screen Tab */}
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} name="Home" />,
        }}
      />
      {/* Complaints Screen Tab */}
      <Tabs.Screen
        name="Complaints"
        options={{
          title: "Complaints",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="Complaints" />
          ),
        }}
      />
      {/* Search Screen Tab */}
      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} name="Search" />,
        }}
      />
      {/* Profile Screen Tab */}
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} name="Profile" />,
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
