// ==========================================
// Forensic Science Portfolio - Node.js Backend Server
// ==========================================

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so the React frontend can communicate with Node.js
app.use(cors());

// Enable parsing of JSON & URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ------------------------------------------
// In-Memory Database for Forensic Cases
// ------------------------------------------
const cases = [
  {
    id: 'CASE-01',
    category: 'Digital Forensics',
    title: 'Digital Footprint & Encrypted Storage Recovery',
    subtitle: 'Reconstruction of deleted disk sectors in compromised server hardware',
    summary: 'Executed low-level hex recovery and raw byte forensic extraction on corrupted solid-state storage. Rebuilt FAT/NTFS metadata tables to re-establish chronological timelines for evidentiary presentation.',
    date: '2024-03-12',
    tags: ['Hex Dump', 'EnCase Protocol', 'Chain of Custody', 'SHA-256 Hash Matching'],
    status: 'SOLVED',
    integrityScore: '99.8%',
    findings: [
      'Identified hidden volume spanning unpartitioned cluster blocks (sector 0x4F12A).',
      'Recovered 42 deleted transaction logs matching suspect timestamp profile.',
      'Validated cryptographic chain of custody adhering to ISO/IEC 27037 standards.'
    ]
  },
  {
    id: 'CASE-02',
    category: 'Arson & Chemical',
    title: 'Fire Debris & Hydrocarbon Accelerant Analysis',
    subtitle: 'GC-MS gas chromatography identification of chemical burn patterns',
    summary: 'Analyzed charred floor substrate remnants using solid-phase microextraction (SPME) coupled with GC-MS. Successfully determined pour pattern points of origin and distinguished commercial distillates from synthetic accelerants.',
    date: '2023-11-28',
    tags: ['Gas Chromatography', 'Mass Spectrometry', 'Thermal Degradation', 'Origin Point'],
    status: 'SOLVED',
    integrityScore: '98.4%',
    findings: [
      'Detected medium petroleum distillates (mineral spirits) inside baseboard sub-surface.',
      'Correlated V-pattern thermal signatures with localized volatile hydrocarbon concentrations.',
      'Eliminated accidental electrical origin via arc mapping microscopic inspection.'
    ]
  },
  {
    id: 'CASE-03',
    category: 'Biological & DNA',
    title: 'Trace DNA Isolation & STR Profiling',
    subtitle: 'Ultra-low copy number nuclear DNA extraction from weathered latent touch evidence',
    summary: 'Applied silica-membrane column extraction to isolate degraded cellular touch DNA. Amplified 24 short tandem repeat (STR) loci with capillary electrophoresis comparison.',
    date: '2023-06-15',
    tags: ['STR Profiling', 'PCR Amplification', 'Capillary Electrophoresis', 'Touch DNA'],
    status: 'SOLVED',
    integrityScore: '99.9%',
    findings: [
      'Extracted 0.08 ng/uL high-purity template from swabbed vehicle steering column.',
      'Generated a 21-allele concordant STR profile matching CODIS reference profile.',
      'Achieved random match probability exceeding 1 in 10 billion.'
    ]
  },
  {
    id: 'CASE-04',
    category: 'Ballistics & Toolmarks',
    title: 'Microscopic Striation Matching & Trajectory Vectoring',
    subtitle: '3D confocal surface topography of firearm rifling impressions',
    summary: 'Performed 3D optical profilometry on discharged 9mm projectile fragments. Mapped land and groove striation marks using automated comparison microscopy to definitively identify firearm barrel.',
    date: '2022-09-04',
    tags: ['Comparison Microscopy', 'Trajectory Laser Mapping', 'IBIS Integration', 'Toolmarks'],
    status: 'SOLVED',
    integrityScore: '97.6%',
    findings: [
      'Matched 14 consecutive matching striation striae (CMS) exceeding AFTE criteria.',
      '3D laser trajectory scan confirmed firing elevation at 14.2 degrees azimuth.',
      'Recovered unburnt propellant residue consistent with double-base smokeless powder.'
    ]
  }
];

// ------------------------------------------
// Node.js API Routes
// ------------------------------------------

// GET /api - System Status
app.get('/api', (req, res) => {
  res.json({
    status: 'online',
    runtime: 'Node.js ' + process.version,
    server: 'Express.js Forensic API Server',
    endpoints: {
      status: '/api',
      test: '/api/test',
      cases: '/api/cases',
      contact: '/api/contact'
    },
    timestamp: new Date().toISOString()
  });
});

// GET /api/test - Verification Route
app.get('/api/test', (req, res) => {
  res.status(200).json({
    message: 'Backend is working in Node.js!',
    status: 200,
    timestamp: new Date().toISOString()
  });
});

// GET /api/cases - List Forensic Cases with Category Filtering
app.get('/api/cases', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'All') {
    const filtered = cases.filter(c => c.category.toLowerCase().includes(category.toLowerCase()));
    return res.json({ success: true, count: filtered.length, data: filtered });
  }
  res.json({ success: true, count: cases.length, data: cases });
});

// POST /api/contact - Intake and Consultation Logging
app.post('/api/contact', (req, res) => {
  const { name, email, agency, caseType, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required.'
    });
  }

  const caseRef = `FN-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;

  res.status(201).json({
    success: true,
    caseRef,
    message: 'Forensic consultation request logged into Nexus intake system.',
    intakeData: {
      caseRef,
      sender: name,
      agency: agency || 'Independent Researcher',
      caseType: caseType || 'General Inquest',
      loggedAt: new Date().toISOString(),
      status: 'PENDING_TRIAGE'
    }
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`🚀 Forensic Node.js Backend Server running!`);
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`🧪 Test Endpoint: http://localhost:${PORT}/api/test`);
  console.log(`🔬 Cases Endpoint: http://localhost:${PORT}/api/cases`);
  console.log(`========================================`);
});
