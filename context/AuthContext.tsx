import React, { createContext, useContext } from "react";
import { useAppStore } from "../app/store/useAppStore";

type AuthContextType = {
  user: any;
  login: (login: string, password: string) => boolean;
  register: (login: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

// фейкові користувачі
const users: { login: string; password: string }[] = [
  { login: "admin", password: "1234" },
  { login: "smith", password: "forge" },
];

export const AuthProvider = ({ children }: any) => {
  const { user, setUser, logout } = useAppStore();

  const login = (login: string, password: string) => {
    const found = users.find(
      (u) => u.login === login && u.password === password
    );

    if (found) {
      setUser({ login: found.login });
      return true;
    }

    return false;
  };

  const register = (login: string, password: string) => {
    const exists = users.find((u) => u.login === login);

    if (exists) return false;

    users.push({ login, password });
    setUser({ login });

    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};