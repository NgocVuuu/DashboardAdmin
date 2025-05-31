const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Lấy danh sách user
router.get('/', userController.getUsers);

// Thêm user mới
router.post('/', userController.createUser);

// Sửa user
router.put('/:id', userController.updateUser);

// Xóa user
router.delete('/:id', userController.deleteUser);

module.exports = router;
