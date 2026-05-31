import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useAuth();
  const router = useRouter();

  const handle = () => {
    const ok = register(login, password);

    if (ok) {
      router.replace("/(tabs)");
    } else {
      alert("Такий користувач вже є");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <TextInput
        placeholder="login"
        placeholderTextColor="#777"
        style={styles.input}
        onChangeText={setLogin}
      />

      <TextInput
        placeholder="password"
        placeholderTextColor="#777"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <Pressable style={styles.btn} onPress={handle}>
        <Text style={styles.btnText}>Створити акаунт</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", backgroundColor: "#111", padding: 20 },
  title: { color: "gold", fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: { backgroundColor: "#222", color: "white", padding: 10, marginBottom: 10 },
  btn: { backgroundColor: "gold", padding: 12 },
  btnText: { textAlign: "center", fontWeight: "bold" },
});