const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/auth.middleware');
const User = require('../models/User');

// Ver perfil
router.get('/me', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar perfil', error: err.message });
  }
});

// Editar perfil
router.put('/me', authenticate, async (req, res) => {
  try {
    const updates = req.body;
    if (updates.password) delete updates.password; // Evita trocar senha aqui
    const user = await User.findByIdAndUpdate(req.user.userId, updates, { new: true }).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar perfil', error: err.message });
  }
});

module.exports = router;
