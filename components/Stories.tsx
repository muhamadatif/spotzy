import { STORIES } from "@/constants/mock-data";
import { styles } from "@/styles/feed.styles";
import { ScrollView } from "react-native";
import Story from "./Story";

const Stories = () => (
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

export default Stories;
