import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "@/styles/feed.styles";
import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
// import Story from "@/components/Story";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
export default function Feed() {
  const { signOut } = useAuth();
  const stories = useQuery(api.stories.getAllStories);

  if (!stories) return <Text>Loading...</Text>;

  const allStories = [...stories.nonViewedStories, ...stories.viewedStories];
  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Spotzy</Text>
        <TouchableOpacity onPress={() => signOut()}>
          <Ionicons name="log-out-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Stories */}

        <ScrollView
          horizontal
          style={styles.storiesContainer}
          showsHorizontalScrollIndicator={false}
        ></ScrollView>
      </ScrollView>
    </View>
  );
}
