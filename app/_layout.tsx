// import { StyleSheet, Text, View } from "react-native";
// import React, { useEffect } from "react";
// import { SplashScreen, Stack } from "expo-router";
// import { useFonts } from "expo-font";
// import { StatusBar } from "expo-status-bar";

// const RootLayout = () => {
//   const [fontsLoaded] = useFonts({
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
//     async function prepare() {
//       try {
//         if (!fontsLoaded) {
//           // Prevent the splash screen from hiding prematurely
//           await SplashScreen.preventAutoHideAsync();
//         }
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         if (fontsLoaded) {
//           await SplashScreen.hideAsync();
//         }
//       }
//     }
//     prepare();
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null; // Render nothing while fonts are loading
//   }

//   return (
//     // <View>
//     <Stack>
//       <Stack.Screen name="index" options={{ headerShown: false }} />
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       <Stack.Screen name="onBoarding/Signup" options={{ headerShown: false }} />
//       <Stack.Screen name="onBoarding/Login" options={{ headerShown: false }} />
//    {/* <StatusBar style="auto" /> */}
//     </Stack>
//     // {/* </View> */}
//   );
// };

// export default RootLayout;













import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    // Add other fonts as needed
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
    return null; // Render nothing while fonts are loading
  }

  return (
    <Stack>
      {/* Define your routes */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="onBoarding/onBoarding" options={{ headerShown: false }} />
      <Stack.Screen name="onBoarding/Signup" options={{ headerShown: false }} />
      <Stack.Screen name="onBoarding/Login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)/_layout" options={{ headerShown: false }} />
      <Stack.Screen name="screens/ComplaintExplanation" options={{ headerShown: false }} />
    </Stack>
  );
}
