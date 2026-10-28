# 🔬 Forensic Science Nexus Portfolio (React Frontend + Node.js Backend)

> An interactive, cyber-minimalist forensic science portfolio and digital laboratory showcase developed by **Priya Saini**, featuring a modern **React Frontend** paired with a robust **Node.js Backend**.

---

## 🏛️ System Architecture

```text
stitch_forensic_nexus_portfolio/
│
├── 📂 frontend/                                  # ⚛️ REACT FRONTEND (Vite + React 18)
│   ├── package.json                              # React, React-DOM, Three.js, Vite
│   ├── vite.config.js                            # Dev proxy to Node.js backend
│   ├── index.html                                # HTML root
│   └── src/
│       ├── main.jsx                              # React bootstrap
│       ├── App.jsx                               # Main application flow
│       ├── index.css                             # Cyber-forensic design system (Vanilla CSS)
│       └── components/                           # Modular React UI components
│           ├── Navbar.jsx                        # Live Node.js API health status
│           ├── Hero.jsx                          # Headlines & forensic metrics
│           ├── ThreeForensicScene.jsx            # 3D Three.js evidence reconstructor
│           ├── ShaderBackdrop.jsx                # WebGL animated canvas shader
│           ├── CaseStudies.jsx                   # Filterable case files & dossier modal
│           ├── LabTimeline.jsx                   # Chronological experience log
│           ├── InvestigationForm.jsx             # Secure intake form (Posts to Node.js)
│           └── Footer.jsx                        # Protocol details & links
│
└── 📂 backend/                                   # 🟢 NODE.JS BACKEND (Express.js REST API)
    ├── package.json                              # Express, Cors, Dotenv
    ├── server.js                                 # REST API Server on port 5000
    └── .env                                      # Environment configuration
```

---

## 🌐 Node.js REST API Endpoints

| Endpoint | Method | Description |
| :--- | :---: | :--- |
| **`/api`** | `GET` | System health, runtime version (`Node.js v24.19.0`), and route map |
| **`/api/test`** | `GET` | Verification test route (`{"message": "Backend is working in Node.js!"}`) |
| **`/api/cases`** | `GET` | Full forensic cases database with optional `?category=` filtering |
| **`/api/contact`** | `POST` | Secure intake & consultation logging, returns reference code (`FN-XXXX-2026`) |

---

## 🚀 How to Run Locally

### 1. Start the Node.js Backend Server
```bash
cd backend
npm install
node server.js
```
* **Node.js Backend URL:** [http://localhost:5000](http://localhost:5000)
* Test route: [http://localhost:5000/api/test](http://localhost:5000/api/test)

### 2. Start the React Frontend
```bash
cd frontend
npm install
npm run dev
```
* **React Frontend URL:** [http://localhost:5173](http://localhost:5173)

The React frontend automatically connects to the Node.js backend server!
