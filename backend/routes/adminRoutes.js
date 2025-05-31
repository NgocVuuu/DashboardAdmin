const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// Lấy danh sách admin
router.get('/', async (req, res, next) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
