import { Tabs } from "expo-router";
import { Text, View, StyleSheet, Dimensions } from "react-native";

interface PropsDef {
  focused: boolean;
  name: string;
}

const screenWidth = Dimensions.get("window").width;

function TabIcon({ focused, name }: PropsDef) {
  return (
    <View style={styles.iconContainer}>
      <View
        style={[
          styles.circle,
          focused ? styles.circleFocused : styles.circleUnfocused,
        ]}
      />
      <Text
        style={[styles.text, focused && styles.textFocused]}
        numberOfLines={1}
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
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#FFFFFF",
        animation: "none",
        tabBarStyle: {
          paddingBottom: 60,
          paddingTop: 30,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          shadowOpacity: 10,
          borderTopColor: "#FFFFFF",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="Home" />
          ),
        }}
      />
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
      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#DDDDDD",
    height: 70,
  },
  iconContainer: {
    width: screenWidth / 4,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  circleUnfocused: {
    backgroundColor: "#25B14C",
    opacity: 0.3,
  },
  circleFocused: {
    backgroundColor: "#25B14C",
    opacity: 1,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 4,
  },
  text: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
  },
  textFocused: {
    fontWeight: "bold",
    color: "#000",
  },
});

export default TabLayout;
