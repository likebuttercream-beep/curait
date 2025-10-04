'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { CATEGORY_LABELS, type CategoryKey, savePrompt } from '../../lib/data';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { formatCurrency, formatDiscountedPrice } from '../../lib/utils';

const thumbnailSeeds = ['concept', 'studio', 'ux', 'data', 'market', 'vision', 'chef', 'planner'];

const steps = ['기본정보', '프롬프트 & 태그', '가격 설정', '검토/완료'] as const;

type UploadState = {
  title: string;
  description: string;
  category?: CategoryKey;
  preview: string;
  body: string;
  tags: string[];
  thumbnail: string;
  price: number;
  discount?: number;
};

const initialState: UploadState = {
  title: '',
  description: '',
  category: undefined,
  preview: '',
  body: '',
  tags: [],
  thumbnail: `https://picsum.photos/seed/curait-${thumbnailSeeds[0]}/640/360`,
  price: 30000,
  discount: undefined
};

const categories = Object.keys(CATEGORY_LABELS) as CategoryKey[];

export default function UploadPage() {
  const [step, setStep] = useState<number>(0);
  const [state, setState] = useState<UploadState>(initialState);
  const [tagInput, setTagInput] = useState<string>('');
  const [saving, setSaving] = useState<boolean>(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const isLastStep = step === steps.length - 1;

  const addTag = () => {
    if (!tagInput.trim()) return;
    const newTags = Array.from(new Set([...state.tags, tagInput.trim()]));
    setState((prev) => ({ ...prev, tags: newTags }));
    setTagInput('');
  };

  const removeTag = (tag: string) => {
    setState((prev) => ({ ...prev, tags: prev.tags.filter((item) => item !== tag) }));
  };

  const validateStep = () => {
    if (step === 0) {
      return state.title.trim().length > 0 && state.description.trim().length > 0 && state.category;
    }
    if (step === 1) {
      return state.body.trim().length > 0 && state.preview.trim().length > 0 && state.tags.length >= 3;
    }
    if (step === 2) {
      return state.price > 0;
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) {
      setResultMessage('필수 정보를 입력해주세요.');
      return;
    }
    setResultMessage(null);
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setResultMessage(null);
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    if (!validateStep()) {
      setResultMessage('필수 정보를 입력해주세요.');
      return;
    }
    setSaving(true);
    try {
      const payload = {
        id: 'temp',
        title: state.title,
        description: state.description,
        category: state.category!,
        tags: state.tags.slice(0, 3),
        allTags: state.tags.slice(0, 10),
        price: state.price,
        discount: state.discount,
        rating: 0,
        sold: 0,
        createdAt: new Date().toISOString(),
        author: { id: 'current', name: 'Current Creator' },
        thumbnail: state.thumbnail,
        preview: state.preview,
        body: state.body
      };
      await savePrompt(payload);
      setResultMessage('임시 저장이 완료되었습니다. Supabase 연동 시 실제 업로드됩니다.');
      setStep(steps.length - 1);
    } catch (error) {
      console.error(error);
      setResultMessage('저장 중 문제가 발생했습니다.');
    } finally {
      setSaving(false);
    }
  };

  const reviewPrice = useMemo(() => formatCurrency(formatDiscountedPrice(state.price, state.discount)), [state.price, state.discount]);

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold text-foreground">프롬프트 업로드</h1>
        <p className="text-sm text-neutral-600">4단계로 Curait Prompt Market에 프롬프트를 등록하세요.</p>
      </header>

      <nav className="grid gap-3 sm:grid-cols-4">
        {steps.map((label, index) => (
          <div
            key={label}
            className={`rounded-2xl border px-4 py-3 text-sm ${
              index === step ? 'border-black bg-black text-white' : 'border-neutral-200 bg-white text-neutral-600'
            }`}
          >
            {index + 1}. {label}
          </div>
        ))}
      </nav>

      <section className="flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
        {step === 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">제목 *</Label>
                <Input
                  id="title"
                  value={state.title}
                  onChange={(event) => setState((prev) => ({ ...prev, title: event.target.value }))}
                  placeholder="예: Seasonal Fusion Menu Blueprint"
                />
              </div>
              <div>
                <Label htmlFor="description">설명 *</Label>
                <textarea
                  id="description"
                  className="h-32 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                  value={state.description}
                  onChange={(event) => setState((prev) => ({ ...prev, description: event.target.value }))}
                  placeholder="프롬프트가 해결하는 문제와 활용 장점을 설명하세요"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="category">카테고리 *</Label>
              <div className="mt-3 grid max-h-64 gap-2 overflow-y-auto rounded-2xl border border-neutral-200 p-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setState((prev) => ({ ...prev, category }))}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition ${
                      state.category === category ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-700'
                    }`}
                  >
                    <span>{CATEGORY_LABELS[category]}</span>
                    {state.category === category && <span>선택됨</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <Label htmlFor="preview">미리보기 *</Label>
                <textarea
                  id="preview"
                  className="h-32 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                  value={state.preview}
                  onChange={(event) => setState((prev) => ({ ...prev, preview: event.target.value }))}
                  placeholder="프롬프트의 주요 요약을 적어주세요"
                />
              </div>
              <div>
                <Label htmlFor="body">프롬프트 본문 *</Label>
                <textarea
                  id="body"
                  className="h-48 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                  value={state.body}
                  onChange={(event) => setState((prev) => ({ ...prev, body: event.target.value }))}
                  placeholder="실제 사용할 프롬프트 텍스트를 작성하세요. 변수는 {variable} 형식으로 표기합니다."
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <Label>대표 태그 (최소 3개)</Label>
                <div className="mt-3 flex items-center gap-3">
                  <Input
                    value={tagInput}
                    onChange={(event) => setTagInput(event.target.value)}
                    placeholder="예: campaign, ux, seo"
                  />
                  <Button type="button" onClick={addTag}>
                    추가
                  </Button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {state.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700 hover:bg-neutral-200"
                    >
                      #{tag} ✕
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Label>썸네일 선택</Label>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {thumbnailSeeds.map((seed) => {
                    const url = `https://picsum.photos/seed/curait-${seed}/640/360`;
                    const selected = state.thumbnail === url;
                    return (
                      <button
                        key={seed}
                        type="button"
                        onClick={() => setState((prev) => ({ ...prev, thumbnail: url }))}
                        className={`overflow-hidden rounded-2xl border ${
                          selected ? 'border-black ring-2 ring-black' : 'border-transparent'
                        }`}
                      >
                        <Image
                          src={url}
                          alt={`${seed} 썸네일`}
                          width={320}
                          height={180}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-xs text-neutral-500">추후 사용자 파일 업로드를 지원할 예정입니다.</p>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <Label htmlFor="price">정가 (원) *</Label>
                <Input
                  id="price"
                  type="number"
                  min={1000}
                  value={state.price}
                  onChange={(event) => setState((prev) => ({ ...prev, price: Number(event.target.value) }))}
                />
              </div>
              <div>
                <Label htmlFor="discount">할인율 (%)</Label>
                <Input
                  id="discount"
                  type="number"
                  min={0}
                  max={90}
                  value={state.discount ?? ''}
                  onChange={(event) =>
                    setState((prev) => ({ ...prev, discount: event.target.value ? Number(event.target.value) : undefined }))
                  }
                  placeholder="예: 20"
                />
              </div>
            </div>
            <div className="rounded-2xl bg-neutral-50 p-6">
              <h3 className="text-base font-semibold text-foreground">할인 미리보기</h3>
              <p className="mt-2 text-sm text-neutral-600">최종 판매가 {reviewPrice}</p>
              {state.discount && (
                <p className="text-xs text-neutral-500">정가 대비 {state.discount}% 할인</p>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">등록 정보 확인</h2>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>
                  <strong>제목:</strong> {state.title}
                </li>
                <li>
                  <strong>설명:</strong> {state.description}
                </li>
                <li>
                  <strong>카테고리:</strong> {state.category ? CATEGORY_LABELS[state.category] : '미선택'}
                </li>
                <li>
                  <strong>태그:</strong> {state.tags.join(', ')}
                </li>
                <li>
                  <strong>가격:</strong> {reviewPrice}
                </li>
              </ul>
              <div>
                <h3 className="text-base font-semibold text-foreground">프롬프트 본문</h3>
                <pre className="mt-2 max-h-64 overflow-y-auto rounded-2xl bg-neutral-50 p-4 text-xs text-neutral-700">
{state.body}
                </pre>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src={state.thumbnail}
                alt="선택한 썸네일 미리보기"
                width={320}
                height={180}
                className="w-full rounded-2xl object-cover"
              />
              <p className="text-xs text-neutral-500">완료 시 Supabase 저장소에 업로드되도록 설계되었습니다.</p>
              <Button type="button" variant="primary" onClick={handleSubmit} disabled={saving} className="w-full">
                {saving ? '저장 중...' : '임시 저장' }
              </Button>
              {resultMessage && <p className="text-sm text-neutral-600">{resultMessage}</p>}
            </div>
          </div>
        )}
      </section>

      <div className="flex justify-between">
        <Button type="button" onClick={handlePrev} disabled={step === 0}>
          이전
        </Button>
        {!isLastStep && (
          <Button type="button" variant="primary" onClick={handleNext}>
            다음
          </Button>
        )}
        {isLastStep && step !== 3 && (
          <Button type="button" variant="primary" onClick={handleNext}>
            요약 보기
          </Button>
        )}
      </div>
      {resultMessage && step !== 3 && <p className="text-sm text-neutral-600">{resultMessage}</p>}
    </div>
  );
}
