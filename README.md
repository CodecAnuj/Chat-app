# 📱 **Chatty: A Realtime Chat App**

Chatty is a modern realtime chat application built using **React**, **TailwindCSS**, **DaisyUI**, **Node.js**, **Express**, **MongoDB**, **Cloudinary**, and **Socket.io**.
It supports instant messaging, multiple UI themes, image sharing, authentication, and more — all with a smooth and elegant interface.

---

## 🚀 **Features**

### 🔐 **Authentication**

* User registration & login
* Password hashing with bcrypt
* JWT-based authentication
* Protected API routes

### 💬 **Realtime Messaging**

* Instant messaging with **Socket.io**
* Online/offline status tracking

### 🎨 **Multiple Themes (DaisyUI + TailwindCSS)**

* Full theme system powered by **DaisyUI**
* Multiple built-in theme styles:

  * Light
  * Dark
  * Cupcake
  * Bumblebee
  * Emerald
  * Synthwave
  * Corporate
  * …and more
* Smooth theme switching
* Theme preference stored locally

### 🖼️ **Media Support**

* Upload and send images via **Cloudinary**
* Optimized media URLs
* Preview

### 👥 **Users & Chats**

* User search
* One-to-one conversation
* Timestamps & status

### ✨ **Frontend (React + TailwindCSS + DaisyUI)**

* Responsive and clean UI
* DaisyUI component library (cards, buttons, chat-bubbles, themes, etc.)
* Organized component structure
* Local state management using Zustand

### ⚙️ **Backend (Node.js + Express + MongoDB)**

* REST API for auth, chat, users, messages
* Socket.io server
* Secure JWT auth
* Cloudinary image handling

---

## 🛠️ **Tech Stack**

### **Frontend**

* React
* TailwindCSS
* **DaisyUI**
* Axios
* React Router
* Zustand 

### **Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)
* Socket.io
* Cloudinary
* JWT
* Bcrypt

---

## 📂 **Project Structure**

```
Chat-app/
│── client/               # React frontend
│   ├── src/
│   ├── public/
│   └── ...
│
│── backend/src/          # Node.js backend
│            ├── controllers/
│            ├── models/
│            ├── routes/
│            ├── lib/
│            └── ...
│
└── README.md
```

---

## ⚙️ **Installation & Setup**

### **1️⃣ Clone Repository**

```bash
git clone https://github.com/CodecAnuj/Chat-app.git
cd Chat-app
```

---

## 🖥️ **Backend Setup**

```bash
cd backend
npm install
```

### **Create `.env` inside `/backend`:**

```
PORT=50001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
```

### **Start Backend**

```bash
npm run dev
```

---

## 🌐 **Frontend Setup**

```bash
cd frontend
npm install
```

### **Create `.env` inside `/frontend`:**

```
VITE_API_URL=http://localhost:50001
```

### **Start Frontend**

```bash
npm run dev
```

---

## ⚡ **Socket.io**

Socket.io runs inside the backend.
Starting the backend automatically starts the realtime server.

---

## 🧪 **Available Scripts**

### **Frontend**

* `npm run dev` – Start development server
* `npm run build` – Build frontend

### **Backend**

* `npm start` – Run server
* `npm run dev` – Run with nodemon

---

## 👨‍💻 **Author**

**Anuj Tiwari**
GitHub: [CodecAnuj](https://github.com/CodecAnuj)

---
