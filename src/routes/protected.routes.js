const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/auth.middleware');

// Rota que só usuários autenticados podem acessar
router.get('/profile', authenticate, (req, res) => {
  res.json({
    message: 'Perfil acessado com sucesso!',
    user: req.user
  });
});

module.exports = router;
