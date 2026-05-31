import React from "react";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

export default function Explore() {
  const { user, logout } = useAuth();
  const { theme, toggle } = useTheme();

  const isDark = theme === "dark";

  return (
    <View style={[styles.container, isDark && styles.dark]}>
      <Text style={[styles.title, isDark && styles.darkText]}>
        Налаштування
      </Text>

      <Text style={[styles.text, isDark && styles.darkText]}>
        Користувач: {user?.login || "не авторизовано"}
      </Text>

      <View style={styles.row}>
        <Text style={[styles.text, isDark && styles.darkText]}>
          Темна тема
        </Text>
        <Switch value={isDark} onValueChange={toggle} />
      </View>

      <Pressable style={styles.logout} onPress={logout}>
        <Text style={{ color: "black", fontWeight: "bold" }}>Вийти</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  dark: { backgroundColor: "#111" },
  title: { fontSize: 22, fontWeight: "bold", color: "gold", marginBottom: 20 },
  text: { fontSize: 16, color: "#333", marginBottom: 10 },
  darkText: { color: "#fff" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  logout: {
    marginTop: 20,
    backgroundColor: "gold",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
});