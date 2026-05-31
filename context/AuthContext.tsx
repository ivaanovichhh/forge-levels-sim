import React, { createContext, useContext, useState } from "react";

type User = {
  login: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const users: { email: string; password: string }[] = [];

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    if (email === "admin" && password === "1234") {
      setUser({ login: email });
      return true;
    }

    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      setUser({ login: email });
      return true;
    }

    return false;
  };

  const register = (email: string, password: string) => {
    const exists = users.find((u) => u.email === email);

    if (exists) return false;

    users.push({ email, password });
    setUser({ login: email });

    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};