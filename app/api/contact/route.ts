import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, message, subject } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Get API key from environment variable (server-side only)
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      console.error('WEB3FORMS_ACCESS_KEY not configured');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Forward to Web3Forms API
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Adding headers to reduce chance of upstream CF challenge
        'User-Agent': 'BeyondSmilesSite/1.0 (+https://www.beyondsmiles.net)',
        'Origin': 'https://www.beyondsmiles.net',
        'Referer': 'https://www.beyondsmiles.net',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        phone,
        message: message || 'No additional message provided',
        from_name: name,
        email: 'no-reply@beyondsmiles.net',
        subject: subject || 'New Contact Request from Beyond Smiles Website',
      }),
    });

    const contentType = response.headers.get('content-type') || '';
    let result: any;

    if (contentType.includes('application/json')) {
      result = await response.json();
    } else {
      // Fallback: capture text to avoid JSON parse errors and surface useful info
      const text = await response.text();
      console.error('Web3Forms non-JSON response', response.status, text.slice(0, 300));
      return NextResponse.json(
        { success: false, error: 'Upstream service returned an unexpected response', detail: text.slice(0, 300) },
        { status: 502 }
      );
    }

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: 'Failed to send message' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}


