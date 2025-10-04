export type Role = 'user' | 'creator' | 'admin';
export type MembershipLevel = 'FREE' | 'PRO' | 'ENTERPRISE';

export type Author = {
  id: string;
  name: string;
  avatar?: string;
  role?: Role;
  membership_level?: MembershipLevel;
};

type CategoryDefinition = {
  key: CategoryKey;
  label: string;
  group: string;
};

export type CategoryKey =
  | 'fnb_menu'
  | 'fnb_marketing'
  | 'fnb_reviews'
  | 'fnb_inventory'
  | 'fnb_staffing'
  | 'fnb_analytics'
  | 'retail_copy'
  | 'retail_display'
  | 'retail_promo'
  | 'retail_turnover'
  | 'retail_membership'
  | 'tax_yearend'
  | 'tax_vat'
  | 'tax_saving'
  | 'tax_fs'
  | 'tax_script'
  | 'mfg_schedule'
  | 'mfg_quality'
  | 'mfg_cost'
  | 'mfg_maintenance'
  | 'mfg_safety'
  | 'it_code'
  | 'it_api'
  | 'it_bugfix'
  | 'it_test'
  | 'it_perf'
  | 'pm_spec'
  | 'pm_scenario'
  | 'pm_competitor'
  | 'pm_ux'
  | 'pm_data'
  | 'creative_brand'
  | 'creative_image'
  | 'creative_feedback'
  | 'creative_pitch'
  | 'creative_color'
  | 'mkt_campaign'
  | 'mkt_copy'
  | 'mkt_influencer'
  | 'mkt_analytics'
  | 'mkt_calendar'
  | 'edu_curriculum'
  | 'edu_material'
  | 'edu_exam'
  | 'edu_feedback'
  | 'edu_parent'
  | 'health_notice'
  | 'health_reminder'
  | 'health_content'
  | 'health_summary'
  | 'health_campaign'
  | 'realty_ad'
  | 'realty_price'
  | 'realty_doc'
  | 'realty_schedule'
  | 'realty_safety'
  | 'legal_contract'
  | 'legal_consult'
  | 'legal_checklist'
  | 'legal_admin'
  | 'legal_evidence'
  | 'solo_automation'
  | 'solo_calendar'
  | 'solo_portfolio'
  | 'solo_communication'
  | 'solo_tax'
  | 'ngo_event'
  | 'ngo_assets'
  | 'ngo_donor'
  | 'ngo_report'
  | 'ngo_survey'
  | 'travel_course'
  | 'travel_package'
  | 'travel_script'
  | 'travel_sns'
  | 'travel_review'
  | 'logi_delivery'
  | 'logi_warehouse'
  | 'logi_route'
  | 'logi_notice'
  | 'logi_cost'
  | 'hr_hiring'
  | 'hr_interview'
  | 'hr_onboarding'
  | 'hr_schedule'
  | 'hr_engagement'
  | 'wed_concept'
  | 'wed_checklist'
  | 'wed_invite'
  | 'wed_budget'
  | 'wed_after';

export type PromptItem = {
  id: string;
  title: string;
  description: string;
  category: CategoryKey;
  tags: string[];
  allTags?: string[];
  price: number;
  discount?: number;
  rating: number;
  sold: number;
  createdAt: string;
  author: Author;
  thumbnail: string;
  preview: string;
  body: string;
};

export type Review = {
  id: string;
  promptId: string;
  author: Author;
  rating: number;
  comment: string;
  createdAt: string;
};

export type CheckoutMode = 'one_time' | 'subscription';

export const categoryDefinitions: CategoryDefinition[] = [
  { key: 'fnb_menu', label: '메뉴·레시피 개발', group: 'F&B·외식업' },
  { key: 'fnb_marketing', label: '시즌·이벤트 마케팅', group: 'F&B·외식업' },
  { key: 'fnb_reviews', label: '고객 리뷰/컴플레인 응대', group: 'F&B·외식업' },
  { key: 'fnb_inventory', label: '발주·재고 관리', group: 'F&B·외식업' },
  { key: 'fnb_staffing', label: '인력 스케줄표 생성', group: 'F&B·외식업' },
  { key: 'fnb_analytics', label: '매출 분석 리포트', group: 'F&B·외식업' },
  { key: 'retail_copy', label: '상품 설명·카피라이팅', group: '소매·리테일' },
  { key: 'retail_display', label: '진열·디스플레이 아이디어', group: '소매·리테일' },
  { key: 'retail_promo', label: '프로모션 기획', group: '소매·리테일' },
  { key: 'retail_turnover', label: '재고 회전율 분석', group: '소매·리테일' },
  { key: 'retail_membership', label: '고객 멤버십 운영 팁', group: '소매·리테일' },
  { key: 'tax_yearend', label: '연말정산 안내', group: '세무·회계' },
  { key: 'tax_vat', label: '부가세/종소세 신고 가이드', group: '세무·회계' },
  { key: 'tax_saving', label: '절세 전략', group: '세무·회계' },
  { key: 'tax_fs', label: '재무제표 분석', group: '세무·회계' },
  { key: 'tax_script', label: '상담 스크립트', group: '세무·회계' },
  { key: 'mfg_schedule', label: '생산 일정 최적화', group: '제조·생산' },
  { key: 'mfg_quality', label: '품질 관리 체크리스트', group: '제조·생산' },
  { key: 'mfg_cost', label: '자재 원가 절감', group: '제조·생산' },
  { key: 'mfg_maintenance', label: '설비 유지보수 계획', group: '제조·생산' },
  { key: 'mfg_safety', label: '안전교육 자료', group: '제조·생산' },
  { key: 'it_code', label: '코드 생성/리팩토링', group: 'IT 개발' },
  { key: 'it_api', label: 'API 설계·문서화', group: 'IT 개발' },
  { key: 'it_bugfix', label: '버그·에러 해결', group: 'IT 개발' },
  { key: 'it_test', label: '테스트 코드 생성', group: 'IT 개발' },
  { key: 'it_perf', label: '성능 최적화', group: 'IT 개발' },
  { key: 'pm_spec', label: '기능 기획서 작성', group: '서비스 기획' },
  { key: 'pm_scenario', label: '사용자 시나리오 설계', group: '서비스 기획' },
  { key: 'pm_competitor', label: '경쟁사 분석', group: '서비스 기획' },
  { key: 'pm_ux', label: 'UI/UX 개선 제안', group: '서비스 기획' },
  { key: 'pm_data', label: '데이터 분석 리포트', group: '서비스 기획' },
  { key: 'creative_brand', label: '브랜드 콘셉트 제안', group: '디자인·크리에이티브' },
  { key: 'creative_image', label: '이미지 생성 프롬프트', group: '디자인·크리에이티브' },
  { key: 'creative_feedback', label: '피드백·리뷰 가이드', group: '디자인·크리에이티브' },
  { key: 'creative_pitch', label: '프레젠테이션 디자인', group: '디자인·크리에이티브' },
  { key: 'creative_color', label: '컬러·폰트 추천', group: '디자인·크리에이티브' },
  { key: 'mkt_campaign', label: '캠페인 기획', group: '마케팅·광고' },
  { key: 'mkt_copy', label: '광고 문구', group: '마케팅·광고' },
  { key: 'mkt_influencer', label: '인플루언서 협업 전략', group: '마케팅·광고' },
  { key: 'mkt_analytics', label: '마케팅 성과 분석', group: '마케팅·광고' },
  { key: 'mkt_calendar', label: '콘텐츠 캘린더', group: '마케팅·광고' },
  { key: 'edu_curriculum', label: '강의 커리큘럼 설계', group: '교육·강사' },
  { key: 'edu_material', label: '학습 자료 제작', group: '교육·강사' },
  { key: 'edu_exam', label: '시험 문제·퀴즈', group: '교육·강사' },
  { key: 'edu_feedback', label: '수업 피드백 자동화', group: '교육·강사' },
  { key: 'edu_parent', label: '학부모 소통 메시지', group: '교육·강사' },
  { key: 'health_notice', label: '환자 안내문 작성', group: '의료·헬스케어' },
  { key: 'health_reminder', label: '진료 예약 알림', group: '의료·헬스케어' },
  { key: 'health_content', label: '건강 정보 콘텐츠', group: '의료·헬스케어' },
  { key: 'health_summary', label: '차트·기록 요약', group: '의료·헬스케어' },
  { key: 'health_campaign', label: '예방 캠페인 자료', group: '의료·헬스케어' },
  { key: 'realty_ad', label: '매물 설명·광고 문구', group: '부동산·건설' },
  { key: 'realty_price', label: '시세 분석 보고서', group: '부동산·건설' },
  { key: 'realty_doc', label: '계약서·견적서 자동 생성', group: '부동산·건설' },
  { key: 'realty_schedule', label: '공사 일정표', group: '부동산·건설' },
  { key: 'realty_safety', label: '현장 안전 점검표', group: '부동산·건설' },
  { key: 'legal_contract', label: '계약서·합의서 작성', group: '법률·행정' },
  { key: 'legal_consult', label: '법률 상담 스크립트', group: '법률·행정' },
  { key: 'legal_checklist', label: '사건 진행 체크리스트', group: '법률·행정' },
  { key: 'legal_admin', label: '행정 절차 안내문', group: '법률·행정' },
  { key: 'legal_evidence', label: '증거·자료 목록화', group: '법률·행정' },
  { key: 'solo_automation', label: '업무 자동화', group: '프리랜서·1인사업자' },
  { key: 'solo_calendar', label: '업무 일정 관리', group: '프리랜서·1인사업자' },
  { key: 'solo_portfolio', label: '포트폴리오', group: '프리랜서·1인사업자' },
  { key: 'solo_communication', label: '고객 커뮤니케이션', group: '프리랜서·1인사업자' },
  { key: 'solo_tax', label: '세금 관리 팁', group: '프리랜서·1인사업자' },
  { key: 'ngo_event', label: '행사 기획안', group: '공공·비영리' },
  { key: 'ngo_assets', label: '홍보 자료 제작', group: '공공·비영리' },
  { key: 'ngo_donor', label: '후원자 관리', group: '공공·비영리' },
  { key: 'ngo_report', label: '프로젝트 보고서', group: '공공·비영리' },
  { key: 'ngo_survey', label: '설문조사 문항 설계', group: '공공·비영리' },
  { key: 'travel_course', label: '여행 코스 추천', group: '여행·관광' },
  { key: 'travel_package', label: '패키지 상품 설명', group: '여행·관광' },
  { key: 'travel_script', label: '투어 스크립트', group: '여행·관광' },
  { key: 'travel_sns', label: 'SNS 홍보 포스팅', group: '여행·관광' },
  { key: 'travel_review', label: '고객 후기 모음', group: '여행·관광' },
  { key: 'logi_delivery', label: '배송 일정 관리', group: '물류·운송' },
  { key: 'logi_warehouse', label: '재고·창고 관리', group: '물류·운송' },
  { key: 'logi_route', label: '경로 최적화', group: '물류·운송' },
  { key: 'logi_notice', label: '고객 알림 메시지', group: '물류·운송' },
  { key: 'logi_cost', label: '운송 비용 분석', group: '물류·운송' },
  { key: 'hr_hiring', label: '채용 공고 작성', group: 'HR·인사' },
  { key: 'hr_interview', label: '면접 질문·평가표', group: 'HR·인사' },
  { key: 'hr_onboarding', label: '교육·온보딩 자료', group: 'HR·인사' },
  { key: 'hr_schedule', label: '근무 스케줄 관리', group: 'HR·인사' },
  { key: 'hr_engagement', label: '직원 만족도 조사', group: 'HR·인사' },
  { key: 'wed_concept', label: '행사 콘셉트 제안', group: '이벤트·웨딩' },
  { key: 'wed_checklist', label: '체크리스트 생성', group: '이벤트·웨딩' },
  { key: 'wed_invite', label: '초대장 문구', group: '이벤트·웨딩' },
  { key: 'wed_budget', label: '예산 계획표', group: '이벤트·웨딩' },
  { key: 'wed_after', label: '후기·후속 마케팅', group: '이벤트·웨딩' }
];

export const TAG_SUGGESTIONS: Record<CategoryKey, string[]> = {
  fnb_menu: ['{cuisine}', '{dietary_focus}', 'seasonal', 'prep-time 15', 'cost-per-serving', 'chef-notes', 'plating', 'local-ingredients', 'pairing', 'allergen-alert'],
  fnb_marketing: ['limited-time', '{holiday}', 'campaign-brief', 'sms-script', 'poster-copy', 'tone {tone}', 'call-to-action', 'landing-page', 'influencer-seed', 'photo-shotlist'],
  fnb_reviews: ['review-reply', 'escalation-template', 'sentiment-score', 'apology-tone', 'recovery-offer', 'response-time', 'multi-platform', 'crm-log', 'translation', 'closing'],
  fnb_inventory: ['sku', 'weekly-par', 'supplier-note', 'safety-stock', 'expiration', 'waste-alert', 'auto-reorder', 'delivery-window', 'budget-cap', 'variance'],
  fnb_staffing: ['shift-template', 'role {role}', 'headcount', 'training-link', 'availability', 'labor-law', 'overtime-alert', 'swap-policy', 'break-schedule', 'notes'],
  fnb_analytics: ['sales-report', 'wow-comparison', 'top-menu', 'low-performer', 'weather-impact', 'upsell-tip', 'dashboard', 'chart', 'kpi {kpi}', 'action-items'],
  retail_copy: ['product-name', '{benefit}', 'seo-snippet', 'tone-guide', 'feature-list', 'materials', 'size-chart', 'care-instructions', 'cross-sell', 'faq'],
  retail_display: ['planogram', 'fixture-type', 'lighting', 'hero-product', 'storytelling', 'interactive', 'window-display', 'seasonal-refresh', 'vm-checklist', 'merchandising'],
  retail_promo: ['offer', 'audience {persona}', 'channel-mix', 'timeline', 'budget', 'creative-brief', 'kpi-tracking', 'loyalty-hook', 'cta {cta}', 'cross-store'],
  retail_turnover: ['inventory-turns', 'aging-stock', 'markdown-plan', 'forecast', 'sell-through', 'slow-mover', 'bundle-idea', 'reorder-point', 'vendor-feedback', 'reporting'],
  retail_membership: ['tier {tier}', 'benefits', 'welcome-sequence', 'points-expiry', 'app-push', 'email-drip', 'referral', 'vip-event', 'survey', 'retention'],
  tax_yearend: ['deduction-list', 'submission-deadline', 'required-documents', 'employee-guide', 'faq', 'checklist', 'withholding', 'email-template', 'reminder', 'follow-up'],
  tax_vat: ['vat-rate', 'filing-schedule', 'input-tax', 'output-tax', 'invoice-template', 'compliance', 'penalty', 'documentation', 'pre-check', 'submission-portal'],
  tax_saving: ['{industry}', 'deduction-strategy', 'expense-bucket', 'timing', 'investment', 'allowance', 'legal-reference', 'risk-level', 'advisor-note', 'action-plan'],
  tax_fs: ['balance-sheet', 'income-statement', 'ratio-analysis', 'kpi', 'visualization', 'variance', 'forecast', 'recommendation', 'commentary', 'scenario'],
  tax_script: ['intro', 'probing-questions', 'compliance-check', 'solution', 'offer', 'objection', 'upsell', 'closing', 'follow-up', 'crm-note'],
  mfg_schedule: ['production-line', 'shift-plan', 'throughput', 'bottleneck', 'buffer', 'maintenance-window', 'oee-target', 'priority-order', 'inventory', 'alerts'],
  mfg_quality: ['inspection', 'sampling', 'tolerance', 'defect-log', 'root-cause', 'corrective-action', 'compliance', 'audit', 'documentation', 'training'],
  mfg_cost: ['bom', 'supplier', 'negotiation', 'alternative', 'waste-reduction', 'inventory', 'automation', 'target-cost', 'kpi', 'timeline'],
  mfg_maintenance: ['equipment-id', 'interval', 'checklist', 'safety', 'spare-parts', 'downtime', 'technician', 'reporting', 'alert', 'compliance'],
  mfg_safety: ['toolbox-talk', 'ppe', 'hazard', 'emergency', 'training', 'inspection', 'incident', 'lockout', 'signage', 'follow-up'],
  it_code: ['language {language}', 'framework', 'architecture', 'linting', 'test-suite', 'code-style', 'complexity', 'security', 'deployment', 'todo'],
  it_api: ['resource', 'endpoint', 'verb', 'auth', 'rate-limit', 'payload', 'error-codes', 'versioning', 'sample-request', 'monitoring'],
  it_bugfix: ['bug-description', 'steps-to-reproduce', 'stack-trace', 'hypothesis', 'fix-plan', 'test-cases', 'rollback', 'owner', 'eta', 'notes'],
  it_test: ['unit', 'integration', 'coverage', 'fixture', 'mock-data', 'assertion', 'ci-setup', 'report', 'regression', 'owner'],
  it_perf: ['profiling', 'bottleneck', 'caching', 'scalability', 'memory', 'concurrency', 'benchmark', 'alerts', 'sla', 'recommendation'],
  pm_spec: ['feature-name', 'problem', 'goal', 'metrics', 'requirements', 'dependencies', 'edge-case', 'user-story', 'acceptance', 'open-questions'],
  pm_scenario: ['persona {persona}', 'journey-stage', 'touchpoint', 'emotion', 'opportunity', 'service-blueprint', 'nfr', 'channel', 'automation', 'handoff'],
  pm_competitor: ['competitor', 'strength', 'weakness', 'feature-parity', 'pricing', 'positioning', 'screenshot', 'insight', 'action', 'priority'],
  pm_ux: ['heuristic', 'issue', 'impact', 'recommendation', 'prototype', 'test-plan', 'microcopy', 'accessibility', 'data-point', 'next-step'],
  pm_data: ['metric', 'goal {goal}', 'dashboard', 'segment', 'trend', 'anomaly', 'experiment', 'insight', 'action', 'owner'],
  creative_brand: ['brand-essence', 'tone', 'visual-keyword', 'tagline', 'story-arc', 'voice', 'audience', 'moodboard', 'do-dont', 'activation'],
  creative_image: ['model', 'lighting', 'style', 'camera', 'composition', 'color', 'texture', 'prompt-negative', 'seed', 'post-process'],
  creative_feedback: ['context', 'goal', 'strength', 'opportunity', 'reference', 'next-step', 'format', 'timeline', 'tone', 'cta'],
  creative_pitch: ['story-arc', 'slide-order', 'key-message', 'visual', 'cta', 'data-point', 'quote', 'demo', 'timeline', 'ask'],
  creative_color: ['brand {brand}', 'palette', 'primary', 'secondary', 'accent', 'typography', 'contrast', 'usage', 'pattern', 'motion'],
  mkt_campaign: ['objective', 'audience', 'message', 'channel', 'budget', 'timeline', 'kpi', 'creative', 'offer', 'risk'],
  mkt_copy: ['channel {channel}', 'hook', 'body', 'cta', 'hashtag', 'tone', 'offer', 'emoji', 'length', 'compliance'],
  mkt_influencer: ['platform', 'creator', 'brief', 'deliverables', 'timeline', 'budget', 'kpi', 'tracking', 'usage-rights', 'reporting'],
  mkt_analytics: ['metric', 'source', 'attribution', 'trend', 'insight', 'recommendation', 'experiment', 'budget-shift', 'audience', 'dashboard'],
  mkt_calendar: ['month', 'theme', 'campaign', 'channel', 'asset', 'owner', 'status', 'cta', 'goal', 'remark'],
  edu_curriculum: ['course-title', 'duration', 'module', 'learning-objective', 'assessment', 'resource', 'activity', 'homework', 'feedback', 'certification'],
  edu_material: ['subject', 'grade', 'format', 'visual-aid', 'worksheet', 'quiz', 'example', 'discussion', 'project', 'extension'],
  edu_exam: ['exam-type', 'topic', 'difficulty', 'question-count', 'answer-key', 'rubric', 'time-limit', 'feedback', 'accommodation', 'review-plan'],
  edu_feedback: ['student-name', 'progress', 'strength', 'improvement', 'evidence', 'goal', 'next-step', 'resources', 'tone', 'follow-up'],
  edu_parent: ['student', 'highlight', 'concern', 'action', 'schedule', 'resource', 'tone', 'reminder', 'contact', 'closing'],
  health_notice: ['department', 'procedure', 'arrival-time', 'documents', 'preparation', 'contact', 'parking', 'insurance', 'language', 'faq'],
  health_reminder: ['patient-name', 'appointment-date', 'prep', 'check-in', 'virtual-option', 'contact', 'reminder-type', 'follow-up', 'translation', 'cta'],
  health_content: ['topic', 'audience', 'tone', 'myth', 'fact', 'callout', 'source', 'visual', 'cta', 'support'],
  health_summary: ['specialty', 'visit-date', 'symptoms', 'diagnosis', 'treatment', 'medication', 'follow-up', 'warning-sign', 'contact', 'summary'],
  health_campaign: ['goal', 'target-group', 'channel', 'message', 'partner', 'timeline', 'creative', 'budget', 'evaluation', 'action'],
  realty_ad: ['property-type', 'location', 'highlight', 'neighborhood', 'amenity', 'upgrade', 'cta', 'open-house', 'virtual-tour', 'closing'],
  realty_price: ['property', 'comparable', 'trend', 'forecast', 'risk', 'opportunity', 'buyer-profile', 'seller-tip', 'visual', 'summary'],
  realty_doc: ['contract-type', 'party', 'term', 'payment', 'clause', 'deadline', 'signature', 'disclosure', 'appendix', 'note'],
  realty_schedule: ['project', 'phase', 'start', 'end', 'responsible', 'dependency', 'risk', 'buffer', 'inspection', 'handover'],
  realty_safety: ['site', 'hazard', 'ppe', 'inspection', 'training', 'emergency', 'compliance', 'report', 'follow-up', 'signage'],
  legal_contract: ['agreement-type', 'parties', 'term', 'obligation', 'warranty', 'liability', 'governing-law', 'termination', 'signature', 'appendix'],
  legal_consult: ['client', 'issue', 'jurisdiction', 'precedent', 'risk', 'strategy', 'timeline', 'fee', 'next-step', 'follow-up'],
  legal_checklist: ['case-type', 'task', 'deadline', 'responsible', 'document', 'status', 'note', 'dependency', 'risk', 'reminder'],
  legal_admin: ['procedure', 'office', 'document', 'fee', 'timeline', 'contact', 'eligibility', 'step', 'processing', 'reminder'],
  legal_evidence: ['case', 'evidence-type', 'source', 'authenticity', 'chain-of-custody', 'relevance', 'storage', 'access', 'deadline', 'notes'],
  solo_automation: ['tool', 'workflow', 'trigger', 'condition', 'action', 'frequency', 'integration', 'time-saving', 'kpi', 'next-step'],
  solo_calendar: ['service', 'availability', 'buffer', 'meeting-type', 'automation', 'reminder', 'prep', 'location', 'follow-up', 'time-zone'],
  solo_portfolio: ['profile', 'tone', 'case-study', 'metric', 'testimonial', 'cta', 'format', 'distribution', 'update', 'visual'],
  solo_communication: ['client-type', 'channel', 'cadence', 'template', 'crm', 'feedback', 'boundary', 'upsell', 'closing', 'next-touch'],
  solo_tax: ['income-type', 'expense', 'receipt', 'deadline', 'saving', 'tool', 'reminder', 'advisor', 'risk', 'note'],
  ngo_event: ['event-name', 'goal', 'attendees', 'program', 'venue', 'sponsor', 'volunteer', 'promotion', 'budget', 'impact'],
  ngo_assets: ['campaign', 'message', 'format', 'visual', 'cta', 'distribution', 'timeline', 'partner', 'measurement', 'story'],
  ngo_donor: ['segment', 'history', 'ask', 'channel', 'gift-level', 'stewardship', 'impact', 'follow-up', 'renewal', 'next-step'],
  ngo_report: ['project', 'period', 'milestone', 'kpi', 'story', 'beneficiary', 'challenge', 'finance', 'future-plan', 'appendix'],
  ngo_survey: ['audience', 'objective', 'question', 'scale', 'logic', 'distribution', 'deadline', 'incentive', 'analysis', 'report'],
  travel_course: ['destination', 'duration', 'theme', 'highlight', 'meal', 'transport', 'season', 'insider-tip', 'budget', 'add-on'],
  travel_package: ['package-name', 'audience', 'itinerary', 'inclusion', 'exclusion', 'pricing', 'promo', 'faq', 'review', 'upsell'],
  travel_script: ['group-size', 'meeting-point', 'hook', 'story', 'fun-fact', 'photo-spot', 'transition', 'cta', 'merch', 'wrap-up'],
  travel_sns: ['platform', 'hook', 'caption', 'hashtag', 'cta', 'visual', 'timing', 'emoji', 'link', 'boost'],
  travel_review: ['reviewer', 'highlight', 'concern', 'response', 'rating', 'quote', 'tag', 'cta', 'local-tip', 'closing'],
  logi_delivery: ['route', 'driver', 'window', 'customer', 'eta', 'exception', 'contact', 'signature', 'note', 'follow-up'],
  logi_warehouse: ['warehouse', 'layout', 'slotting', 'inventory', 'turnover', 'equipment', 'staffing', 'safety', 'automation', 'report'],
  logi_route: ['origin', 'destination', 'constraint', 'vehicle', 'fuel', 'traffic', 'stop', 'window', 'load', 'optimization'],
  logi_notice: ['update', 'customer', 'shipment', 'delay', 'reason', 'compensation', 'contact', 'next-step', 'survey', 'signature'],
  logi_cost: ['lane', 'carrier', 'rate', 'surcharge', 'benchmark', 'fuel', 'savings', 'kpi', 'recommendation', 'trend'],
  hr_hiring: ['role', 'mission', 'responsibility', 'qualification', 'benefit', 'diversity', 'process', 'timeline', 'cta', 'note'],
  hr_interview: ['position', 'competency', 'question', 'scorecard', 'signal', 'panel', 'feedback', 'decision', 'timeline', 'next-step'],
  hr_onboarding: ['day-1', 'agenda', 'buddy', 'training', 'system-access', 'culture', 'feedback', 'milestone', 'manager', 'survey'],
  hr_schedule: ['team', 'shift', 'availability', 'leave', 'overtime', 'compliance', 'swap', 'reminder', 'note', 'approval'],
  hr_engagement: ['pulse', 'topic', 'question', 'scale', 'action', 'owner', 'timeline', 'communication', 'celebration', 'follow-up'],
  wed_concept: ['couple-story', 'theme', 'palette', 'decor', 'experience', 'signature', 'music', 'dress-code', 'photo', 'wow-factor'],
  wed_checklist: ['timeline', 'task', 'owner', 'status', 'budget', 'vendor', 'note', 'deadline', 'backup', 'reminder'],
  wed_invite: ['tone', 'event-detail', 'rsvp', 'dress-code', 'map', 'registry', 'story', 'schedule', 'cta', 'closing'],
  wed_budget: ['category', 'estimate', 'actual', 'vendor', 'payment', 'due-date', 'priority', 'note', 'buffer', 'status'],
  wed_after: ['thank-you', 'photo-sharing', 'review', 'feedback', 'gift-tracking', 'video', 'social-post', 'anniversary', 'vendor-referral', 'next-event']
};

const AUTHORS: Author[] = [
  { id: 'author-1', name: 'Noah Kim', avatar: 'https://i.pravatar.cc/150?img=5', role: 'creator', membership_level: 'PRO' },
  { id: 'author-2', name: 'Jade Park', avatar: 'https://i.pravatar.cc/150?img=12', role: 'creator', membership_level: 'PRO' },
  { id: 'author-3', name: 'Eun Seo', avatar: 'https://i.pravatar.cc/150?img=32', role: 'creator', membership_level: 'PRO' },
  { id: 'author-4', name: 'Theo Lee', avatar: 'https://i.pravatar.cc/150?img=44', role: 'creator', membership_level: 'ENTERPRISE' },
  { id: 'author-5', name: 'Lia Choi', avatar: 'https://i.pravatar.cc/150?img=51', role: 'creator', membership_level: 'PRO' }
];

const SAMPLE_PREVIEW =
  'Use this structured prompt template to generate actionable results tailored to {brand}, {goal}, and {constraints}.';

function buildPrompt(
  id: string,
  title: string,
  description: string,
  category: CategoryKey,
  price: number,
  discount: number | undefined,
  rating: number,
  sold: number,
  tags: [string, string, string],
  body: string,
  authorId: string,
  allTags?: string[]
): PromptItem {
  const author = AUTHORS.find((a) => a.id === authorId) ?? AUTHORS[0];
  return {
    id,
    title,
    description,
    category,
    price,
    discount,
    rating,
    sold,
    tags,
    allTags: allTags ?? TAG_SUGGESTIONS[category],
    createdAt: '2024-01-02T09:00:00.000Z',
    author,
    thumbnail: `https://picsum.photos/seed/curait-${id}/640/360`,
    preview: SAMPLE_PREVIEW,
    body,
  };
}

const prompts: PromptItem[] = [
  buildPrompt(
    'fnb-menu-1',
    'Seasonal Chef Prompt Pack',
    'Generate {season} tasting menus with cost and prep notes in under 5 minutes.',
    'fnb_menu',
    29000,
    20,
    4.8,
    420,
    ['seasonal', 'costed', 'chef-ready'],
    `You are a Michelin-level menu creator. Craft a {course_count}-course tasting menu for {brand} focused on {season} ingredients.
    Include: dish name, hero ingredient, plating direction, prep time, and supplier tip. Respect {dietary_focus} constraints and target food cost {cost_target}.`,
    'author-1'
  ),
  buildPrompt(
    'fnb-menu-2',
    'Ghost Kitchen Rapid Menu Generator',
    'Launch ghost kitchen menus using {core_ingredient} variations ready for delivery apps.',
    'fnb_menu',
    25000,
    10,
    4.6,
    318,
    ['delivery', 'concept-kit', 'fast-execute'],
    `Act as a culinary developer helping a ghost kitchen focused on {core_ingredient}.
    Output five signature items with name, flavor hook, packaging note, upsell side, and photo reference prompt.
    Ensure kitchen equipment stays within {equipment_constraints}.`,
    'author-2'
  ),
  buildPrompt(
    'fnb-menu-3',
    'Functional Beverage Formulator',
    'Build {benefit}-focused beverage recipes with sourcing and storytelling hooks.',
    'fnb_menu',
    31000,
    undefined,
    4.7,
    205,
    ['beverage', 'story-driven', 'health'],
    `Create three functional beverage recipes supporting {benefit}. For each, include: flavor profile, hero ingredient origin, brew/mix method, health claim phrasing, and Instagram caption snippet.
    Respect {regulation} compliance and {budget} per serving.`,
    'author-3'
  ),
  buildPrompt(
    'fnb-marketing-1',
    'Pop-up Launch Playbook',
    'Plan {duration}-day pop-up events with daily campaign assets and checklists.',
    'fnb_marketing',
    27000,
    15,
    4.9,
    187,
    ['campaign-kit', 'pop-up', 'automation'],
    `You are a restaurant marketing director planning a {duration}-day pop-up for {brand}. Generate daily campaign focus, hero menu highlight, channel-specific copy ({channels}), influencer outreach angle, and conversion CTA.
    Add production checklist and staff briefing bullet for each day.`,
    'author-4'
  ),
  buildPrompt(
    'fnb-marketing-2',
    'Neighborhood Buzz Toolkit',
    'Hyperlocal marketing prompts for {district} with geo-personalized copy.',
    'fnb_marketing',
    19000,
    undefined,
    4.4,
    143,
    ['hyperlocal', 'personalized', 'sms-ready'],
    `Craft a hyperlocal marketing burst for {brand} in {district}. Produce: geo-personalized SMS, Instagram carousel outline, in-store signage copy, and community partnership pitch.
    Ensure tone {tone} and highlight {signature_dish}.`,
    'author-5'
  ),
  buildPrompt(
    'fnb-marketing-3',
    'Rainy Day Rescue Promo',
    'Weather-triggered promo templates with {offer} variations.',
    'fnb_marketing',
    22000,
    25,
    4.5,
    266,
    ['weather-based', 'automation', 'email'],
    `When forecast indicates {weather_trigger}, launch a rapid promo for {brand}. Provide: campaign theme, subject line, SMS, loyalty push notification, and staff briefing note.
    Include metrics to monitor and reactivation follow-up if conversions < {target}.`,
    'author-1'
  ),
  buildPrompt(
    'fnb-reviews-1',
    'Guest Recovery Studio',
    'Craft heartfelt responses to {issue_type} with compensation logic.',
    'fnb_reviews',
    15000,
    10,
    4.8,
    512,
    ['hospitality', 'empathetic', 'policy-aware'],
    `Respond to a guest review describing {issue_type}. Output: acknowledgement, empathy statement, recovery step, compensation tier suggestion, and internal follow-up log line.
    Keep tone {tone} and comply with {policy_reference}.`,
    'author-2'
  ),
  buildPrompt(
    'fnb-reviews-2',
    'Review Reputation Matrix',
    'Categorize and reply to {platform} reviews with brand-safe voice.',
    'fnb_reviews',
    18000,
    undefined,
    4.5,
    274,
    ['brand-safe', 'reply-kit', 'tagging'],
    `Analyse latest reviews from {platform}. Classify sentiment, extract key issues, generate reply with {voice} tone, and add CRM tag plus follow-up action.
    Provide escalation alert when severity >= {threshold}.`,
    'author-3'
  ),
  buildPrompt(
    'fnb-reviews-3',
    'Five Star Amplifier',
    'Turn rave reviews into shareable social proof assets.',
    'fnb_reviews',
    14000,
    5,
    4.2,
    198,
    ['ugc', 'cross-channel', 'templates'],
    `Select top positive review about {highlight}. Generate: quote graphic copy, email spotlight paragraph, table talker text, and staff recognition note.
    Add hashtag suggestions and measurement plan for {campaign_goal}.`,
    'author-4'
  ),
  buildPrompt(
    'retail-copy-1',
    'Premium Product Storyboard',
    'Craft {product} descriptions for online and store with synced voice.',
    'retail_copy',
    21000,
    15,
    4.6,
    332,
    ['seo-optimized', 'omni-channel', 'rich-detail'],
    `Write product storytelling for {product}. Deliver: ecommerce long description, 50-character shelf header, staff pitch card, and TikTok script outline.
    Emphasize {key_benefit} and align tone with {brand_voice}.`,
    'author-2'
  ),
  buildPrompt(
    'retail-display-1',
    'Visual Merch Lab',
    'Generate {theme} display plans with fixture callouts and team checklist.',
    'retail_display',
    26000,
    20,
    4.8,
    278,
    ['planogram', 'fixture-map', 'team-ready'],
    `Design a retail display for {theme}. Include: hero narrative, fixture layout by zone, sensory cues, cross-merch ideas, and reset checklist with timing.
    Ensure compliance with {store_constraints} and highlight {priority_sku}.`,
    'author-4'
  ),
  buildPrompt(
    'retail-promo-1',
    'Sell-through Accelerator',
    'Spin {inventory_status} stock into compelling promotions with KPI guardrails.',
    'retail_promo',
    24000,
    undefined,
    4.3,
    199,
    ['sell-through', 'multi-channel', 'metrics'],
    `Build a promotion for {inventory_status} SKUs. Output: offer mechanic, loyalty perk, creative brief, email + SMS copy, and store team script.
    Include tracking plan with KPIs {kpis} and break-even analysis.`,
    'author-1'
  ),
  buildPrompt(
    'tax-yearend-1',
    'Year-End Payroll Navigator',
    'Guide employees through {country} year-end tax adjustments with clarity.',
    'tax_yearend',
    18000,
    15,
    4.7,
    256,
    ['faq-ready', 'employee-first', 'multichannel'],
    `Draft a year-end tax assistance kit for {company_size} employees in {country}. Provide email announcement, FAQ sheet, submission timeline, checklist, and reminder script.
    Highlight {key_change} and escalate edge cases {escalation_rules}.`,
    'author-3'
  ),
  buildPrompt(
    'tax-vat-1',
    'VAT Filing Copilot',
    'Produce step-by-step filing guides for {business_type} within {jurisdiction}.',
    'tax_vat',
    23000,
    undefined,
    4.4,
    182,
    ['compliance', 'checklist', 'email-ready'],
    `Act as a tax specialist for {business_type}. Generate: filing calendar, document request email, reconciliation checklist, and portal submission script.
    Flag anomalies when variance exceeds {variance_threshold}.`,
    'author-5'
  ),
  buildPrompt(
    'tax-saving-1',
    'Profit Guard Tax Strategist',
    'Identify legal savings opportunities tailored to {industry} scenarios.',
    'tax_saving',
    32000,
    30,
    4.9,
    145,
    ['advisor-ready', 'scenario', 'legal'],
    `You are a corporate tax advisor for {industry}. Deliver: three optimisation plays with description, qualifying criteria, projected savings, risk flag, and implementation steps.
    Incorporate {budget} and {timeframe} constraints.`,
    'author-4'
  ),
  buildPrompt(
    'mfg-schedule-1',
    'Flow Optimizer Blueprint',
    'Rebalance {line_name} schedule for throughput and labour harmony.',
    'mfg_schedule',
    34000,
    25,
    4.8,
    168,
    ['lean', 'bottleneck-fix', 'timeline'],
    `Optimize the production schedule for {line_name}. Provide: takt time summary, shift-by-shift plan, bottleneck mitigation, buffer policy, and KPI outlook.
    Honour constraints: {constraints} and target OEE {oee_target}.`,
    'author-1'
  ),
  buildPrompt(
    'mfg-quality-1',
    'Zero Defect Inspection Kit',
    'Build adaptive QA scripts for {product_family} with root cause library.',
    'mfg_quality',
    28000,
    undefined,
    4.6,
    201,
    ['quality', 'audit-ready', 'continuous'],
    `Design a quality inspection workflow for {product_family}. Output: sampling matrix, inspection script, defect code glossary, escalation triggers, and CAPA follow-up template.
    Integrate {standard} compliance.`,
    'author-3'
  ),
  buildPrompt(
    'mfg-cost-1',
    'Smart Sourcing Negotiator',
    'Surface cost-down levers across {bom_scope} with supplier tactics.',
    'mfg_cost',
    36000,
    18,
    4.7,
    154,
    ['cost-saving', 'supplier', 'analytics'],
    `Analyse BOM for {bom_scope}. Highlight top 5 cost drivers, propose negotiation angle, alternative material, automation idea, and quick-win experiment.
    Respect {quality_constraint} and {lead_time} requirements.`,
    'author-4'
  ),
  buildPrompt(
    'it-code-1',
    'Full-stack Refactor Maestro',
    'Refactor legacy {stack} modules with modern patterns and tests.',
    'it_code',
    39000,
    30,
    4.9,
    412,
    ['refactor', 'clean-architecture', 'testing'],
    `You are a senior engineer refactoring a {stack} service. Analyse existing module summary {module_snapshot} and propose: updated architecture, file structure, sample refactored function, unit test prompt, and rollout checklist.
    Honour performance budget {perf_budget} and coding standard {coding_standard}.`,
    'author-2'
  ),
  buildPrompt(
    'it-api-1',
    'API Blueprint Architect',
    'Design {domain} APIs complete with schema, errors, and changelog plan.',
    'it_api',
    32000,
    undefined,
    4.7,
    289,
    ['schema-first', 'docs', 'lifecycle'],
    `Create a REST/GraphQL API blueprint for {domain}. Output: endpoint table, payload schema in JSON schema, auth model, error handling map, and deprecation policy.
    Include onboarding snippet for SDK consumers and monitoring KPIs.`,
    'author-5'
  ),
  buildPrompt(
    'it-bugfix-1',
    'Incident Resolution Conductor',
    'Debug {severity} incidents using structured analysis prompts.',
    'it_bugfix',
    28000,
    15,
    4.5,
    365,
    ['postmortem', 'step-by-step', 'collab'],
    `Investigate a {severity} incident for {service}. Provide timeline synthesis, hypothesis list, targeted reproduction prompt, fix plan, verification matrix, and communication update template.
    Escalate when blast radius > {impact_threshold}.`,
    'author-1'
  ),
  buildPrompt(
    'pm-spec-1',
    'Lean Feature PRD Kit',
    'Produce crisp PRDs with user stories and decision logs for {feature}.',
    'pm_spec',
    25000,
    20,
    4.8,
    298,
    ['prd', 'decision-log', 'user-story'],
    `Draft a product requirement doc for {feature}. Include: problem framing, success metrics, narrative, user stories with acceptance criteria, open questions, and experiment ideas.
    Keep scope within {timeframe} sprint and note dependencies {dependencies}.`,
    'author-3'
  ),
  buildPrompt(
    'pm-scenario-1',
    'Journey Scenario Composer',
    'Visualise {persona} journeys with emotion beats and backstage processes.',
    'pm_scenario',
    27000,
    undefined,
    4.6,
    187,
    ['journey-map', 'service-blueprint', 'emotion'],
    `Create a user scenario for {persona}. Outline stages, goals, frontstage interactions, backstage support, emotion score, and automation opportunity.
    Note critical moments where {metric} dips and suggest fixes.`,
    'author-5'
  ),
  buildPrompt(
    'pm-ux-1',
    'UX Fix Radar',
    'Generate UX improvements for {flow} with prioritised opportunities.',
    'pm_ux',
    24000,
    10,
    4.4,
    230,
    ['ux-audit', 'heuristic', 'prioritized'],
    `Audit the {flow} experience. Provide heuristics summary, issue statement, severity, recommendation, supporting data, and experiment idea.
    Align with {brand_principles} and accessibility targets {a11y_goal}.`,
    'author-2'
  ),
  buildPrompt(
    'creative-brand-1',
    'Brand Narrative Generator',
    'Shape {brand_stage} brand foundations with voice, story, and tagline.',
    'creative_brand',
    28000,
    12,
    4.7,
    321,
    ['brandbook', 'voice', 'story'],
    `Act as a brand strategist for {brand_stage} company {brand}. Deliver: brand essence statement, tone & voice guide, manifesto paragraph, tagline trio, and rollout plan.
    Reflect audience {audience} and differentiator {differentiator}.`,
    'author-4'
  ),
  buildPrompt(
    'creative-image-1',
    'AI Visual Prompt Library',
    'Generate Midjourney/Stable Diffusion prompts for {campaign_theme}.',
    'creative_image',
    26000,
    undefined,
    4.5,
    276,
    ['midjourney', 'stable-diffusion', 'stylepack'],
    `Produce four AI art prompts for {campaign_theme}. Include: scene description, camera, lighting, styling keywords, negative prompt, seed suggestion, and upscaling tip.
    Ensure brand colours {brand_palette} appear naturally.`,
    'author-5'
  ),
  buildPrompt(
    'creative-feedback-1',
    'Design Critique Coach',
    'Deliver structured critique templates for {asset_type} reviews.',
    'creative_feedback',
    19000,
    10,
    4.3,
    198,
    ['constructive', 'actionable', 'team-aligned'],
    `Provide feedback for {asset_type}. Output: summary, strengths, opportunities, suggested references, decision deadline, and Slack-ready message.
    Keep tone {tone} and align with {principles}.`,
    'author-3'
  ),
  buildPrompt(
    'mkt-campaign-1',
    'Launchpad Campaign Studio',
    'Orchestrate {goal} campaigns with media mix and testing roadmap.',
    'mkt_campaign',
    30000,
    22,
    4.7,
    310,
    ['full-funnel', 'test-ready', 'roadmap'],
    `Design a {goal} campaign for {brand}. Provide campaign narrative, audience segments, channel mix, budget allocation, creative angles, and experiment plan.
    Add weekly stand-up checklist and success dashboard blueprint.`,
    'author-1'
  ),
  buildPrompt(
    'mkt-copy-1',
    'Conversion Copy Sprint',
    'Generate multi-channel copy for {offer} with rapid iteration loops.',
    'mkt_copy',
    21000,
    undefined,
    4.4,
    288,
    ['copy', 'variant', 'cta'],
    `Craft messaging for {offer}. Deliver: landing headline options, email hero copy, SMS teaser, paid social primary text, and ad CTA matrix.
    Align with tone {tone} and highlight {value_prop}.`,
    'author-2'
  ),
  buildPrompt(
    'mkt-analytics-1',
    'Growth Analytics Command Center',
    'Turn {metric_focus} data into insights and executive-ready actions.',
    'mkt_analytics',
    35000,
    18,
    4.6,
    199,
    ['insights', 'dashboard', 'exec'],
    `Review marketing performance for {metric_focus}. Output: metric overview, attribution callout, key insight, recommended actions, budget shift suggestion, and experiment backlog entry.
    Provide scoreboard layout for leadership updates.`,
    'author-4'
  ),
  buildPrompt(
    'edu-curriculum-1',
    'Modular Curriculum Designer',
    'Assemble {weeks}-week programs with objectives and blended activities.',
    'edu_curriculum',
    20000,
    12,
    4.6,
    244,
    ['curriculum', 'modular', 'blended'],
    `Design a curriculum for {subject} lasting {weeks} weeks targeting {learner_profile}. Provide weekly overview, learning objectives, activities, assessment plan, and resource list.
    Include adaptation tips for {delivery_mode}.`,
    'author-5'
  ),
  buildPrompt(
    'edu-material-1',
    'Lesson Asset Composer',
    'Create ready-to-use lesson materials for {topic} with differentiation.',
    'edu_material',
    18000,
    undefined,
    4.4,
    208,
    ['worksheet', 'slides', 'extension'],
    `Produce a lesson package for {topic}. Output: hook activity, explainer script, worksheet instructions, visual aid description, formative check, and extension challenge for advanced learners.
    Adapt for class size {class_size}.`,
    'author-3'
  ),
  buildPrompt(
    'edu-exam-1',
    'Assessment Builder Pro',
    'Generate exams for {subject_level} with rubrics and review guides.',
    'edu_exam',
    19000,
    8,
    4.5,
    175,
    ['assessment', 'rubric', 'feedback'],
    `Create an assessment for {subject_level}. Provide question mix (MCQ, open-ended, project), answer key, scoring rubric, feedback template, and remediation plan.
    Consider accommodations for {needs}.`,
    'author-2'
  ),
  buildPrompt(
    'health-notice-1',
    'Clinic Notice Composer',
    'Write patient-friendly notices for {procedure} with clarity and empathy.',
    'health_notice',
    17000,
    10,
    4.5,
    193,
    ['patient-first', 'compliance', 'multi-language'],
    `Draft a patient notice for {procedure}. Include sections: purpose, preparation steps, arrival instructions, documentation list, and reassurance note.
    Provide translation summary for {language} and contact CTA.`,
    'author-4'
  ),
  buildPrompt(
    'health-reminder-1',
    'Care Reminder Studio',
    'Automate {appointment_type} reminders with personalization tokens.',
    'health_reminder',
    15000,
    undefined,
    4.3,
    165,
    ['automation', 'sms', 'email'],
    `Create reminder messages for {appointment_type}. Output: SMS template, email, phone call script, and follow-up instructions if no confirmation.
    Insert personalization tokens for {fields} and ensure HIPAA-safe phrasing.`,
    'author-1'
  ),
  buildPrompt(
    'health-content-1',
    'Health Content Strategist',
    'Produce credible {topic} articles with myth-busting structure.',
    'health_content',
    23000,
    18,
    4.6,
    184,
    ['education', 'myth-vs-fact', 'cta'],
    `Write a health information article about {topic}. Structure: hook, myth vs fact table, actionable tips, warning signs, recommended resources, and closing CTA.
    Cite authoritative sources and align tone {tone}.`,
    'author-5'
  ),
  buildPrompt(
    'realty-ad-1',
    'Listing Copy Engine',
    'Transform {property_type} specs into compelling multi-channel listings.',
    'realty_ad',
    26000,
    14,
    4.5,
    221,
    ['listing', 'story', 'cta'],
    `Write property listing content for {property_type} at {location}. Provide MLS description, social caption, neighborhood spotlight paragraph, and agent call script.
    Emphasize {unique_feature} and buyer persona {buyer_type}.`,
    'author-2'
  ),
  buildPrompt(
    'realty-price-1',
    'Market Pulse Analyzer',
    'Generate price comps and reports for {micro_market} investors.',
    'realty_price',
    34000,
    20,
    4.6,
    176,
    ['comps', 'visual', 'insights'],
    `Produce a pricing analysis for {micro_market}. Include comparable table, appreciation trend chart summary, buyer/seller insight, risk watchlist, and recommendation.
    Factor in {time_horizon} and {investment_goal}.`,
    'author-4'
  ),
  buildPrompt(
    'realty-schedule-1',
    'Construction Timeline Orchestrator',
    'Plan {project_type} schedules with risk buffers and inspections.',
    'realty_schedule',
    31000,
    undefined,
    4.4,
    149,
    ['timeline', 'risk', 'inspection'],
    `Outline a construction schedule for {project_type}. Provide phases, start/end, responsible party, dependencies, risk mitigation, inspection points, and client update cadence.
    Respect regulations {regulation} and budget {budget}.`,
    'author-1'
  ),
  buildPrompt(
    'legal-contract-1',
    'Contract Draft Composer',
    'Produce {agreement_type} drafts with negotiation-ready clauses.',
    'legal_contract',
    37000,
    22,
    4.8,
    205,
    ['contract', 'clause-bank', 'negotiation'],
    `Draft a {agreement_type} contract between {party_a} and {party_b}. Provide structure, key clauses with variables, negotiation tips, risk flags, and signature checklist.
    Ensure compliance with {jurisdiction}.`,
    'author-3'
  ),
  buildPrompt(
    'legal-consult-1',
    'Consultation Script Studio',
    'Frame {case_type} consultations with empathetic yet precise dialogue.',
    'legal_consult',
    24000,
    undefined,
    4.4,
    163,
    ['client-intake', 'risk-scan', 'next-steps'],
    `Create a consultation script for {case_type}. Include opening, discovery questions, risk explanation, recommended path, fee overview, and follow-up instructions.
    Set tone {tone} and highlight urgency triggers {triggers}.`,
    'author-5'
  ),
  buildPrompt(
    'legal-checklist-1',
    'Case Progress Tracker',
    'Keep {matter} cases on track with automation-friendly checklists.',
    'legal_checklist',
    22000,
    10,
    4.3,
    152,
    ['checklist', 'automation', 'reminder'],
    `Generate a progress tracker for {matter}. Output phases, tasks, deadlines, owner, dependencies, document links, and reminder cadence.
    Include escalation rule when risk score > {risk_score}.`,
    'author-1'
  ),
  buildPrompt(
    'solo-automation-1',
    'Freelancer Automation Lab',
    'Automate {service} workflows using no-code recipes and scripts.',
    'solo_automation',
    19000,
    15,
    4.5,
    210,
    ['automation', 'no-code', 'sop'],
    `Design an automation playbook for {service}. Provide trigger, workflow diagram description, tool stack, step-by-step prompt, maintenance note, and KPI to monitor.
    Ensure monthly budget <= {budget}.`,
    'author-4'
  ),
  buildPrompt(
    'solo-portfolio-1',
    'Magnetic Portfolio Writer',
    'Craft persuasive {service} case studies with measurable proof.',
    'solo_portfolio',
    17000,
    undefined,
    4.4,
    188,
    ['story', 'metrics', 'cta'],
    `Write a case study for {service}. Include project overview, challenge, process, results with metrics, testimonial prompt, and CTA.
    Tailor voice to {audience_type} and highlight {signature_move}.`,
    'author-2'
  ),
  buildPrompt(
    'solo-tax-1',
    'Solo Business Tax Toolkit',
    'Stay compliant with {country} freelance tax essentials.',
    'solo_tax',
    15000,
    5,
    4.2,
    134,
    ['compliance', 'budget', 'reminder'],
    `Summarise tax obligations for a freelancer in {country}. Provide deductible categories, quarterly checklist, savings allocation formula, reminder calendar, and accountant handoff template.
    Address scenario: income {income_range}.`,
    'author-5'
  ),
  buildPrompt(
    'ngo-event-1',
    'Impact Event Architect',
    'Plan {event_type} for donors with storytelling and logistics prompts.',
    'ngo_event',
    20000,
    10,
    4.5,
    167,
    ['event', 'story', 'logistics'],
    `Design an event plan for {event_type}. Provide agenda, key messages, speaker briefing, volunteer tasks, outreach email, and impact measurement plan.
    Align with cause {cause} and budget {budget}.`,
    'author-3'
  ),
  buildPrompt(
    'ngo-assets-1',
    'Campaign Asset Lab',
    'Build campaign materials for {initiative} with multi-format outputs.',
    'ngo_assets',
    21000,
    undefined,
    4.3,
    149,
    ['storytelling', 'visual', 'cta'],
    `Create campaign assets for {initiative}. Deliver poster copy, social carousel outline, donor email, landing page hero, and photographer brief.
    Highlight beneficiary story {story_anchor}.`,
    'author-4'
  ),
  buildPrompt(
    'ngo-report-1',
    'Grant Report Composer',
    'Craft transparent {grantor} updates with data storytelling.',
    'ngo_report',
    24000,
    16,
    4.4,
    138,
    ['impact', 'data', 'next-steps'],
    `Prepare a grant report for {grantor}. Include project summary, impact metrics, beneficiary quotes, budget table, challenge log, and upcoming needs.
    Keep tone accountable yet hopeful.`,
    'author-5'
  ),
  buildPrompt(
    'travel-course-1',
    'Signature Itinerary Maker',
    'Design {duration}-day itineraries with storytelling and upsell hooks.',
    'travel_course',
    23000,
    12,
    4.5,
    207,
    ['story', 'local', 'upsell'],
    `Create a travel itinerary for {destination} lasting {duration} days for {audience}. Provide daily theme, highlight attraction, dining, hidden gem, photo moment, and optional upsell.
    Include sustainability tip for each day.`,
    'author-1'
  ),
  buildPrompt(
    'travel-package-1',
    'Tour Package Copywriter',
    'Spin {theme} packages with clear inclusions and urgency drivers.',
    'travel_package',
    20000,
    undefined,
    4.3,
    166,
    ['package', 'copy', 'cta'],
    `Write marketing copy for a {theme} package. Output: brochure blurb, website hero, email teaser, FAQ snippet, and upsell add-on suggestion.
    Emphasize early-bird offer {offer_deadline}.`,
    'author-3'
  ),
  buildPrompt(
    'travel-sns-1',
    'Social Journey Scheduler',
    'Plan social posts for {campaign} across multiple platforms.',
    'travel_sns',
    17000,
    8,
    4.2,
    149,
    ['social', 'calendar', 'ugc'],
    `Develop a social calendar for {campaign}. Provide platform, hook, caption, CTA, hashtag set, visual direction, and UGC prompt.
    Align with seasonal moment {seasonal_hook}.`,
    'author-5'
  ),
  buildPrompt(
    'logi-delivery-1',
    'Last Mile Command Center',
    'Coordinate {fleet_size} deliveries with alerts and customer comms.',
    'logi_delivery',
    26000,
    18,
    4.5,
    178,
    ['routing', 'alerts', 'customer'],
    `Plan last-mile operations for {fleet_size} vehicles covering {region}. Provide route summary, priority orders, exception scenarios, customer notification script, and driver briefing.
    Include KPIs {kpis} and improvement ideas.`,
    'author-4'
  ),
  buildPrompt(
    'logi-warehouse-1',
    'Warehouse Optimizer Kit',
    'Improve {warehouse_type} layout with slotting and automation ideas.',
    'logi_warehouse',
    30000,
    20,
    4.6,
    166,
    ['layout', 'automation', 'efficiency'],
    `Optimise warehouse {warehouse_type}. Provide zone plan, slotting strategy, labour schedule, automation opportunities, safety checklist, and dashboard KPIs.
    Respect budget {budget} and service level {sla}.`,
    'author-1'
  ),
  buildPrompt(
    'logi-route-1',
    'Smart Route Strategist',
    'Balance cost and service for {lane} lanes with scenario prompts.',
    'logi_route',
    28000,
    undefined,
    4.4,
    153,
    ['optimization', 'scenario', 'savings'],
    `Design route optimisation for {lane}. Provide base plan, alternative scenarios, fuel and time impact, driver allocation, and customer communication summary.
    Flag risk when on-time probability < {threshold}.`,
    'author-2'
  ),
  buildPrompt(
    'hr-hiring-1',
    'Hiring Campaign Builder',
    'Draft {role} job postings with EVP storytelling and process map.',
    'hr_hiring',
    21000,
    10,
    4.4,
    214,
    ['job-post', 'evp', 'process'],
    `Create a hiring kit for {role}. Provide job description, EVP pitch, outreach email, interview loop summary, and candidate experience checklist.
    Emphasize diversity statement {diversity_commitment}.`,
    'author-3'
  ),
  buildPrompt(
    'hr-interview-1',
    'Structured Interview Studio',
    'Generate competency-based interview guides for {role}.',
    'hr_interview',
    19000,
    undefined,
    4.3,
    198,
    ['interview', 'competency', 'scorecard'],
    `Design an interview guide for {role}. Include opening, competency questions, follow-up probes, scoring rubric, red flag checklist, and candidate debrief template.
    Align with leadership principles {principles}.`,
    'author-1'
  ),
  buildPrompt(
    'hr-engagement-1',
    'Engagement Pulse Playbook',
    'Launch {cadence} surveys with action play follow-through.',
    'hr_engagement',
    23000,
    14,
    4.5,
    176,
    ['survey', 'action-plan', 'culture'],
    `Plan an employee engagement survey for {cadence}. Provide question set, communication plan, data analysis template, leadership readout, and action plan workshop agenda.
    Focus on theme {theme}.`,
    'author-5'
  ),
  buildPrompt(
    'wed-concept-1',
    'Wedding Concept Atelier',
    'Craft {style} wedding concepts with mood, palette, and experiences.',
    'wed_concept',
    28000,
    15,
    4.6,
    205,
    ['concept', 'palette', 'experience'],
    `Design a wedding concept for {couple_story}. Provide theme, colour palette, decor hero, guest experience highlight, signature drink idea, and wow moment.
    Reflect venue {venue} and budget {budget}.`,
    'author-2'
  ),
  buildPrompt(
    'wed-checklist-1',
    'Wedding Checklist Director',
    'Keep {timeline} plans on track with shared responsibilities.',
    'wed_checklist',
    19000,
    undefined,
    4.3,
    162,
    ['checklist', 'timeline', 'collab'],
    `Build a wedding planning checklist for {timeline}. Break down tasks by month, assign owner (couple/planner/vendor), include budget reminder, and backup plan.
    Highlight critical approvals {approvals}.`,
    'author-4'
  ),
  buildPrompt(
    'wed-after-1',
    'After Party Momentum Kit',
    'Extend wedding buzz with content and gratitude workflows.',
    'wed_after',
    16000,
    5,
    4.1,
    118,
    ['gratitude', 'content', 'follow-up'],
    `Create a post-wedding plan for {couple_name}. Output thank-you message templates, photo sharing plan, review request prompt, anniversary reminder, and referral nudge.
    Keep tone {tone}.`,
    'author-5'
  )
];

export function getCategoriesByGroup(): Record<string, CategoryDefinition[]> {
  return categoryDefinitions.reduce<Record<string, CategoryDefinition[]>>((acc, category) => {
    if (!acc[category.group]) {
      acc[category.group] = [];
    }
    acc[category.group].push(category);
    return acc;
  }, {});
}

export function getPrompts(): PromptItem[] {
  return prompts;
}

export function getPromptById(id: string): PromptItem | undefined {
  return prompts.find((item) => item.id === id);
}

export function getPromptsByCategory(category: CategoryKey | 'all'): PromptItem[] {
  if (category === 'all') {
    return prompts;
  }
  return prompts.filter((item) => item.category === category);
}

export function searchPrompts(query: string, category: CategoryKey | 'all'): PromptItem[] {
  const normalized = query.trim().toLowerCase();
  return getPromptsByCategory(category).filter((item) => {
    if (!normalized) {
      return true;
    }
    const haystack = [item.title, item.description, item.tags.join(' '), item.author.name].join(' ').toLowerCase();
    return haystack.includes(normalized);
  });
}

export function getSimilarPrompts(current: PromptItem, limit = 4): PromptItem[] {
  return prompts
    .filter((item) => item.id !== current.id && item.category === current.category)
    .map((item) => {
      const intersection = item.tags.filter((tag) => current.tags.includes(tag)).length;
      return { item, score: intersection };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);
}

export async function createCheckoutSession(promptId: string, mode: CheckoutMode) {
  console.debug('createCheckoutSession stub', { promptId, mode });
  return { url: `https://checkout.example.com/${promptId}?mode=${mode}` };
}

export type SavePromptPayload = {
  title: string;
  description: string;
  category: CategoryKey;
  tags: string[];
  allTags: string[];
  price: number;
  discount?: number;
  preview: string;
  body: string;
  thumbnail: string;
};

export async function savePrompt(payload: SavePromptPayload) {
  console.debug('savePrompt stub', payload);
  return { id: `draft-${Date.now()}` };
}

export type ReviewRecord = {
  id: string;
  promptId: string;
  reviewerId: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export async function submitReview(_: ReviewRecord) {
  console.debug('submitReview stub');
  return { success: true };
}
