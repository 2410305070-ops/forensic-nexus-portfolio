import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, agency, caseType, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and investigation message are required.' },
        { status: 400 }
      );
    }

    // Generate simulated evidence intake logging
    const caseRef = `FN-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;

    return NextResponse.json({
      success: true,
      caseRef,
      message: 'Forensic consultation request logged into Nexus intake system.',
      intakeData: {
        caseRef,
        sender: name,
        agency: agency || 'Independent Researcher',
        caseType: caseType || 'General Inquest',
        loggedAt: new Date().toISOString(),
        status: 'PENDING_TRIAGE'
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to parse consultation request' },
      { status: 500 }
    );
  }
}
