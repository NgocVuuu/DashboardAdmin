const express = require('express');
const router = express.Router();
const parkingController = require('../controllers/parkingController');
// const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware'); // Bổ sung nếu cần

// Lấy tất cả bãi đỗ
router.get('/', parkingController.getAllParkingLots);

// Thêm bãi đỗ mới
router.post('/', parkingController.createParkingLot);

// Sửa bãi đỗ
router.put('/:id', parkingController.updateParkingLot);

// Xóa bãi đỗ
router.delete('/:id', parkingController.deleteParkingLot);

module.exports = router;
