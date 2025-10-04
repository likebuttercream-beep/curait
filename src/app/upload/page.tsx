'use client';

import { useMemo, useState } from 'react';
import { categoryDefinitions, type CategoryKey, TAG_SUGGESTIONS, savePrompt } from '../../lib/data';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';

const thumbnailSeeds = Array.from({ length: 8 }, (_, index) => `https://picsum.photos/seed/curait-upload-${index}/640/360`);

type UploadStep = 0 | 1 | 2 | 3;

type FormState = {
  title: string;
  description: string;
  category: CategoryKey;
  preview: string;
  body: string;
  tags: string[];
  allTags: string[];
  price: number;
  discount?: number;
  thumbnail: string;
};

const defaultCategory = categoryDefinitions[0]?.key ?? 'fnb_menu';

export default function UploadPage() {
  const [step, setStep] = useState<UploadStep>(0);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    title: '',
    description: '',
    category: defaultCategory,
    preview: '',
    body: '',
    tags: [],
    allTags: [],
    price: 0,
    discount: undefined,
    thumbnail: thumbnailSeeds[0]
  });

  const tagSuggestions = useMemo(() => TAG_SUGGESTIONS[form.category], [form.category]);

  const steps: string[] = ['기본 정보', '프롬프트 구성', '가격 설정', '검토'];

  const updateForm = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const canProceed = () => {
    if (step === 0) {
      return form.title.trim().length > 2 && form.description.trim().length > 10;
    }
    if (step === 1) {
      return form.body.trim().length > 20 && form.preview.trim().length > 10 && form.tags.length >= 3;
    }
    if (step === 2) {
      return form.price > 0;
    }
    return true;
  };

  const handleNext = () => {
    if (!canProceed()) {
      alert('필수 항목을 입력해주세요.');
      return;
    }
    setStep((prev) => (prev < 3 ? ((prev + 1) as UploadStep) : prev));
  };

  const handlePrevious = () => {
    setStep((prev) => (prev > 0 ? ((prev - 1) as UploadStep) : prev));
  };

  const handleSubmit = async () => {
    if (!canProceed()) {
      alert('필수 항목을 입력해주세요.');
      return;
    }
    setSubmitting(true);
    await savePrompt({
      title: form.title,
      description: form.description,
      category: form.category,
      tags: form.tags.slice(0, 3),
      allTags: form.allTags.length > 0 ? form.allTags : tagSuggestions,
      price: form.price,
      discount: form.discount,
      preview: form.preview,
      body: form.body,
      thumbnail: form.thumbnail
    });
    setSubmitting(false);
    alert('업로드가 완료되었습니다. 추후 Supabase 연결 예정입니다.');
  };

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-black">프롬프트 업로드</h1>
        <p className="text-sm text-black/60">
          제작자용 대시보드로, 4단계 과정을 통해 프롬프트를 등록합니다. 추후 Supabase Storage 및 결제 연동 시 그대로
          확장할 수 있도록 설계되었습니다.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {steps.map((label, index) => (
            <span
              key={label}
              className={`rounded-full px-3 py-1 ${index <= step ? 'bg-black text-white' : 'border border-black/10 text-black/50'}`}
            >
              {index + 1}. {label}
            </span>
          ))}
        </div>
      </header>

      <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
        {step === 0 && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">제목</Label>
              <Input
                id="title"
                placeholder="예: Pop-up Launch Playbook"
                value={form.title}
                onChange={(event) => updateForm('title', event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">설명</Label>
              <textarea
                id="description"
                className="min-h-[120px] w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black shadow-sm focus-visible:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                placeholder="프롬프트 번들의 목적과 기대효과를 작성하세요."
                value={form.description}
                onChange={(event) => updateForm('description', event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="category">카테고리</Label>
              <select
                id="category"
                className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm shadow-sm focus-visible:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                value={form.category}
                onChange={(event) => updateForm('category', event.target.value as CategoryKey)}
              >
                {categoryDefinitions.map((category) => (
                  <option key={category.key} value={category.key}>
                    {category.group} · {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="preview">미리보기 문장</Label>
              <Input
                id="preview"
                placeholder="미리보기 문장을 간결하게 작성하세요."
                value={form.preview}
                onChange={(event) => updateForm('preview', event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="body">프롬프트 본문</Label>
              <textarea
                id="body"
                className="min-h-[200px] w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black shadow-sm focus-visible:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                placeholder="실제 사용할 프롬프트 본문을 작성하세요."
                value={form.body}
                onChange={(event) => updateForm('body', event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>태그 (최대 10개)</Label>
              <div className="flex flex-wrap gap-2">
                {tagSuggestions.map((tag) => {
                  const active = form.allTags.includes(tag) || form.tags.includes(tag);
                  return (
                    <button
                      type="button"
                      key={tag}
                      className={`rounded-full border px-3 py-1 text-xs transition ${
                        active ? 'border-black bg-black text-white' : 'border-black/10 bg-black/5 text-black/70 hover:border-black/30'
                      }`}
                      onClick={() => {
                        const nextTags = active
                          ? form.allTags.filter((item) => item !== tag)
                          : [...form.allTags, tag].slice(0, 10);
                        updateForm('allTags', nextTags);
                        updateForm('tags', nextTags.slice(0, 3));
                      }}
                    >
                      #{tag}
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-black/50">대표 태그 3개는 리스트에 사용됩니다.</p>
            </div>
            <div className="flex flex-col gap-2">
              <Label>썸네일 선택</Label>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {thumbnailSeeds.map((url) => {
                  const active = form.thumbnail === url;
                  return (
                    <button
                      key={url}
                      type="button"
                      className={`group overflow-hidden rounded-2xl border transition ${
                        active ? 'border-black shadow-md' : 'border-transparent hover:border-black/30 shadow'
                      }`}
                      onClick={() => updateForm('thumbnail', url)}
                    >
                      <img src={url} alt="샘플 썸네일" className="h-32 w-full object-cover" loading="lazy" />
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-black/50">추후 파일 업로드 기능과 Supabase Storage 연동 예정입니다.</p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="price">정가 (원)</Label>
              <Input
                id="price"
                type="number"
                min={0}
                value={form.price}
                onChange={(event) => updateForm('price', Number(event.target.value))}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="discount">할인율 (%)</Label>
              <Input
                id="discount"
                type="number"
                min={0}
                max={90}
                value={form.discount ?? ''}
                onChange={(event) => {
                  const value = event.target.value;
                  updateForm('discount', value === '' ? undefined : Number(value));
                }}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-4 text-sm text-black/70">
            <div className="grid gap-2">
              <h2 className="text-lg font-semibold text-black">최종 검토</h2>
              <span>제목: {form.title}</span>
              <span>설명: {form.description}</span>
              <span>카테고리: {form.category}</span>
              <span>가격: {form.price.toLocaleString()}원</span>
              <span>할인: {form.discount ? `${form.discount}%` : '없음'}</span>
              <span>태그: {form.allTags.slice(0, 10).join(', ')}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-black">썸네일 미리보기</span>
              <img src={form.thumbnail} alt="선택한 썸네일" className="h-40 w-full rounded-2xl object-cover" loading="lazy" />
            </div>
            <div className="rounded-2xl border border-black/5 bg-black/5 p-4 text-xs text-black/60">
              저장 시 savePrompt 스텁이 호출됩니다. 추후 Supabase prompts 테이블과 연결하여 제작자 정산 플로우로 확장할
              수 있습니다.
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={handlePrevious} disabled={step === 0}>
          이전
        </Button>
        {step < 3 ? (
          <Button variant="primary" onClick={handleNext}>
            다음 단계
          </Button>
        ) : (
          <Button variant="primary" onClick={handleSubmit} disabled={submitting}>
            {submitting ? '저장 중...' : '등록 완료'}
          </Button>
        )}
      </div>
    </div>
  );
}
