import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { login: authLogin } = useAuth();
  const router = useRouter();

  const handle = () => {
    const ok = authLogin(login, password);

    if (ok) {
      router.replace("/(tabs)");
    } else {
      alert("Невірний логін");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Авторизація</Text>

      <TextInput
        placeholder="Логін"
        style={styles.input}
        value={login}
        onChangeText={setLogin}
      />

      <TextInput
        placeholder="Пароль"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={styles.btn} onPress={handle}>
        <Text style={styles.btnText}>Увійти</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", backgroundColor: "#111", padding: 20 },
  title: { color: "gold", fontSize: 22, marginBottom: 20, textAlign: "center" },
  input: { backgroundColor: "#222", color: "#fff", padding: 10, marginBottom: 10 },
  btn: { backgroundColor: "gold", padding: 12 },
  btnText: { textAlign: "center", fontWeight: "bold" },
});