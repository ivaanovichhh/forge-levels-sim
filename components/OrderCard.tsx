import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  weapon: string;
  level: number;
};

export default function OrderCard({
  weapon,
  level,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.weapon}>
        {weapon}
      </Text>

      <Text style={styles.level}>
        Рівень: {level}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  weapon: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  level: {
    color: "#bbb",
    marginTop: 5,
  },
});