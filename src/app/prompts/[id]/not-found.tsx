export default function PromptNotFound() {
  return (
    <div className="rounded-2xl border border-black/5 bg-black/5 p-12 text-center">
      <h1 className="text-2xl font-semibold text-black">프롬프트를 찾을 수 없습니다.</h1>
      <p className="mt-3 text-sm text-black/60">다시 시도하거나 다른 프롬프트를 탐색해보세요.</p>
    </div>
  );
}
