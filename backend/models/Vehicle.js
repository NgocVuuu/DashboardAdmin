const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  plate_number: { type: String, required: true, unique: true },
  owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: String,
  brand: String,
  color: String,
  image: String,
  is_active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
