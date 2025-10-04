import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '../../../lib/supabase-server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  if (code) {
    const client = getSupabaseServerClient();
    await client.auth.exchangeCodeForSession(code);
  }
  return NextResponse.redirect(new URL('/account', request.url));
}
