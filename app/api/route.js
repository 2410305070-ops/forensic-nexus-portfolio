import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'online',
    framework: 'Next.js 14 (Fullstack React)',
    project: 'Forensic Science Nexus Portfolio',
    architecture: 'Unified React Frontend + React API Backend',
    endpoints: {
      status: '/api',
      test: '/api/test',
      cases: '/api/cases',
      contact: '/api/contact'
    },
    timestamp: new Date().toISOString()
  });
}
