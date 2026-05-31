import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../../context/AuthContext";

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
      alert("Невірний логін або пароль");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

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
        <Text style={styles.btnText}>Увійти</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/(auth)/register")}>
        <Text style={{ color: "gold", textAlign: "center", marginTop: 10 }}>
          Реєстрація
        </Text>
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