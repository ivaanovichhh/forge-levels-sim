import React, { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";

export default function SettingsScreen() {
  const [sound, setSound] = useState(true);
  const [dark, setDark] = useState(true);
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Налаштування</Text>

      <TextInput
        placeholder="Ім'я гравця"
        placeholderTextColor="#777"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <View style={styles.row}>
        <Text style={styles.text}>Звук</Text>
        <Switch value={sound} onValueChange={setSound} />
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Темна тема</Text>
        <Switch value={dark} onValueChange={setDark} />
      </View>

      <Text style={styles.info}>
        Гравець: {name || "немає"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },
  title: {
    color: "gold",
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#222",
    color: "white",
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  info: {
    color: "#aaa",
    marginTop: 10,
  },
});