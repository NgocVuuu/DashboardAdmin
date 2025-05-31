import app from './firebase';
import { getDatabase, ref, onValue, off } from 'firebase/database';

const db = getDatabase(app);

export const listenParkingLots = (cb) => {
  const parkingRef = ref(db, 'parkingLots');
  const listener = onValue(parkingRef, (snapshot) => {
    cb(snapshot.val() || []);
  });
  return () => off(parkingRef, 'value', listener);
};
