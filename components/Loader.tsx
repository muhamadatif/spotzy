import { View, ActivityIndicator } from "react-native";

export default function Loader() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff", // Change if needed
      }}
    >
      <ActivityIndicator size="large" color="#007bff" />
    </View>
  );
}
