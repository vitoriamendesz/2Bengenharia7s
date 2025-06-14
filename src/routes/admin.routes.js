const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/auth.middleware');
const authorizeRole = require('../middlewares/role.middleware');
const User = require('../models/User');

router.get('/usuarios', authenticate, authorizeRole('admin'), async (req, res) => {
  try {
    const users = await User.find({}, '-password'); 
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao listar usuários', error: err.message });
  }
});

module.exports = router;
