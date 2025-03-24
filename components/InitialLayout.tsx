import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import Loader from "./Loader";

export default function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;
    const inAuthScreen = segments[0] === "(auth)";
    if (!isSignedIn && !inAuthScreen) router.replace("/(auth)/login");
    else if (isSignedIn && inAuthScreen) router.replace("/(tabs)/home");
  }, [isLoaded, isSignedIn, segments]);

  if (!isLoaded) return <Loader />;
  return <Stack screenOptions={{ headerShown: false }} />;
}

// 1- isLoaded is a boolean that indicates whether the Clerk SDK has loaded.
// 2- isSignedIn is a boolean that indicates whether the user is signed in.
// 3- segments is an array of strings that represent the current path segments.
