const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Lấy danh sách thanh toán
router.get('/', paymentController.getPayments);

// Thêm thanh toán mới
router.post('/', paymentController.createPayment);

// Sửa thanh toán
router.put('/:id', paymentController.updatePayment);

module.exports = router;
