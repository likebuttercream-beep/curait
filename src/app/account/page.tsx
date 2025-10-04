import { redirect } from 'next/navigation';
import { getServerSession } from '../../lib/supabase-server';

export default async function AccountPage() {
  const session = await getServerSession();

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold text-black">마이페이지</h1>
      <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
        <p className="text-sm text-black/70">세션 ID: {session.user?.id}</p>
        <p className="text-sm text-black/60">Supabase Auth 연동 시 실제 사용자 정보와 결제 이력을 노출합니다.</p>
      </div>
    </div>
  );
}
