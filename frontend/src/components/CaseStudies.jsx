import React, { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:5000/api';

export default function CaseStudies() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCase, setSelectedCase] = useState(null);

  const categories = ['All', 'Digital Forensics', 'Arson & Chemical', 'Biological & DNA', 'Ballistics & Toolmarks'];

  useEffect(() => {
    setLoading(true);
    const url = activeCategory === 'All'
      ? `${API_BASE}/cases`
      : `${API_BASE}/cases?category=${encodeURIComponent(activeCategory)}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setCases(data.data);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [activeCategory]);

  return (
    <section id="cases" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
      <div className="container-nexus">
        <div className="section-header">
          <div className="section-label">
            <span className="status-dot" />
            EVIDENTIARY ARCHIVE // CASES (FROM NODE.JS API)
          </div>
          <h2 className="section-title">Forensic Case Files</h2>
          <p style={{ color: '#94a3b8', marginTop: '8px', maxWidth: '640px' }}>
            Structured crime scene investigations and laboratory findings fetched live from the Node.js backend server.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#00f0ff', fontFamily: 'var(--font-mono)' }}>
            FETCHING EVIDENCE FROM NODE.JS BACKEND...
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {cases.map(item => (
              <div
                key={item.id}
                className="glass-card"
                style={{ padding: '24px', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                onClick={() => setSelectedCase(item)}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span className="data-chip">{item.id}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#10b981' }}>
                      INTEGRITY: {item.integrityScore}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#f8fafc',
                      marginBottom: '8px',
                      lineHeight: 1.3
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#94a3b8',
                      lineHeight: 1.6,
                      marginBottom: '20px'
                    }}
                  >
                    {item.summary}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                    {item.tags.map(t => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '3px 8px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          borderRadius: '4px',
                          color: '#38bdf8'
                        }}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      paddingTop: '12px'
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748b' }}>
                      DATE: {item.date}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: '#00f0ff',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      VIEW_DOSSIER ➔
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedCase && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(4, 5, 8, 0.85)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setSelectedCase(null)}
          >
            <div
              className="glass-card"
              style={{
                maxWidth: '680px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '36px',
                background: '#0d1117',
                border: '1px solid rgba(0, 240, 255, 0.4)',
                boxShadow: '0 25px 60px -15px rgba(0, 240, 255, 0.3)'
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="data-chip">{selectedCase.id} // CONFIDENTIAL DOSSIER</span>
                <button
                  onClick={() => setSelectedCase(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.1rem'
                  }}
                >
                  ✕ CLOSE
                </button>
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#f8fafc', marginBottom: '8px' }}>
                {selectedCase.title}
              </h2>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#38bdf8', marginBottom: '20px' }}>
                {selectedCase.subtitle}
              </div>

              <div style={{ background: 'rgba(0, 240, 255, 0.04)', border: '1px solid rgba(0, 240, 255, 0.15)', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748b', marginBottom: '4px' }}>
                  FORENSIC SUMMARY
                </div>
                <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  {selectedCase.summary}
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#00f0ff', marginBottom: '10px' }}>
                  KEY EVIDENTIARY FINDINGS:
                </div>
                <ul style={{ paddingLeft: '20px', color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {selectedCase.findings.map((f, i) => (
                    <li key={i} style={{ marginBottom: '6px' }}>{f}</li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                <span className="data-chip emerald">STATUS: {selectedCase.status}</span>
                <button className="btn-primary" onClick={() => setSelectedCase(null)}>
                  RETURN TO ARCHIVE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
