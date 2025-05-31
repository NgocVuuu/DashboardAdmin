const mongoose = require('mongoose');

const ParkingSessionSchema = new mongoose.Schema({
  vehicle_plate: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  parking_lot_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ParkingLot', required: true },
  entry_time: Date,
  exit_time: Date,
  entry_image_url: String,
  exit_image_url: String,
  total_duration_minutes: Number,
  fee: Number,
  payment_status: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid' },
  payment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }
});

module.exports = mongoose.model('ParkingSession', ParkingSessionSchema);
