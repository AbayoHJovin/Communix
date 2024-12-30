// import React, { useContext, useEffect } from "react";
// import { SplashScreen, Stack } from "expo-router";
// import { useFonts } from "expo-font";
// import ComplaintsProvider from "@/contexts/complaintsContext";
// import CheckLeader, { LeaderContext } from "@/contexts/CheckLeader";
// import { Text } from "react-native";

// export default function RootLayout() {
//   const [fontsLoaded] = useFonts({
//     "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
//     "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
//     "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
//   });

//   useEffect(() => {
//     async function prepare() {
//       try {
//         if (!fontsLoaded) {
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
//     return null;
//   }
// const checkTheLeader = useContext(LeaderContext);
// if(!checkTheLeader){
//   return <Text>No context</Text>
// }
// const {isLeader}=checkTheLeader!;
// function getScreens(){
//   return (
//     <Stack>
//     <Stack.Screen name="index" options={{ headerShown: false }} />
//     <Stack.Screen name="onBoarding/onBoarding" options={{ headerShown: false }} />
//     <Stack.Screen name="onBoarding/Signup" options={{ headerShown: false }} />
//     <Stack.Screen name="onBoarding/Login" options={{ headerShown: false }} />
//     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//     <Stack.Screen name="screens/ComplaintExplanation" options={{ headerShown: false }} />
//   </Stack>
//   )
// }
//   return (
//     <CheckLeader>
//     <ComplaintsProvider>
//       {getScreens()}
//     </ComplaintsProvider>
//     </CheckLeader>
//   );
// }



import React, { useContext, useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import ComplaintsProvider from "@/contexts/complaintsContext";
import CheckLeader, { LeaderContext } from "@/contexts/CheckLeader";
import {CurrentUserContext, UsersProvider } from "@/contexts/CurrentUserContext";
import { Text } from "react-native";

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

  const leaderContext = useContext(LeaderContext);
  if (!leaderContext) {
    return <Text>No leader context available</Text>;
  }

  const { isLeader } = leaderContext;

  function getScreens() {
    return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="onBoarding/onBoarding"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onBoarding/Signup"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onBoarding/Login"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="screens/ComplaintExplanation"
          options={{ headerShown: false }}
        />
      </Stack>
    );
  }

  return (
    <CheckLeader>
      <ComplaintsProvider>
        <UsersProvider>{getScreens()}</UsersProvider>
      </ComplaintsProvider>
    </CheckLeader>
  );
}
