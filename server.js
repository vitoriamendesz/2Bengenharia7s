require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🟢 Conectado ao MongoDB'))
  .catch(err => console.error('🔴 Erro ao conectar no MongoDB:', err));

const protectedRoutes = require('./src/routes/protected.routes');
app.use('/api/protected', protectedRoutes);

const authRoutes = require('./src/routes/auth.routes');
app.use('/api/auth', authRoutes);

const adminRoutes = require('./src/routes/admin.routes');
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('API MyFlix rodando com sucesso!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
