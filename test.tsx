import React, { useEffect } from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";

const ProgressBar = () => {
  const progressAnim = new Animated.Value(0); // Initial progress at 0

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: 100, // Animate to 100
      duration: 2000, // Duration in ms
      useNativeDriver: false, // Required for width animations
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.progressBar,
          {
            width: progressAnim.interpolate({
              //here it convers numbers to strings so that width can realise
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
            }),
          },
        ]}
      />
    </View>
  );
};
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width,
    // height: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
    flex: 1,
    height: 10,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "blue",
  },
});

export default ProgressBar;

// Notes
// 1) useNativeDriver: false, // always false for layout animation "width","height"
// 1) useNativeDriver: true, // true for transfrom and opacity animation because it run the animation in a native UI thread for better animation experience
