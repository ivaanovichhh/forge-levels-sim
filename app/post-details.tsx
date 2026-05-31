import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function PostDetails() {
  const item = useLocalSearchParams();
  const router = useRouter();

  const saveFavorite = async () => {
    await AsyncStorage.setItem(
      "fav_post",
      JSON.stringify(item)
    );
    alert("Збережено в улюблені");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        {item.title}
      </Text>

      <Text style={{ marginVertical: 10 }}>
        {item.body}
      </Text>

      <Button title="Зберегти" onPress={saveFavorite} />
    </View>
  );
}