import React, { useState } from "react";
import { FlatList, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import OrderCard from "../../components/OrderCard";

type Item = {
  id: string;
  weapon: string;
  level: number;
};

export default function HomeScreen() {
  const [items, setItems] = useState<Item[]>([
    { id: "1", weapon: "Меч", level: 3 },
    { id: "2", weapon: "Щит", level: 5 },
  ]);

  const [selected, setSelected] = useState<Item | null>(null);

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Кузня замовлень</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Pressable onPress={() => setSelected(item)}>
              <OrderCard weapon={item.weapon} level={item.level} />
            </Pressable>

            <Pressable
              style={styles.deleteBtn}
              onPress={() => deleteItem(item.id)}
            >
              <Text style={{ color: "white" }}>Видалити</Text>
            </Pressable>
          </View>
        )}
      />

      {/* MODAL */}
      <Modal visible={!!selected} transparent animationType="slide">
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Деталі</Text>

          <Text style={styles.modalText}>
            Назва: {selected?.weapon}
          </Text>

          <Text style={styles.modalText}>
            Рівень: {selected?.level}
          </Text>

          <Pressable
            style={styles.closeBtn}
            onPress={() => setSelected(null)}
          >
            <Text style={{ color: "black" }}>Закрити</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 15,
  },
  title: {
    color: "gold",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  deleteBtn: {
    backgroundColor: "red",
    padding: 5,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    color: "gold",
    marginBottom: 10,
  },
  modalText: {
    color: "white",
    fontSize: 18,
  },
  closeBtn: {
    marginTop: 20,
    backgroundColor: "gold",
    padding: 10,
    borderRadius: 10,
  },
});