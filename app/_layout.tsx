import React, { useContext, useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import ComplaintsProvider from "@/contexts/complaintsContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        if (!fontsLoaded) {
          await SplashScreen.preventAutoHideAsync();
        }
      } catch (e) {
        console.warn(e);
      } finally {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <ComplaintsProvider>
       <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="onBoarding/onBoarding" options={{ headerShown: false }} />
    <Stack.Screen name="onBoarding/Signup" options={{ headerShown: false }} />
    <Stack.Screen name="onBoarding/Login" options={{ headerShown: false }} />
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="screens/ComplaintExplanation" options={{ headerShown: false }} />
  </Stack>
    </ComplaintsProvider>
  );
}

