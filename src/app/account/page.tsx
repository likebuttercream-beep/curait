import { redirect } from 'next/navigation';
import { getSessionFromServer } from '../../lib/supabase-server';

export default async function AccountPage() {
  const session = await getSessionFromServer();
  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold text-foreground">마이페이지</h1>
      <p className="text-sm text-neutral-600">로그인한 사용자를 위한 계정 관리 페이지입니다. 곧 Supabase 프로필 및 결제 정보를 연결할 예정입니다.</p>
      <div className="rounded-2xl bg-neutral-50 p-6 text-sm text-neutral-700">
        <p>이메일: {session.user?.email}</p>
        <p className="mt-2">세션 ID: {session.access_token.slice(0, 12)}...</p>
      </div>
    </div>
  );
}
