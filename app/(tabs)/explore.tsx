import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
} from "react-native";

export default function SettingsScreen() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [sound, setSound] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Налаштування кузні
      </Text>

      <View style={styles.row}>
        <Text style={styles.text}>
          Темна тема
        </Text>

        <Switch
          value={darkTheme}
          onValueChange={setDarkTheme}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>
          Звук молота
        </Text>

        <Switch
          value={sound}
          onValueChange={setSound}
        />
      </View>

      <Text style={styles.info}>
        Тема: {darkTheme ? "Темна" : "Світла"}
      </Text>

      <Text style={styles.info}>
        Звук: {sound ? "Увімкнено" : "Вимкнено"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#111",
  },

  title: {
    color: "gold",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  text: {
    color: "white",
    fontSize: 18,
  },

  info: {
    color: "#ddd",
    marginTop: 10,
  },
});