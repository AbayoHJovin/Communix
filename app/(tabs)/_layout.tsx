// import { Circle } from "react-native-heroicons/mini"; // For solid variant

import { Tabs } from "expo-router";
import { Text, View } from "react-native";

interface PropsDef {
  focused: boolean;
  name: string;
}
function TabIcon({ focused, name }: PropsDef) {
  return (
    <View className="items-center justify-center gap-2">
      <View className="w-10 h-10 rounded-full bg-[#25B14C]">new</View>
      <Text
        className={`${
          focused ? "font-semibold" : "font-poppins-regular"
        } text-xs`}
      >
        {name}
      </Text>
    </View>
  );
}

function TabLayout() {
  return (
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#cf1717",
          tabBarInactiveTintColor: "#cf1717",
          tabBarStyle: {
            paddingVertical: 10,
            paddingHorizontal: 15,
            height: 90,
            backgroundColor: "#cf1717",
            borderTopWidth: 1,
            borderTopColor: "#cf1717",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "index",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} name="index"/>
            ),
          }}
        />
        <Tabs.Screen
          name="Complaints"
          options={{
            title: "Complaints",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} name="Complaints"/>
            ),
          }}
        />
        <Tabs.Screen
          name="Search"
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} name="Search"/>
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} name="Profile"/>
            ),
          }}
        />
      </Tabs>
  );
}

export default TabLayout;

