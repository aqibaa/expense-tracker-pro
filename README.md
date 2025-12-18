# 💰 Professional Expense Tracker

A modern, full-stack expense tracking application built to manage personal finances efficiently. It features a dark-themed UI, real-time updates, and a robust RESTful API.

## 🚀 Tech Stack
- **Frontend:** React.js, Tailwind CSS (v4), Framer Motion, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Architecture:** MVC (Model-View-Controller)

## ✨ Features
- **Modern UI:** Professional dark mode with neon accents using Tailwind CSS.
- **Add Transactions:** Log expenses with Amount, Category, and Date.
- **Real-time List:** Instantly updates the UI upon adding/deleting items.
- **Data Persistence:** All data is stored securely in MongoDB.
- **Responsive Design:** Fully optimized for Desktop and Mobile.

## 🛠️ How to Run Locally

### 1. Clone the Repo
```bash
git clone <YOUR_GITHUB_REPO_LINK_HERE>
cd expense-tracker-professional

## 🛠️ SetUp Backend
cd backend
npm install
# Create a .env file in backend folder and add: MONGO_URI=mongodb://localhost:27017/expense_tracker
npm run server


 Setup Frontend
Open a new terminal:
code
Bash
cd frontend
npm install
npm run dev
