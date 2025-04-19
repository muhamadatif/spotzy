import { View, Text, FlatList } from "react-native";
import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Loader from "@/components/Loader";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/notifications.styles";
import Notification from "@/components/Notification";

export default function Notifications() {
  const notifications = useQuery(api.notifications.getNotifications);
  if (notifications === undefined) return <Loader />;
  if (notifications.length === 0) return <NoNotificationsFound />;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item._id}
        data={notifications}
        renderItem={({ item }) => <Notification notification={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function NoNotificationsFound() {
  return (
    <View style={[styles.container, styles.centered]}>
      <Ionicons name="notifications-outline" size={48} color={COLORS.primary} />
      <Text style={{ fontSize: 20, color: COLORS.primary }}>
        No notifications yet
      </Text>
    </View>
  );
}
