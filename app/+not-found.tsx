import { Link, Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View >
        <Text>This screen doesn't exist.</Text>

        {/* Avoid inline style application issues */}
        <Link href="/" >
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   link: {
//     marginTop: 15,
//     paddingVertical: 15,
//   },
//   linkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });
