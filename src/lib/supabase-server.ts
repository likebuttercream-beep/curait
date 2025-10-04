import { cookies } from 'next/headers';

export type ServerSession = {
  user: {
    id: string;
    email?: string;
  } | null;
};

export async function getServerSession(): Promise<ServerSession | null> {
  const sessionCookie = cookies().get('curait-session');
  if (!sessionCookie) return null;
  return { user: { id: sessionCookie.value, email: 'demo@curait.market' } };
}
