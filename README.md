# 🔬 Forensic Science Nexus Portfolio (Fullstack React)

> An interactive, cyber-minimalist forensic science portfolio and digital laboratory showcase developed by **Priya Saini**, built entirely in **React & Next.js** (Unified React Frontend + React API Backend).

---

## 🌟 Highlights & Features

- **Unified React Architecture**: Both frontend UI and backend REST API routes are written entirely in React and Next.js App Router (no separate backend server needed!).
- **Priya Saini Portfolio**: Case studies in *Digital Footprint Recovery*, *Fire Debris Analysis*, *Trace DNA Profiling*, and *Microscopic Striation Matching*.
- **Interactive 3D Evidence Reconstruction**: Real-time Three.js scene featuring cyber-forensic particle grids, rotating holographic evidence cubes, and trajectory laser vectors.
- **Digital Lab WebGL Shader**: Animated cyber-forensic background with dynamic scanlines and an on/off toggle.
- **Fullstack React API Endpoints**:
  - `GET /api` - System health and available endpoints
  - `GET /api/test` - Verification test route
  - `GET /api/cases` - Dynamic forensic case archives with category filtering
  - `POST /api/contact` - Case intake and consultation submission system
- **Filterable Case Dossier Modal**: Interactive inspection of evidentiary findings, short tandem repeat (STR) loci, and chain-of-custody tracking.
- **Intake Logging System**: Direct casework requests generate verified case reference codes (e.g. `FN-XXXX-2024`).

---

## 📁 Project Structure

```
├── app/
│   ├── layout.jsx                             # Root layout & SEO metadata
│   ├── globals.css                            # Vanilla CSS cyber-forensic design system
│   ├── page.jsx                               # Main fullstack React page
│   └── api/                                   # Next.js React Backend API Routes
│       ├── route.js                           # Root API status
│       ├── test/route.js                      # Test route
│       ├── cases/route.js                     # Case studies API
│       └── contact/route.js                   # Consultation intake API
│
├── components/                                # Modular React UI Components
│   ├── Navbar.jsx                             # Navigation with live API health indicator
│   ├── Hero.jsx                               # Headline, metrics ticker & bio
│   ├── ThreeForensicScene.jsx                 # Interactive Three.js 3D scene
│   ├── ShaderBackdrop.jsx                     # WebGL canvas background shader
│   ├── CaseStudies.jsx                        # Case files grid & modal dossier
│   ├── LabTimeline.jsx                        # Chronological experience timeline
│   ├── InvestigationForm.jsx                  # Consultation intake form
│   └── Footer.jsx                             # Links & system indicators
│
├── package.json                               # Next.js, React, Three.js dependencies
└── next.config.mjs                            # Next.js configuration
```

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Unified React Development Server
```bash
npm run dev
```

* Open [http://localhost:5000](http://localhost:5000) in your browser.
* Both your React Frontend and React Backend API will be running seamlessly on port 5000.
