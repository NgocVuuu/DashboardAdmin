import app from './firebase';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const messaging = getMessaging(app);

export const requestForToken = async () => {
  try {
    const currentToken = await getToken(messaging, { vapidKey: 'YOUR_VAPID_KEY' });
    return currentToken;
  } catch (err) {
    console.error('FCM token error:', err);
    return null;
  }
};

export const onMessageListener = (cb) => {
  return onMessage(messaging, cb);
};
