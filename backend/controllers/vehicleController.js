const VehicleLog = require('../models/VehicleLog');

// Lấy lịch sử xe vào/ra
exports.getVehicleLogs = async (req, res, next) => {
    try {
        const logs = await VehicleLog.find().sort({ timeIn: -1 });
        res.json(logs);
    } catch (err) {
        next(err);
    }
};

// Thêm log xe vào/ra
exports.createVehicleLog = async (req, res, next) => {
    try {
        const log = new VehicleLog(req.body);
        await log.save();
        res.status(201).json(log);
    } catch (err) {
        next(err);
    }
};

// Cập nhật trạng thái xe ra
exports.updateVehicleLog = async (req, res, next) => {
    try {
        const log = await VehicleLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(log);
    } catch (err) {
        next(err);
    }
};
