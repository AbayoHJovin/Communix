// import { StyleSheet, Text, View } from "react-native";
// import React, { useEffect } from "react";
// import { Slot, SplashScreen, Stack } from "expo-router";
// import { useFonts } from "expo-font";
// SplashScreen.preventAutoHideAsync();
// const RootLayout = () => {
//   const [fontsLoaded, error] = useFonts({
//     "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
//     "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
//     "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
//     "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
//     "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
//     "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
//     "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
//     "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
//     "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
//   });

//   useEffect(() => {
//     if (error) throw error;
//     if (fontsLoaded) SplashScreen.hideAsync();
//   }, [fontsLoaded, error]);
//   if (!fontsLoaded && !error) return null;
//   return (
//       <Stack>
//         <Stack.Screen name="./index.tsx" options={{ headerShown: false }} />
//         <Stack.Screen name="onBoarding/Signup" options={{ headerShown: false }} />
//         <Stack.Screen name="onBoarding/Login" options={{ headerShown: false }} />
//       </Stack>
//   );
// };

// export default RootLayout;










import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        if (!fontsLoaded) {
          // Prevent the splash screen from hiding prematurely
          await SplashScreen.preventAutoHideAsync();
        }
      } catch (e) {
        console.warn(e);
      } finally {
        if (fontsLoaded) {
          // Hide the splash screen once fonts are loaded
          await SplashScreen.hideAsync();
        }
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Render nothing while fonts are loading
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="onBoarding/Signup" options={{ headerShown: false }} />
      <Stack.Screen name="onBoarding/Login" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
