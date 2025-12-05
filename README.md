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

## 🚀 **Getting Started**

Follow these instructions to set up the project locally.

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB (Local instance or Atlas URI)
- Cloudinary Account (for image storage)

### 1. Clone the Repository

```bash
git clone [https://github.com/CodecAnuj/Chat-app.git](https://github.com/CodecAnuj/Chat-app.git)
cd Chat-app
````

### 2. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```

Start the backend server:

```bash
npm run dev
```

*The server should run on `http://localhost:5001`.*

### 3. Frontend Setup

Open a new terminal, navigate to the frontend directory, and install dependencies:

```bash
cd frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

*The frontend will launch (usually on `http://localhost:5173`) and automatically connect to the backend at `http://localhost:5001`.*

-----

## 📂 **Project Structure**

```text
Chat-app/
├── backend/
│   ├── src/
│   │   ├── controllers/   # Auth and Message logic
│   │   ├── lib/           # DB, Socket, Cloudinary configs
│   │   ├── middleware/    # Auth protection middleware
│   │   ├── models/        # Mongoose User and Message schemas
│   │   ├── routes/        # API routes
│   │   └── index.js       # Server entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components (Navbar, Sidebar, etc.)
│   │   ├── lib/           # Axios setup and utilities
│   │   ├── pages/         # Full pages (Home, Login, Profile, etc.)
│   │   ├── store/         # Zustand state stores
│   │   └── App.jsx        # Main application component
│   └── package.json
└── README.md
```

-----

## 🤝 **Contributing**

Contributions are welcome\! Please fork the repository and submit a pull request for any improvements.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

-----

## 👨‍💻 Author

**Anuj Tiwari**

  - GitHub: [@CodecAnuj](https://github.com/CodecAnuj)

-----

Made with ❤️ by **Anuj Tiwari**