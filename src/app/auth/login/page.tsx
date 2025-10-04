'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSupabaseBrowserClient } from '../../../lib/supabase-browser';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const client = getSupabaseBrowserClient();
    const { error } = await client.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('로그인 성공!');
      router.push('/account');
    }
    setLoading(false);
  };

  const handleOAuth = async (provider: 'google' | 'github') => {
    const client = getSupabaseBrowserClient();
    await client.auth.signInWithOAuth({ provider, options: { redirectTo: `${window.location.origin}/auth/callback` } });
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold text-foreground">로그인</h1>
      <form className="space-y-4" onSubmit={handleEmailLogin}>
        <div>
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Button type="submit" variant="primary" className="w-full" disabled={loading}>
          {loading ? '로그인 중...' : '이메일로 로그인'}
        </Button>
      </form>
      <div className="flex items-center gap-4 text-xs text-neutral-400">
        <span className="h-px flex-1 bg-neutral-200" />SNS 계정으로 로그인<span className="h-px flex-1 bg-neutral-200" />
      </div>
      <div className="grid gap-3">
        <Button type="button" onClick={() => handleOAuth('google')}>
          Google 계정으로 로그인
        </Button>
        <Button type="button" onClick={() => handleOAuth('github')}>
          GitHub 계정으로 로그인
        </Button>
      </div>
      {message && <p className="text-sm text-neutral-600">{message}</p>}
    </div>
  );
}
