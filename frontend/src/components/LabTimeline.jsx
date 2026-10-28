import React from 'react';

const timelineData = [
  {
    period: '2023 - PRESENT',
    role: 'Student Forensic Investigator',
    organization: 'University Forensic Science Laboratory',
    description: 'Lead student investigator managing chain-of-custody protocols for mock physical and cyber crime scenes. Conduct latent fingerprint development via cyanoacrylate fuming and ninhydrin visualization.',
    tags: ['Chain of Custody', 'Crime Scene Mapping', 'Latent Print Processing']
  },
  {
    period: '2022 - 2023',
    role: 'Forensic Biology & DNA Lab Assistant',
    organization: 'Department of Forensic Biology',
    description: 'Assisted in PCR amplification setup, micro-centrifugation, and gel electrophoresis. Maintained contamination-free sterile chamber standards under strict laboratory QA/QC directives.',
    tags: ['DNA Extraction', 'PCR Thermal Cycling', 'Sterile Bio-Safety Protocol']
  },
  {
    period: '2021 - 2022',
    role: 'Forensic Chemistry Research Fellow',
    organization: 'Analytical Instrumentation Center',
    description: 'Operated Fourier-Transform Infrared Spectroscopy (FTIR) and gas chromatography equipment to identify unknown crystalline substances and volatile accelerant residues.',
    tags: ['FTIR Spectroscopy', 'GC-MS Analysis', 'Chemical Identification']
  }
];

export default function LabTimeline() {
  return (
    <section id="timeline" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
      <div className="container-nexus">
        <div className="section-header">
          <div className="section-label">
            <span className="status-dot" />
            CHRONOLOGICAL LOG // EXPERIENCE
          </div>
          <h2 className="section-title">Investigation & Lab Journey</h2>
        </div>

        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          <div
            style={{
              position: 'absolute',
              top: '8px',
              bottom: '8px',
              left: '7px',
              width: '2px',
              background: 'linear-gradient(to bottom, #00f0ff 0%, #3b82f6 50%, rgba(255, 255, 255, 0.05) 100%)',
              boxShadow: '0 0 12px rgba(0, 240, 255, 0.4)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {timelineData.map((item, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    left: '-32px',
                    top: '6px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: '#07080b',
                    border: '2px solid #00f0ff',
                    boxShadow: '0 0 10px #00f0ff',
                    zIndex: 2
                  }}
                />

                <div className="glass-card" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                    <span className="data-chip">{item.period}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#38bdf8' }}>
                      {item.organization}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
                    {item.role}
                  </h3>

                  <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {item.tags.map(t => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '3px 8px',
                          background: 'rgba(0, 240, 255, 0.05)',
                          border: '1px solid rgba(0, 240, 255, 0.15)',
                          borderRadius: '4px',
                          color: '#00f0ff'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
