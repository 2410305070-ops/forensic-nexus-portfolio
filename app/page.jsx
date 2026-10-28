'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ThreeForensicScene from '../components/ThreeForensicScene';
import ShaderBackdrop from '../components/ShaderBackdrop';
import CaseStudies from '../components/CaseStudies';
import LabTimeline from '../components/LabTimeline';
import InvestigationForm from '../components/InvestigationForm';
import Footer from '../components/Footer';

export default function HomePage() {
  const [shaderActive, setShaderActive] = useState(true);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background WebGL Shader (Can be toggled from navbar) */}
      <ShaderBackdrop active={shaderActive} />

      {/* Navigation Header */}
      <Navbar
        shaderActive={shaderActive}
        onToggleBackdrop={() => setShaderActive(!shaderActive)}
      />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* 3D Forensic Reconstruction Section */}
        <section id="scene3d" style={{ padding: '40px 0 80px', position: 'relative', zIndex: 10 }}>
          <div className="container-nexus">
            <div className="section-header">
              <div className="section-label">
                <span className="status-dot" />
                VIRTUAL LABORATORY // THREE.JS
              </div>
              <h2 className="section-title">3D Evidence Reconstruction</h2>
              <p style={{ color: '#94a3b8', marginTop: '8px', maxWidth: '640px' }}>
                Spatial orientation model of crime scene vectors, cryptographic data cubes, and ballistic trajectory angles rendered in real-time WebGL.
              </p>
            </div>

            <ThreeForensicScene />
          </div>
        </section>

        {/* Case Studies Section (Loads from /api/cases) */}
        <CaseStudies />

        {/* Experience Timeline */}
        <LabTimeline />

        {/* Consultation & Intake Form (Posts to /api/contact) */}
        <InvestigationForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
