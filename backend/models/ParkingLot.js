const mongoose = require('mongoose');

const ParkingLotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  location: {
    lat: Number,
    lng: Number
  },
  capacity: Number,
  available_slots: Number,
  price_per_hour: Number,
  is_reservable: { type: Boolean, default: false },
  working_hours: {
    open: String,
    close: String
  },
  manager_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }
});

module.exports = mongoose.model('ParkingLot', ParkingLotSchema);
