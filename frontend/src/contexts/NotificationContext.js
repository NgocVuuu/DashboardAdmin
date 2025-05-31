import React, { createContext, useState, useEffect } from 'react';
import { onMessageListener } from '../services/notification';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const unsubscribe = onMessageListener((msg) => {
      setNotifications(prev => [msg, ...prev]);
    });
    return () => unsubscribe && unsubscribe();
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications }}>
      {children}
    </NotificationContext.Provider>
  );
};
