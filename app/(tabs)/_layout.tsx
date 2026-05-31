import { Tabs, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export default function TabLayout() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/(auth)/login");
    }
  }, [user]);

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#111" },
        headerTintColor: "gold",
        tabBarStyle: { backgroundColor: "#111" },
        tabBarActiveTintColor: "gold",
        tabBarInactiveTintColor: "#777",
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Кузня" }} />
      <Tabs.Screen name="create" options={{ title: "Створити" }} />
      <Tabs.Screen name="explore" options={{ title: "Налаштування" }} />
    </Tabs>
  );
}