import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageRequireSource,
} from "react-native";
import React from "react";
import { styles } from "@/styles/feed.styles";

type Story = {
  id: string;
  username: string;
  avatar: ImageRequireSource;
  hasStory: boolean;
};

const Story = ({ story }: { story: Story }) => {
  return (
    <TouchableOpacity style={styles.storyWrapper}>
      <View style={[styles.storyRing, !story.hasStory && styles.noStory]}>
        <Image style={styles.storyAvatar} source={story.avatar} />
      </View>
      <Text style={styles.storyUsername}>{story.username}</Text>
    </TouchableOpacity>
  );
};

export default Story;
