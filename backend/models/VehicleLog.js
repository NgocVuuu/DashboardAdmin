const mongoose = require('mongoose');

const VehicleLogSchema = new mongoose.Schema({
    licensePlate: { type: String, required: true },
    parkingLot: { type: mongoose.Schema.Types.ObjectId, ref: 'ParkingLot', required: true },
    timeIn: { type: Date, required: true },
    timeOut: { type: Date },
    imageUrl: { type: String },
    status: { type: String, enum: ['in', 'out'], default: 'in' },
    payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }
}, { timestamps: true });

module.exports = mongoose.model('VehicleLog', VehicleLogSchema);
