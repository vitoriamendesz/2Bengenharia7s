function authorizeRole(requiredRole) {
  return (req, res, next) => {
    if (req.user.role !== requiredRole) {
      return res.status(403).json({ message: 'Acesso negado: permissão insuficiente' });
    }
    next();
  };
}

module.exports = authorizeRole;
