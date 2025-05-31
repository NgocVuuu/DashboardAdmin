const ParkingLot = require('../models/ParkingLot');

// Lấy danh sách bãi đỗ
exports.getAllParkingLots = async (req, res, next) => {
    try {
        const lots = await ParkingLot.find();
        res.json(lots);
    } catch (err) {
        next(err);
    }
};

// Thêm bãi đỗ mới
exports.createParkingLot = async (req, res, next) => {
    try {
        const lot = new ParkingLot(req.body);
        await lot.save();
        res.status(201).json(lot);
    } catch (err) {
        next(err);
    }
};

// Sửa thông tin bãi đỗ
exports.updateParkingLot = async (req, res, next) => {
    try {
        const lot = await ParkingLot.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(lot);
    } catch (err) {
        next(err);
    }
};

// Xóa bãi đỗ
exports.deleteParkingLot = async (req, res, next) => {
    try {
        await ParkingLot.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};
