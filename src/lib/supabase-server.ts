import { cookies, headers } from 'next/headers';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const getSupabaseServerClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    },
    global: {
      headers: {
        'X-Client-Info': 'curait-web'
      }
    },
    cookies: {
      get(name: string) {
        return cookies().get(name)?.value;
      },
      set(name: string, value: string, options: { maxAge?: number }) {
        cookies().set({ name, value, maxAge: options?.maxAge });
      },
      remove(name: string) {
        cookies().delete(name);
      }
    }
  });
};

export const getSessionFromServer = async () => {
  const client = getSupabaseServerClient();
  const {
    data: { session }
  } = await client.auth.getSession();
  return session;
};

export const getServerUser = async () => {
  const client = getSupabaseServerClient();
  const {
    data: { user }
  } = await client.auth.getUser();
  return user;
};

export const getRequestOrigin = (): string | null => {
  const incomingHeaders = headers();
  return incomingHeaders.get('origin') ?? incomingHeaders.get('host');
};
