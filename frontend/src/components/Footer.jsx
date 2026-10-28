import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(5, 6, 9, 0.95)',
        padding: '48px 0 32px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container-nexus">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '32px'
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: '#f8fafc', marginBottom: '4px' }}>
              PRIYA SAINI
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#00f0ff' }}>
              FORENSIC SCIENCE NEXUS // REACT FRONTEND + NODE.JS BACKEND
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
            <a
              href="https://github.com/2410305070-ops"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}
            >
              GitHub ↗
            </a>
            <a
              href="#hero"
              style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}
            >
              LinkedIn ↗
            </a>
            <a
              href="#hero"
              style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}
            >
              ResearchGate ↗
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.04)',
            paddingTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#64748b'
          }}
        >
          <div>© {new Date().getFullYear()} PRIYA SAINI. ALL FORENSIC DOSSIERS PROTECTED.</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>FRONTEND: REACT 18 + VITE</span>
            <span>BACKEND: NODE.JS + EXPRESS</span>
            <span style={{ color: '#10b981' }}>SYSTEMS: NOMINAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
