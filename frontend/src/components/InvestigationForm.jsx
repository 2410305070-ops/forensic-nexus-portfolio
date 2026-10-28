import React, { useState } from 'react';

const API_BASE = 'http://localhost:5000/api';

export default function InvestigationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agency: '',
    caseType: 'Digital Forensics',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setResult(data);
        setFormData({ name: '', email: '', agency: '', caseType: 'Digital Forensics', message: '' });
      } else {
        setError(data.error || 'Failed to submit inquiry');
      }
    } catch (err) {
      setError('Network communication failure to Node.js backend API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
      <div className="container-nexus">
        <div className="section-header">
          <div className="section-label">
            <span className="status-dot" />
            SECURE TRANSMISSION // INTAKE (POST TO NODE.JS)
          </div>
          <h2 className="section-title">Request Forensic Consultation</h2>
          <p style={{ color: '#94a3b8', marginTop: '8px', maxWidth: '640px' }}>
            Initiate a secure inquiry regarding digital evidence recovery, latent print analysis, or scientific casework consultation.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#f8fafc', marginBottom: '16px' }}>
              Laboratory Protocols & Compliance
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
              All communications and evidence submissions are processed under strict confidentiality protocols adhering to standard chain of custody guidelines.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="data-chip">PROTOCOL</span>
                <span style={{ fontSize: '0.85rem', color: '#cbd5e1', fontFamily: 'var(--font-mono)' }}>
                  ISO/IEC 17025 Forensic Testing Standards
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="data-chip emerald">SECURITY</span>
                <span style={{ fontSize: '0.85rem', color: '#cbd5e1', fontFamily: 'var(--font-mono)' }}>
                  End-to-End Cryptographic Hashing
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="data-chip amber">BACKEND</span>
                <span style={{ fontSize: '0.85rem', color: '#cbd5e1', fontFamily: 'var(--font-mono)' }}>
                  Node.js / Express REST API
                </span>
              </div>
            </div>

            <div style={{ padding: '16px', background: 'rgba(0, 240, 255, 0.04)', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.15)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#00f0ff', marginBottom: '4px' }}>
                DIRECT INVESTIGATOR DISPATCH:
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#f8fafc' }}>
                priya.saini.forensics@example.com
              </div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '32px' }}>
            {result ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10b981', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 16px' }}>
                  ✓
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: '#f8fafc', marginBottom: '8px' }}>
                  Intake Dossier Logged Successfully!
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>
                  Your inquiry has been assigned case reference code by the Node.js API:
                </p>
                <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid #00f0ff', borderRadius: '6px', fontFamily: 'var(--font-mono)', color: '#00f0ff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '24px' }}>
                  {result.caseRef}
                </div>
                <div>
                  <button className="btn-secondary" onClick={() => setResult(null)}>
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#94a3b8', marginBottom: '6px' }}>
                    INVESTIGATOR / CLIENT NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Det. Alex Vance"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'rgba(7, 8, 11, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '6px',
                      color: '#f8fafc',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#94a3b8', marginBottom: '6px' }}>
                    SECURE CONTACT EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="investigator@agency.gov"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'rgba(7, 8, 11, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '6px',
                      color: '#f8fafc',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#94a3b8', marginBottom: '6px' }}>
                      AGENCY / INSTITUTION
                    </label>
                    <input
                      type="text"
                      value={formData.agency}
                      onChange={e => setFormData({ ...formData, agency: e.target.value })}
                      placeholder="State Crime Lab"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: 'rgba(7, 8, 11, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '6px',
                        color: '#f8fafc',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#94a3b8', marginBottom: '6px' }}>
                      INQUIRY DISCIPLINE
                    </label>
                    <select
                      value={formData.caseType}
                      onChange={e => setFormData({ ...formData, caseType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: 'rgba(7, 8, 11, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '6px',
                        color: '#f8fafc',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Digital Forensics">Digital Forensics</option>
                      <option value="Biological & DNA">Biological & DNA</option>
                      <option value="Arson & Chemical">Arson & Chemical</option>
                      <option value="Ballistics & Toolmarks">Ballistics & Toolmarks</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#94a3b8', marginBottom: '6px' }}>
                    CASEWORK SCOPE / PARTICULARS *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide relevant parameters, evidence types, or academic collaboration scope..."
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'rgba(7, 8, 11, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '6px',
                      color: '#f8fafc',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {error && (
                  <div style={{ color: '#ef4444', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                    ✕ {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', padding: '12px' }}
                >
                  {loading ? 'TRANSMITTING TO NODE.JS API...' : 'SUBMIT SECURE INQUIRY ➔'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
