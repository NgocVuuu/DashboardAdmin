const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  parking_session_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ParkingSession', required: true },
  amount: Number,
  method: String,
  status: String,
  payment_time: Date,
  gateway_ref: String
});

module.exports = mongoose.model('Payment', PaymentSchema);
