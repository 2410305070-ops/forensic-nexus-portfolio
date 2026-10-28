'use client';

import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        paddingTop: '130px',
        paddingBottom: '70px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container-nexus">
        <div style={{ maxWidth: '840px' }}>
          {/* Status Chip */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div className="data-chip">
              <span className="status-dot" />
              STATUS: EVIDENCE_LAB_ONLINE
            </div>
            <div className="data-chip emerald">
              VERIFIED // ISO/IEC 27037 PROTOCOL
            </div>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              marginBottom: '20px'
            }}
          >
            Decoding Latent Truths Through <br />
            <span className="gradient-text-cyan">Forensic Science & Digital Vectors</span>
          </h1>

          {/* Subtitle / Bio */}
          <p
            style={{
              fontSize: '1.15rem',
              color: '#94a3b8',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '720px'
            }}
          >
            Hi, I’m <strong style={{ color: '#f8fafc' }}>Priya Saini</strong>. Specializing in advanced crime scene investigation, 
            trace evidence recovery, Short Tandem Repeat (STR) DNA amplification, and cyber-minimalist digital evidence reconstruction.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            <a href="#cases" className="btn-primary">
              EXPLORE CASE ARCHIVES ➔
            </a>
            <a href="#scene3d" className="btn-secondary">
              LAUNCH 3D RECONSTRUCTION
            </a>
            <a href="#contact" className="btn-secondary">
              INITIATE CONSULTATION
            </a>
          </div>

          {/* Quick Metrics Ticker */}
          <div
            style={{
              marginTop: '48px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '24px'
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.7rem', fontWeight: 700, color: '#00f0ff' }}>
                99.8%
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                CHAIN OF CUSTODY INTEGRITY
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.7rem', fontWeight: 700, color: '#38bdf8' }}>
                40+
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                LAB EVIDENCE ANALYSES
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.7rem', fontWeight: 700, color: '#a855f7' }}>
                24-LOCI
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                STR DNA PROFILING POWER
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.7rem', fontWeight: 700, color: '#10b981' }}>
                ISO/IEC
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                FORENSIC PROTOCOL COMPLIANT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
