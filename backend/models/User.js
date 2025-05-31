const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  plate_number: String,
  type: String,
  color: String
}, { _id: false });

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  full_name: String,
  phone: String,
  vehicle_list: [VehicleSchema],
  payment_methods: [String],
  created_at: { type: Date, default: Date.now },
  last_login: Date
});

module.exports = mongoose.model('User', UserSchema);
