const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  parking_lot_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ParkingLot', required: true },
  vehicle_plate: String,
  start_time: Date,
  end_time: Date,
  qr_code: String,
  status: { type: String, enum: ['confirmed', 'expired', 'cancelled'], default: 'confirmed' }
});

module.exports = mongoose.model('Reservation', ReservationSchema);
