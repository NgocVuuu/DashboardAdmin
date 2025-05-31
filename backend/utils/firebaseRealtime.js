const admin = require('./firebaseAdmin');

const updateParkingStatus = async (lotId, total, available) => {
  const db = admin.database();
  await db.ref(`parking_status/${lotId}`).set({
    total_slots: total,
    available_slots: available,
    last_updated: Date.now()
  });
};

module.exports = { updateParkingStatus };
