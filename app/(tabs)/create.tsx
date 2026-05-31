import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function CreateScreen() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");

  const addItem = () => {
    console.log("Додано:", name, level);

    setName("");
    setLevel("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Додати предмет</Text>

      <TextInput
        placeholder="Назва (Меч, Щит...)"
        placeholderTextColor="#777"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Рівень"
        placeholderTextColor="#777"
        value={level}
        onChangeText={setLevel}
        keyboardType="numeric"
        style={styles.input}
      />

      <Pressable style={styles.btn} onPress={addItem}>
        <Text style={{ color: "black", fontWeight: "bold" }}>
          Додати
        </Text>
      </Pressable>
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
    marginBottom: 10,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "gold",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
});