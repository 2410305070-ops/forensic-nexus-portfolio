import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Backend is working in React (Next.js App Router)!',
    status: 200,
    server: 'Next.js React Fullstack Server',
    timestamp: new Date().toISOString()
  });
}
