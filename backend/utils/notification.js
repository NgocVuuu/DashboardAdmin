const admin = require('./firebaseAdmin');

const sendNotification = async (token, payload) => {
    await admin.messaging().sendToDevice(token, payload);
};

module.exports = { sendNotification };
