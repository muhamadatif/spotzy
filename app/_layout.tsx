import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <Stack screenOptions={{ headerShown: false }}></Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Notes
// 1- SafeAreaProvider is a component that wraps your entire app and provides a context for SafeAreaView to use.

// 2- SafeAreaView is a component that renders a view that respects the safe area of the device.
//This is useful for ensuring that your app's content is not obscured by the device's status bar, notch, or home indicator.

// 3- Stack is a component that renders a stack of screens. Each screen is represented by a Stack.Screen component.
// The screenOptions prop allows you to customize the appearance and behavior of the stack.

// 4- The Stack.Screen components represent the different screens in your app. Each screen has a name and options prop that allows you to customize the screen's appearance and behavior.
