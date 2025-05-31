const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// Lấy tất cả log xe
router.get('/', vehicleController.getVehicleLogs);

// Thêm log xe mới
router.post('/', vehicleController.createVehicleLog);

// Cập nhật log xe (ví dụ: khi xe ra)
router.put('/:id', vehicleController.updateVehicleLog);

module.exports = router;
