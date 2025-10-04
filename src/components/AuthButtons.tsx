'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { Button } from './ui/button';
import { getSupabaseBrowserClient } from '../lib/supabase-browser';

export const AuthButtons = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    client.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    const {
      data: { subscription }
    } = client.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    const client = getSupabaseBrowserClient();
    await client.auth.signOut();
    setSession(null);
  };

  if (loading) {
    return <div className="h-10 w-32 animate-pulse rounded-2xl bg-neutral-200" aria-hidden />;
  }

  if (!session) {
    return (
      <div className="flex items-center gap-3">
        <Link href="/auth/login" aria-label="로그인 페이지로 이동">
          <Button size="sm">로그인</Button>
        </Link>
        <Link href="/upload" aria-label="프롬프트 업로드 페이지로 이동">
          <Button size="sm" variant="primary">
            프롬프트 업로드
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link href="/account" aria-label="마이페이지로 이동">
        <Button size="sm" variant="primary">
          마이페이지
        </Button>
      </Link>
      <Button size="sm" onClick={handleSignOut} aria-label="로그아웃">
        로그아웃
      </Button>
    </div>
  );
};
