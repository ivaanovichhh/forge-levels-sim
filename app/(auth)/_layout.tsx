import { Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#111" },
        headerTintColor: "gold",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="login" options={{ title: "Вхід" }} />
      <Stack.Screen name="register" options={{ title: "Реєстрація" }} />
    </Stack>
  );
}