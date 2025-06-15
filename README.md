# 🎬 MyFlix - Gerenciador de Filmes Favoritos

Projeto desenvolvido como atividade prática de autenticação com JWT e controle de acesso por roles (`admin` e `user`), utilizando **Node.js**, **Express** e **MongoDB**.

---

## 📌 Funcionalidades

- Cadastro e login de usuários com geração de **JWT**
- Controle de acesso com **roles (admin/user)**
- `User` pode:
  - Criar, listar, editar e excluir seus próprios filmes
- `Admin` pode:
  - Listar todos os usuários
  - Listar todos os filmes cadastrados

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- MongoDB com Mongoose
- JWT (jsonwebtoken)
- Bcrypt (criptografia de senhas)
- Dotenv

---

## 🔐 Rotas principais

### Autenticação
- `POST /api/auth/register` – cadastrar usuário
- `POST /api/auth/login` – login e retorno de token JWT

### Filmes
- `POST /api/movies` – criar filme (user)
- `GET /api/movies/me` – listar filmes do próprio user
- `PUT /api/movies/:id` – editar filme (user)
- `DELETE /api/movies/:id` – deletar filme (user)
- `GET /api/movies/all` – listar todos os filmes (admin)

### Admin
- `GET /api/admin/usuarios` – listar todos os usuários

---

## 🧪 Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/2Bengenharia7s.git
   cd 2Bengenharia7s

2. Instale as dependências:
 
   npm install

3. Configure o .env: 

   PORT=3000
   MONGO_URI=mongodb://localhost:27017/myflix
   JWT_SECRET=segredo_super_secreto

4.Inicie o servidor:
  
   npm run dev