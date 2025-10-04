'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Button } from '../../../components/ui/button';
import { useSupabaseAuth } from '../../../lib/supabase-browser';

export default function LoginPage() {
  const { auth } = useSupabaseAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') ?? '/account';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async () => {
    setLoading(true);
    const { error } = await auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      alert(error.message);
      return;
    }
    router.push(redirectTo);
  };

  const handleOAuth = async (provider: 'google' | 'github') => {
    setLoading(true);
    await auth.signInWithOAuth({ provider });
    setLoading(false);
    router.push(redirectTo);
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
      <header className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold text-black">로그인</h1>
        <p className="text-sm text-black/60">Supabase Auth 연동을 위한 스켈레톤입니다.</p>
      </header>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">이메일</Label>
          <Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Button variant="primary" onClick={handleEmailLogin} disabled={loading}>
          {loading ? '로그인 중...' : '이메일 로그인'}
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-black/10" />
        <span className="text-xs uppercase tracking-wider text-black/40">또는</span>
        <span className="h-px flex-1 bg-black/10" />
      </div>
      <div className="flex flex-col gap-3">
        <Button variant="default" onClick={() => handleOAuth('google')} disabled={loading}>
          Google로 계속하기
        </Button>
        <Button variant="default" onClick={() => handleOAuth('github')} disabled={loading}>
          GitHub로 계속하기
        </Button>
      </div>
      <p className="text-xs text-black/50">
        실제 서비스에서는 Supabase Auth의 signInWithPassword / signInWithOAuth 메서드를 그대로 교체하여 사용할 수
        있습니다.
      </p>
    </div>
  );
}
