import React, { createContext, useState, useEffect } from 'react';
import { listenParkingLots } from '../services/realtime';

export const ParkingContext = createContext();

export const ParkingProvider = ({ children }) => {
  const [parkingLots, setParkingLots] = useState([]);

  useEffect(() => {
    const unsubscribe = listenParkingLots(setParkingLots);
    return () => unsubscribe && unsubscribe();
  }, []);

  return (
    <ParkingContext.Provider value={{ parkingLots }}>
      {children}
    </ParkingContext.Provider>
  );
};
