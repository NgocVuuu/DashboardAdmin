import { initializeApp, getApps } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics'; // Bỏ comment nếu dùng Analytics

const firebaseConfig = {
  apiKey: "AIzaSyC9_8iI8KixkaHx6PoGN4pNZNvRl6VogK8",
  authDomain: "smart-parking-4a29c.firebaseapp.com",
  databaseURL: "https://smart-parking-4a29c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-parking-4a29c",
  storageBucket: "smart-parking-4a29c.firebasestorage.app",
  messagingSenderId: "1038646726457",
  appId: "1:1038646726457:web:3b030809f317088f5ee2e8",
  measurementId: "G-4JK319018X"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
// const analytics = getAnalytics(app); // Bỏ comment nếu dùng Analytics

export default app;
