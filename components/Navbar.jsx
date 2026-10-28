'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar({ onToggleBackdrop, shaderActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [apiStatus, setApiStatus] = useState('checking');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Verify Next.js API route status
    fetch('/api/test')
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
        {/* Brand / Title */}
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
              FORENSIC INVESTIGATION LAB
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px'
          }}
          className="desktop-nav"
        >
          <a href="#cases" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', transition: 'color 0.2s' }}>
            // CASE_FILES
          </a>
          <a href="#scene3d" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', transition: 'color 0.2s' }}>
            // 3D_VECTORING
          </a>
          <a href="#timeline" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', transition: 'color 0.2s' }}>
            // TIMELINE
          </a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', transition: 'color 0.2s' }}>
            // CONSULTATION
          </a>

          {/* Shader Toggle Button */}
          {onToggleBackdrop && (
            <button
              onClick={onToggleBackdrop}
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.75rem' }}
              title="Toggle WebGL Background Shader"
            >
              SHADER: {shaderActive ? 'ON' : 'OFF'}
            </button>
          )}

          {/* Live API Health indicator */}
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
              REACT API {apiStatus.toUpperCase()}
            </span>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px'
          }}
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          <span style={{ width: '22px', height: '2px', background: '#00f0ff', transition: 'all 0.3s' }} />
          <span style={{ width: '22px', height: '2px', background: '#00f0ff', transition: 'all 0.3s' }} />
          <span style={{ width: '14px', height: '2px', background: '#00f0ff', transition: 'all 0.3s' }} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            right: 0,
            background: 'rgba(7, 8, 11, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}
        >
          <a onClick={() => setMenuOpen(false)} href="#cases" style={{ color: '#f8fafc', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
            // CASE_FILES
          </a>
          <a onClick={() => setMenuOpen(false)} href="#scene3d" style={{ color: '#f8fafc', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
            // 3D_VECTORING
          </a>
          <a onClick={() => setMenuOpen(false)} href="#timeline" style={{ color: '#f8fafc', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
            // TIMELINE
          </a>
          <a onClick={() => setMenuOpen(false)} href="#contact" style={{ color: '#f8fafc', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
            // CONSULTATION
          </a>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
