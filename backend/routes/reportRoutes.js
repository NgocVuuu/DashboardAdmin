const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Thống kê lượt xe vào/ra theo ngày
router.get('/vehicle-stats', reportController.getVehicleStats);

// Thống kê doanh thu
router.get('/revenue-stats', reportController.getRevenueStats);

module.exports = router;
