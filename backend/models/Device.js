const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true }, // ví dụ: camera, barrier, sensor
    parkingLot: { type: mongoose.Schema.Types.ObjectId, ref: 'ParkingLot' },
    status: { type: String, enum: ['online', 'offline', 'error'], default: 'online' },
    lastActive: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Device', DeviceSchema);
