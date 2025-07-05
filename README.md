# WeAnalyzTech Assignment- Helpdesk Ticketing System

A role-based Helpdesk Ticketing System built with **React**, **TypeScript**, and **Tailwind CSS**. This application supports four types of users — **Admin**, **User**, **Operation Team**, and **Technical Support** — each with different access and dashboard routes.

---

## 🔧 Tech Stack

- ⚛️ React + TypeScript
- 🎨 Tailwind CSS
- 🔐 Role-based Routing with React Router v6
- 🧠 Context API for Authentication
- 🔁 Local Storage for Session Persistence

---

## 👤 User Roles

| Role       | Email                        | Password       |
|------------|------------------------------|----------------|
| Admin      | `admin@helpdesk.com`         | `admin123`     |
| Operation  | `operation@helpdesk.com`     | `operation123` |
| Technical  | `technical@helpdesk.com`     | `technical123` |
| User       | `user@helpdesk.com`          | `user123`      |

---

## 🚀 Features

- 🔐 Secure Login & Logout
- 🧑‍💻 Role-Based Dashboards
- 🎫 Ticket Management for Users
- ✅ Ticket Approval by Operation Team
- 🛠️ Ticket Resolution by Technical Team
- 📊 Admin Panel for Logs, Database & Settings
- 📱 Responsive UI with Tailwind CSS

---

## 📁 Folder Structure

├── src/
│ ├── components/ # Layouts and common UI components
│ ├── contexts/ # AuthContext using Context API
│ ├── pages/ # Pages for each role
│ │ ├── admin/
│ │ ├── auth/
│ │ ├── operation/
│ │ ├── technical/
│ ├── App.tsx # Main app wrapper
│ └── routes.tsx # All defined routes

yaml
Copy
Edit

---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/vaibhav-bhosale1/WeAnalyzTech-assignment.git
cd WeAnalyzTech-assignment
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start the Development Server
bash
Copy
Edit
npm run dev
App will run at: http://localhost:5173
