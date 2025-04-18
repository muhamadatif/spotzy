import {
  FlatList,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "@/styles/feed.styles";
import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
// import Story from "@/components/Story";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { STORIES } from "@/constants/mock-data";
import Story from "@/components/Story";
import React from "react";
import Loader from "@/components/Loader";
import Post from "@/components/Post";
import Stories from "@/components/Stories";
export default function Feed() {
  const { signOut } = useAuth();
  const posts = useQuery(api.posts.getFeedPosts);

  if (posts === undefined) return <Loader />;

  if (posts.length === 0) return <NoPostsFound />;

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Spotzy</Text>
        <TouchableOpacity onPress={() => signOut()}>
          <Ionicons name="log-out-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {/* Stories */}

      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        ListHeaderComponent={<Stories />}
      />
    </View>
  );
}

const StroiesSection = () => (
  <ScrollView
    horizontal
    style={styles.storiesContainer}
    showsHorizontalScrollIndicator={false}
  >
    {STORIES.map((story) => (
      <Story key={story.id} story={story} />
    ))}
  </ScrollView>
);

const NoPostsFound = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: COLORS.background,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ fontSize: 20, color: COLORS.primary }}>No posts yet</Text>
  </View>
);

// in convex if
// data === undefiend that mean it's in the loading state,
// data === null that mean it has no value
