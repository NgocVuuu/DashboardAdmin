import React, { createContext, useState, useEffect } from 'react';
import { auth, login as loginFn } from '../services/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => setUser(u));
    return () => unsubscribe();
  }, []);

  const logout = () => auth.signOut();
  const login = loginFn; // Thêm dòng này

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
