const User = require('../models/User');

// Lấy danh sách user
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

// Thêm user mới
exports.createUser = async (req, res, next) => {
    try {
        // req.body.uid là uid từ Firebase Auth
        const user = new User({ ...req.body, uid: req.body.uid });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};

// Cập nhật user
exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(user);
    } catch (err) {
        next(err);
    }
};

// Xóa user
exports.deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};
