import {
  View,
  Text,
  // Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { styles } from "@/styles/auth.styles";
import Logo from "@/components/Logo";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { useSSO } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import Loader from "@/components/Loader";
export default function login() {
  const [loading, setLoading] = useState(false);

  const { startSSOFlow } = useSSO();

  const router = useRouter();
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
      });
      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });

        router.push("/(tabs)/home");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <View style={styles.brandSection}>
        <Logo height={100} width={100} />
        <Text style={styles.appName}>Spotzy</Text>
        <Text style={styles.tagline}>
          Share the Moment, Live the Connection.
        </Text>
      </View>
      <View style={styles.loginImageContainer}>
        <Image
          source={require("../../assets/images/login.png")}
          style={styles.loginImage}
          contentFit="cover"
          transition={200}
        />
      </View>
      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleLogin}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={28} color={COLORS.primary} />
          </View>
          <Text>Continue with Google</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By Continuing, you agree or Terms and Privacy Policy
        </Text>
      </View>
    </View>
  );
}
