import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type User = {
  login: string;
} | null;

type Item = {
  id: string;
  weapon: string;
  level: number;
};

type AppState = {
  user: User;
  theme: "light" | "dark";
  items: Item[];

  setUser: (user: User) => void;
  logout: () => void;

  toggleTheme: () => void;

  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      theme: "dark",
      items: [
        { id: "1", weapon: "Меч", level: 3 },
        { id: "2", weapon: "Щит", level: 5 },
      ],

      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "dark" ? "light" : "dark",
        })),

      addItem: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        user: state.user,
        theme: state.theme,
        items: state.items,
      }),
    }
  )
);