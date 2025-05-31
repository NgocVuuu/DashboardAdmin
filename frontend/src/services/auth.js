import app from './firebase';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const auth = getAuth(app);

export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    // Ném lỗi để phía frontend có thể xử lý và hiển thị thông báo chi tiết
    throw err;
  }
};
export const logout = () => signOut(auth);
export const onAuth = (cb) => onAuthStateChanged(auth, cb);
