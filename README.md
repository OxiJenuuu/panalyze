Perfect! Uite varianta în **engleză** a `README.md`, adaptată pentru setup cu `backend` și `frontend` separate:

---

# 📦 Panalyze – Warehouse Inventory System

**Panalyze** is an open-source inventory management system for warehouses. It lets you generate and scan QR codes for boxes, track product quantities, and organize items by rows and levels. Built with the **MERN stack** (MongoDB, Express, React, Node.js).

---

## 🔧 Features

- Add and update boxes with multiple products
- Generate QR codes for each box
- Scan QR codes to instantly view box contents
- Reduce product quantity after scanning
- Organize boxes by rows and levels (e.g. B1, B2, Level 2)
- Mobile-friendly access via QR scan

---

## 🚀 Tech Stack

- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React, TailwindCSS, DaisyUI
- **QR Generator**: `qrcode` npm package

---

## ▶️ Getting Started Locally

### 1. Clone the repository:
```bash
git clone https://github.com/OxiJenuuu/panalyze.git
cd panalyze
```

### 2. Install backend dependencies:
```bash
cd backend
npm install
```

### 3. Create a `.env` file in the `backend/` folder:
```
MONGO_URI=mongodb://localhost:27017/panalyze
PORT=5000
```

### 4. Start the backend server:
```bash
npm run dev
```

---

### 5. Install frontend dependencies:
In a new terminal tab:
```bash
cd frontend
npm install
```

### 6. Start the frontend:
```bash
npm run dev
```

---

## 📸 QR Code Usage

Each box gets a QR code that can be scanned with any mobile QR scanner or camera to instantly view its contents and product quantities.

---

## 🧠 Contributing

This is an open-source project! Feel free to open issues or pull requests with improvements, features, or bug fixes.