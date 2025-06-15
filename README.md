# 🎬 MyFlix - Gerenciador de Filmes Favoritos

Projeto desenvolvido como atividade prática de autenticação com JWT e controle de acesso por roles (`admin` e `user`), utilizando **Node.js**, **Express** e **MongoDB**.

---

## 📌 Funcionalidades
1. Cadastro de Usuários
- Permite o registro de novos usuários com os campos: `nome`, `email`, `senha`, `role`.
- Role pode ser `user` ou `admin`.
Rota:POST http://localhost:3000/api/auth/register
json:
{
  "name": "Novo Usuário",
  "email": "novo@email.com",
  "password": "123456",
  "role": "user"
}
Você também pode testar com "role": "admin" para criar um administrador.

2. Autenticação com JWT
-Implementar um sistema de login que gere um token JWT
-Permitir acesso a endpoints apenas com token válido
Rota:POST http://localhost:3000/api/auth/login
json:
{
  "email": "vitoria@email.com",
  "password": "1234567"
}

3.Controle de Acesso por Role
1. Teste com admin
Faça login com o usuário admin (ex: Vitoria)
POST http://localhost:3000/api/auth/login
json:
{
  "email": "vitoria@email.com",
  "password": "1234567"
}
GET http://localhost:3000/api/admin/usuarios
No header: Authorization: Bearer SEU_TOKEN_DA_VITORIA

 2. Teste com usuário comum 
 POST http://localhost:3000/api/auth/login
 json:
 {
  "email": "gabriel@email.com",
  "password": "1234567"
}
GET http://localhost:3000/api/admin/usuarios
Authorization: Bearer SEU_TOKEN_DA_VITORIA

4.Gerenciamento de Usuários
-User pode ver e editar seu próprio perfil
-Admin pode ver, editar e deletar qualquer usuário

Parte 1: User
PUT http://localhost:3000/api/users/me
json:
{
  "name": "Vitória G"
}

Parte 2: Admin
Ver usuário por ID:
GET http://localhost:3000/api/admin/usuarios
Editar usuário por ID:
PUT http://localhost:3000/api/admin/usuarios/ID_DA_VITORIA
Deletar usuário:
DELETE http://localhost:3000/api/admin/usuarios/ID_DA_VITORIA


- Cadastro e login de usuários com geração de **JWT**
- Controle de acesso com **roles (admin/user)**
- `User` pode:
  - Criar, listar, editar e excluir seus próprios filmes
- `Admin` pode:
  - Listar todos os usuários
  - Listar todos os filmes cadastrados
 
1. Criar um filme (user autenticado)
Método: POST
Rota: http://localhost:3000/api/movies
Headers:
Authorization: Bearer SEU_TOKEN_USER
(JSON):
{
  "title": "Matrix",
  "description": "Neo descobre a Matrix",
  "year": 1999
}

2. Listar seus próprios filmes
Método: GET
Rota: http://localhost:3000/api/movies/me
Header:
Authorization: Bearer SEU_TOKEN_USER

3. Editar um filme criado por você
Método: PUT
Rota: http://localhost:3000/api/movies/:id
(Substitua :id pelo ID real do filme que você criou)
Authorization: Bearer SEU_TOKEN_USER
{
  "title": "Matrix Reloaded",
  "year": 2003
}

4. Deletar um filme criado por você
Método: DELETE
Rota: http://localhost:3000/api/movies/:id
(Substitua :id pelo ID do filme)
Header:
Authorization: Bearer SEU_TOKEN_USER

5. Listar todos os filmes (admin)
Método: GET
Rota: http://localhost:3000/api/movies/all
Header:
Authorization: Bearer SEU_TOKEN_ADMIN

6. Listar todos os usuários (admin)
Método: GET
Rota: http://localhost:3000/api/admin/usuarios
Header:
Authorization: Bearer SEU_TOKEN_ADMIN

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
