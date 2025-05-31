const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  full_name: String,
  email: String,
  role: { type: String, enum: ['superadmin', 'parking_manager'], default: 'parking_manager' },
  assigned_lots: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ParkingLot' }],
  uid: { type: String, required: false } // Thêm dòng này để lưu Firebase UID
});

module.exports = mongoose.model('Admin', AdminSchema);
