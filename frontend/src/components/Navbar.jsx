import React, { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:5000/api';

export default function Navbar({ onToggleBackdrop, shaderActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [apiStatus, setApiStatus] = useState('checking');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Verify Node.js API status
    fetch(`${API_BASE}/test`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) setApiStatus('online');
      })
      .catch(() => setApiStatus('offline'));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '16px 24px',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(7, 8, 11, 0.88)' : 'rgba(7, 8, 11, 0.5)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(0, 240, 255, 0.15)' : '1px solid transparent'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(59, 130, 246, 0.2))',
              border: '1px solid rgba(0, 240, 255, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00f0ff',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '1rem'
            }}
          >
            PS
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: '#f8fafc', letterSpacing: '0.02em' }}>
              PRIYA SAINI
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#00f0ff', letterSpacing: '0.1em' }}>
              FORENSIC LAB // REACT FRONTEND
            </div>
          </div>
        </a>

        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
          }}
          className="desktop-nav"
        >
          <a href="#cases" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
            // CASE_FILES
          </a>
          <a href="#scene3d" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
            // 3D_RECONSTRUCTION
          </a>
          <a href="#timeline" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
            // TIMELINE
          </a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
            // CONSULTATION
          </a>

          {onToggleBackdrop && (
            <button
              onClick={onToggleBackdrop}
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.75rem' }}
            >
              SHADER: {shaderActive ? 'ON' : 'OFF'}
            </button>
          )}

          {/* Node.js Backend Status Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '20px',
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: apiStatus === 'online' ? '#10b981' : '#f59e0b',
                boxShadow: apiStatus === 'online' ? '0 0 8px #10b981' : 'none'
              }}
            />
            <span style={{ color: apiStatus === 'online' ? '#34d399' : '#fbbf24' }}>
              NODE.JS API {apiStatus.toUpperCase()}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
