'use client';

export type SupabaseSession = {
  user: {
    id: string;
    email?: string;
  } | null;
};

type AuthResponse = {
  data: { session: SupabaseSession | null };
  error: Error | null;
};

type OAuthProvider = 'google' | 'github';

type SignInArgs = {
  email?: string;
  password?: string;
  provider?: OAuthProvider;
};

const SESSION_COOKIE = 'curait-session';

function setCookie(value: string | null) {
  if (typeof document === 'undefined') return;
  if (value) {
    document.cookie = `${SESSION_COOKIE}=${value}; path=/; max-age=604800; SameSite=Lax`;
  } else {
    document.cookie = `${SESSION_COOKIE}=; path=/; max-age=0;`;
  }
}

function getCookie(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${SESSION_COOKIE}=([^;]*)`));
  return match?.[1] ?? null;
}

export function useSupabaseAuth() {
  const getSession = async (): Promise<SupabaseSession | null> => {
    const cookie = getCookie();
    if (!cookie) return null;
    return { user: { id: cookie, email: 'demo@curait.market' } };
  };

  const signOut = async () => {
    setCookie(null);
  };

  const signInWithPassword = async ({ email }: SignInArgs): Promise<AuthResponse> => {
    const id = `user-${Date.now()}`;
    setCookie(id);
    return {
      data: { session: { user: { id, email } } },
      error: null
    };
  };

  const signInWithOAuth = async ({ provider }: SignInArgs): Promise<AuthResponse> => {
    const id = `${provider}-user-${Date.now()}`;
    setCookie(id);
    return {
      data: { session: { user: { id, email: `${provider}@curait.market` } } },
      error: null
    };
  };

  return {
    auth: {
      getSession,
      signOut,
      signInWithPassword,
      signInWithOAuth
    }
  };
}
