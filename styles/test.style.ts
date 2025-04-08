import { Dimensions, StyleSheet } from "react-native";

// const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  storiesHeader: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  storiesList: {
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  storyItem: {
    alignItems: "center",
    marginRight: 15,
  },
  storyCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  unseenStory: {
    borderColor: "#3897f0",
  },
  storyAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyUsername: {
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  progressBarContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  progressBarBackground: {
    flex: 1,
    height: 2,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginHorizontal: 2,
    borderRadius: 1,
    overflow: "hidden",
  },
  progressBarActive: {
    height: "100%",
    backgroundColor: "white",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#3897f0",
    marginRight: 10,
  },
  username: {
    color: "white",
    fontWeight: "bold",
    flex: 1,
  },
  time: {
    color: "white",
    opacity: 0.7,
  },
  media: {
    width: "100%",
    height: "100%",
  },
  navArea: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "50%",
    zIndex: 5,
  },
  leftArea: {
    left: 0,
  },
  rightArea: {
    right: 0,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 20,
  },
  closeText: {
    color: "white",
    fontSize: 30,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    zIndex: 10,
  },
  reactionButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  reactionEmoji: {
    fontSize: 24,
  },
});
