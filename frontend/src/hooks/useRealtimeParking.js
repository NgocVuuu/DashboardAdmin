import { useContext } from 'react';
import { ParkingContext } from '../contexts/ParkingContext';

export const useRealtimeParking = () => useContext(ParkingContext);
