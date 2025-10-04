'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useSupabaseAuth } from '../lib/supabase-browser';

export function AuthButtons() {
  const { auth } = useSupabaseAuth();
  const [loading, setLoading] = useState(true);
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    let active = true;
    auth.getSession().then((session) => {
      if (!active) return;
      setHasSession(Boolean(session));
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [auth]);

  if (loading) {
    return <div className="h-10 w-24 animate-pulse rounded-2xl bg-black/5" aria-hidden />;
  }

  if (!hasSession) {
    return (
      <div className="flex items-center gap-3">
        <Link href="/auth/login">
          <Button variant="primary">로그인</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link href="/account">
        <Button variant="default">마이페이지</Button>
      </Link>
      <Button
        variant="ghost"
        onClick={async () => {
          await auth.signOut();
          window.location.assign('/');
        }}
      >
        로그아웃
      </Button>
    </div>
  );
}
