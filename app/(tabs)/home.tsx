import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "@/styles/feed.styles";
import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
// import Story from "@/components/Story";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { STORIES } from "@/constants/mock-data";
import Story from "@/components/Story";
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
        >
          {STORIES.map((story) => (
            <Story key={story.id} story={story} />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
