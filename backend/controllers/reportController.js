const VehicleLog = require('../models/VehicleLog');
const Payment = require('../models/Payment');

// Thống kê số lượt xe vào/ra theo ngày
exports.getVehicleStats = async (req, res, next) => {
    try {
        // Ví dụ: group theo ngày
        const stats = await VehicleLog.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$timeIn" } },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);
        res.json(stats);
    } catch (err) {
        next(err);
    }
};

// Thống kê doanh thu
exports.getRevenueStats = async (req, res, next) => {
    try {
        const stats = await Payment.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$paidAt" } },
                    total: { $sum: "$amount" }
                }
            },
            { $sort: { _id: 1 } }
        ]);
        res.json(stats);
    } catch (err) {
        next(err);
    }
};
