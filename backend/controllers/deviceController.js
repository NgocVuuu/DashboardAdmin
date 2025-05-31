const Device = require('../models/Device');

// Lấy danh sách thiết bị
exports.getDevices = async (req, res, next) => {
    try {
        const devices = await Device.find();
        res.json(devices);
    } catch (err) {
        next(err);
    }
};

// Thêm thiết bị mới
exports.createDevice = async (req, res, next) => {
    try {
        const device = new Device(req.body);
        await device.save();
        res.status(201).json(device);
    } catch (err) {
        next(err);
    }
};

// Cập nhật thiết bị
exports.updateDevice = async (req, res, next) => {
    try {
        const device = await Device.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(device);
    } catch (err) {
        next(err);
    }
};

// Xóa thiết bị
exports.deleteDevice = async (req, res, next) => {
    try {
        await Device.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};
