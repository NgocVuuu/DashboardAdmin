const VehicleLog = require('../models/VehicleLog');

const countVehiclesByDay = async () => {
    return VehicleLog.aggregate([
        {
            $group: {
                _id: { $dateToString: { format: "%Y-%m-%d", date: "$timeIn" } },
                count: { $sum: 1 }
            }
        },
        { $sort: { _id: 1 } }
    ]);
};

module.exports = { countVehiclesByDay };
