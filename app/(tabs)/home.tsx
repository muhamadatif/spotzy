import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Link } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
export default function Index() {
  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      <Link href="/notifications">visit notifications screen</Link>
      <TouchableOpacity style={styles.container} onPress={() => signOut()}>
        <Text style={{ color: "white", padding: 4, backgroundColor: "red" }}>
          Signout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
