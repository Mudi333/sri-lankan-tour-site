# 🇱🇰 Sri Lanka Tour API (Backend)

Backend for a full-stack tour platform where tourists, guides, and admins can register, log in, and access role-based features for Sri Lankan travel experiences.

---



- 🔐 **JWT Authentication**
  - Email/username + password login
  - Secure password hashing with bcrypt
  - 2-hour token expiry

- 👥 **User Roles**
  - `TOURIST` – can access tourist-specific areas
  - `GUIDE` – can later manage tours, respond to requests
  - `ADMIN` – can access admin-only endpoints

- 🧱 **Clean Architecture**
  - Express + TypeScript
  - Sequelize ORM with PostgreSQL
  - Validation using `express-validator`
  - Role-based middleware

---

## 🛠 Tech Stack

- **Runtime:** Node.js, TypeScript
- **Framework:** Express
- **Database:** PostgreSQL + Sequelize
- **Auth:** JWT (JSON Web Tokens), bcrypt
- **Validation:** express-validator
- **Other:** CORS, dotenv

---

## 📁 Folder Structure

```txt
tour-server/
  ├─ src/
  │  ├─ server.ts                # App entry, Express setup
  │  ├─ routes/
  │  │   └─ users.ts             # /users routes (register, login, me, admin-area, etc.)
  │  ├─ models/
  │  │   └─ User.ts              # Sequelize User model
  │  ├─ middleware/
  │  │   ├─ authenticate.ts      # JWT verification middleware
  │  │   └─ authorize.ts         # Role-based access control
  │  ├─ validators/
  │  │   ├─ validateUser.ts      # Register validation
  │  │   └─ validateLogin.ts     # Login validation
  │  ├─ utilities/
  │  │   ├─ db.ts                # Sequelize/Postgres connection
  │  │   └─ helpers.ts           # createError and other helpers
  │  └─ …
  ├─ package.json
  ├─ pnpm-lock.yaml
  └─ .env.example




# Postgres connection
DB_HOST=localhost
DB_PORT=5432
DB_NAME=sltour_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password

# App
PORT=4000
NODE_ENV=development

# JWT
JWT_SECRET=super-secret-dev-key
JWT_EXPIRES_IN=2h





pnpm install
createdb sltour_db
sequelize.sync({ alter: true })
pnpm check:db

run back end-pnpm dev
http://localhost:4000

Auth & Users (/users)
Method	Endpoint	Description	Auth
POST	/users/register	Register a new user (TOURIST/GUIDE/ADMIN)	Public
POST	/users/login	Login and receive JWT token	Public
GET	/users/me	Get current user from token	JWT token
GET	/users/admin-area	Example admin-only route	JWT + ADMIN
GET	/users/tourist-area	Example tourist-only route	JWT + TOURIST
GET	/users/guide-or-admin	Example guide+admin shared route	JWT + GUIDE/ADMIN

{
  "msg": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresAt": 1763565381823,
  "user": { "id": "...", "name": "...", "username": "...", "email": "...", "role": "TOURIST" }
}

Testing with Postman
POST http://localhost:4000/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "username": "john",
  "email": "john@example.com",
  "password": "John1234",
  "role": "TOURIST"
}


POST http://localhost:4000/users/login
Content-Type: application/json

{
  "username": "john",
  "password": "John1234"
}

GET http://localhost:4000/users/me
Authorization: Bearer <PASTE_TOKEN_HERE>






---



# 🇱🇰 Sri Lanka Tour Client (Frontend)

Frontend for a Sri Lankan tour booking and guide platform.  
Users can register as tourists, guides, or admins, log in, and access role-based views.

---

## 🛠 Tech Stack

- **Build tool:** Vite
- **Framework:** React + TypeScript
- **Routing:** React Router
- **State / Auth:** localStorage-based JWT handling
- **Styling:** Plain CSS (no Tailwind, no shadcn)

---

## 📁 Folder Structure

```txt
tour-client/
  ├─ src/
  │  ├─ main.tsx                 # React entry, router setup
  │  ├─ App.tsx                  # Layout, header, routes outlet
  │  ├─ components/
  │  │   ├─ Header.tsx           # Top bar with logo + auth actions
  │  │   ├─ Navbar.tsx           # Main navigation links
  │  │   └─ ...                  # Other shared components
  │  ├─ pages/
  │  │   ├─ Home.tsx             # Landing page with hero section
  │  │   ├─ Login.tsx            # Sign-in form (calls /users/login)
  │  │   ├─ Register.tsx         # Sign-up form (calls /users/register)
  │  │   ├─ Admin.tsx            # Simple admin dashboard, calls /users/admin-area
  │  │   └─ ...                  # Future pages: Guide, Tourist dashboard, etc.
  │  ├─ utils/
  │  │   └─ auth.ts              # saveAuth, getAuth, clearAuth helpers
  │  ├─ styles/
  │  │   ├─ globals.css          # global styles
  │  │   ├─ variables.css        # CSS variables (colors, spacing)
  │  │   └─ layout.css           # common layout helpers
  │  └─ index.css                # base entry CSS
  ├─ index.html
  ├─ package.json
  └─ pnpm-lock.yaml


pnpm install

pnpm dev

http://localhost:5173
http://localhost:4000