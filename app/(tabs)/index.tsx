import React from "react";
import OrderCard from "../../components/OrderCard";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

const orders = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  weapon: i % 2 === 0 ? "Меч" : "Щит",
  level: Math.floor(Math.random() * 10) + 1,
}));

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Замовлення кузні</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OrderCard
            weapon={item.weapon}
            level={item.level}
          />
        )}
      />
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
    fontSize: 24,
    color: "gold",
    fontWeight: "bold",
    marginBottom: 15,
  },
});