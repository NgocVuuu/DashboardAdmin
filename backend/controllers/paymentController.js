const Payment = require('../models/Payment');

// Lấy danh sách thanh toán
exports.getPayments = async (req, res, next) => {
    try {
        const payments = await Payment.find();
        res.json(payments);
    } catch (err) {
        next(err);
    }
};

// Thêm thanh toán mới
exports.createPayment = async (req, res, next) => {
    try {
        const payment = new Payment(req.body);
        await payment.save();
        res.status(201).json(payment);
    } catch (err) {
        next(err);
    }
};

// Cập nhật trạng thái thanh toán
exports.updatePayment = async (req, res, next) => {
    try {
        const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(payment);
    } catch (err) {
        next(err);
    }
};
