import React, { createContext, useContext, useState } from "react";

type User = { login: string };

type AuthContextType = {
  user: User | null;
  login: (login: string, password: string) => boolean;
  register: (login: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const users: { login: string; password: string }[] = [
  { login: "admin", password: "1234" },
];

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

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