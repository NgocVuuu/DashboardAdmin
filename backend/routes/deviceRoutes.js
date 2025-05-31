const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

// Lấy danh sách thiết bị
router.get('/', deviceController.getDevices);

// Thêm thiết bị mới
router.post('/', deviceController.createDevice);

// Sửa thiết bị
router.put('/:id', deviceController.updateDevice);

// Xóa thiết bị
router.delete('/:id', deviceController.deleteDevice);

module.exports = router;
