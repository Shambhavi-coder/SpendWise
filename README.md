# 💰 SpendWise

A full-stack Personal Finance Tracker built using the MERN stack with TypeScript. SpendWise allows users to securely manage their financial records with authentication, CRUD operations, and cloud-based data storage.

---

## 🌐 Live Demo

**Frontend:** https://spend-wise-psi-one.vercel.app

**Backend:** https://spendwise-8g26.onrender.com

---

## 📌 Features

- 🔐 Secure Authentication using Clerk
- ➕ Add Financial Records
- ✏️ Edit Existing Records
- 🗑️ Delete Records
- 📋 View Transaction History
- 💾 Persistent Storage using MongoDB Atlas
- 📱 Responsive User Interface
- ☁️ Fully Deployed Application

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Clerk Authentication
- Context API
- CSS

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB Atlas
- Mongoose

### Deployment
- Vercel
- Render

---

## 📂 Project Structure

```
SpendWise
│
├── client
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.ts
│
├── server
│   ├── src
│   ├── routes
│   ├── models
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/Shambhavi-coder/SpendWise.git
cd SpendWise
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Runs on:

```
http://localhost:3001
```

---

## 🔑 Environment Variables

### Client (.env)

```env
VITE_CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
VITE_API_URL=https://spendwise-8g26.onrender.com
```

---

### Server (.env)

```env
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
PORT=3001
```

---

## 🎯 Future Improvements

- 📊 Expense Analytics Dashboard
- 📈 Charts & Reports
- 🌙 Dark Mode
- 📅 Monthly Budget Tracking
- 📤 Export Transactions (CSV/PDF)
- 🔎 Search & Filter Transactions
- 💱 Multi-Currency Support

---

## 👩‍💻 Author

**Shambhavi**

- GitHub: https://github.com/Shambhavi-coder
- Project Repository: https://github.com/Shambhavi-coder/SpendWise

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
