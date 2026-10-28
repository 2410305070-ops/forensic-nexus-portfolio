import { NextResponse } from 'next/server';

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

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  if (category && category !== 'All') {
    const filtered = cases.filter(c => c.category.toLowerCase().includes(category.toLowerCase()));
    return NextResponse.json({ success: true, count: filtered.length, data: filtered });
  }

  return NextResponse.json({ success: true, count: cases.length, data: cases });
}
