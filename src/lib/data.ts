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

export type Role = 'user' | 'creator' | 'admin';
export type MembershipLevel = 'FREE' | 'PRO' | 'ENTERPRISE';

export type Author = {
  id: string;
  name: string;
  avatar?: string;
  role?: Role;
};

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
  authorId: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type Membership = {
  userId: string;
  level: MembershipLevel;
  renewedAt: string;
};

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  fnb_menu: '메뉴·레시피 개발',
  fnb_marketing: '시즌·이벤트 마케팅',
  fnb_reviews: '고객 리뷰/컴플레인 응대',
  fnb_inventory: '발주·재고 관리',
  fnb_staffing: '인력 스케줄표 생성',
  fnb_analytics: '매출 분석 리포트',
  retail_copy: '상품 설명·카피라이팅',
  retail_display: '진열·디스플레이 아이디어',
  retail_promo: '프로모션 기획',
  retail_turnover: '재고 회전율 분석',
  retail_membership: '고객 멤버십 운영 팁',
  tax_yearend: '연말정산 안내',
  tax_vat: '부가세/종소세 신고 가이드',
  tax_saving: '법인/개인사업자 절세 전략',
  tax_fs: '재무제표 분석',
  tax_script: '상담 스크립트',
  mfg_schedule: '생산 일정 최적화',
  mfg_quality: '품질 관리 체크리스트',
  mfg_cost: '자재 원가 절감 아이디어',
  mfg_maintenance: '설비 유지보수 계획',
  mfg_safety: '안전교육 자료',
  it_code: '코드 생성/리팩토링',
  it_api: 'API 설계·문서화',
  it_bugfix: '버그·에러 해결',
  it_test: '테스트 코드 생성',
  it_perf: '성능 최적화',
  pm_spec: '기능 기획서 작성',
  pm_scenario: '사용자 시나리오 설계',
  pm_competitor: '경쟁사 분석',
  pm_ux: 'UI/UX 개선 제안',
  pm_data: '데이터 분석 리포트',
  creative_brand: '브랜드 콘셉트 제안',
  creative_image: '이미지 생성 프롬프트',
  creative_feedback: '피드백·리뷰 가이드',
  creative_pitch: '프레젠테이션 디자인',
  creative_color: '컬러·폰트 추천',
  mkt_campaign: '캠페인 기획',
  mkt_copy: '채널별 광고 문구',
  mkt_influencer: '인플루언서 협업 전략',
  mkt_analytics: '마케팅 성과 분석',
  mkt_calendar: '콘텐츠 캘린더',
  edu_curriculum: '강의 커리큘럼 설계',
  edu_material: '학습 자료 제작',
  edu_exam: '시험 문제·퀴즈 생성',
  edu_feedback: '수업 피드백 자동화',
  edu_parent: '학부모 소통 메시지',
  health_notice: '환자 안내문 작성',
  health_reminder: '진료 예약 알림 메시지',
  health_content: '건강 정보 콘텐츠',
  health_summary: '차트·기록 요약',
  health_campaign: '예방 캠페인 자료',
  realty_ad: '매물 설명·광고 문구',
  realty_price: '시세 분석 보고서',
  realty_doc: '계약서·견적서 자동 생성',
  realty_schedule: '공사 일정표',
  realty_safety: '현장 안전 점검표',
  legal_contract: '계약서·합의서 작성',
  legal_consult: '법률 상담 스크립트',
  legal_checklist: '사건 진행 체크리스트',
  legal_admin: '행정 절차 안내문',
  legal_evidence: '증거·자료 목록화',
  solo_automation: '업무 자동화',
  solo_calendar: '업무 일정 관리',
  solo_portfolio: '자기소개서/포트폴리오',
  solo_communication: '고객 커뮤니케이션',
  solo_tax: '세금 관리 팁',
  ngo_event: '행사 기획안',
  ngo_assets: '홍보 자료 제작',
  ngo_donor: '후원자 관리',
  ngo_report: '프로젝트 보고서',
  ngo_survey: '설문조사 문항 설계',
  travel_course: '여행 코스 추천',
  travel_package: '패키지 상품 설명',
  travel_script: '투어 스크립트',
  travel_sns: 'SNS 홍보 포스팅',
  travel_review: '고객 후기 모음',
  logi_delivery: '배송 일정 관리',
  logi_warehouse: '재고·창고 관리',
  logi_route: '경로 최적화',
  logi_notice: '고객 알림 메시지',
  logi_cost: '운송 비용 분석',
  hr_hiring: '채용 공고 작성',
  hr_interview: '면접 질문·평가표',
  hr_onboarding: '교육·온보딩 자료',
  hr_schedule: '근무 스케줄 관리',
  hr_engagement: '직원 만족도 조사',
  wed_concept: '행사 콘셉트 제안',
  wed_checklist: '체크리스트 생성',
  wed_invite: '초대장 문구',
  wed_budget: '예산 계획표',
  wed_after: '후기·후속 마케팅'
};

const authors: Author[] = [
  { id: 'author-aurora', name: 'Aurora Script', avatar: 'https://i.pravatar.cc/150?img=8', role: 'creator' },
  { id: 'author-harper', name: 'Harper Mode', avatar: 'https://i.pravatar.cc/150?img=12', role: 'creator' },
  { id: 'author-neo', name: 'Neo Draft', avatar: 'https://i.pravatar.cc/150?img=22', role: 'creator' },
  { id: 'author-luna', name: 'Luna Pixel', avatar: 'https://i.pravatar.cc/150?img=32', role: 'creator' },
  { id: 'author-jules', name: 'Jules Metric', avatar: 'https://i.pravatar.cc/150?img=44', role: 'creator' }
];

const thumb = (seed: string) => `https://picsum.photos/seed/curait-${seed}/640/360`;
const iso = (offset: number) => new Date(Date.now() - offset * 86400000).toISOString();

const withTagSet = (tags: string[], extra: string[]): string[] =>
  Array.from(new Set([...tags, ...extra])).slice(0, 10);

type PromptSeed = {
  id: string;
  title: string;
  description: string;
  category: CategoryKey;
  tags: [string, string, string];
  price: number;
  discount?: number;
  rating: number;
  sold: number;
  authorIndex: number;
  preview: string;
  body: string;
  allTags: string[];
};

const seeds: PromptSeed[] = [
  {
    id: 'fnb-menu-blueprint',
    title: 'Seasonal Fusion Menu Blueprint',
    description:
      'Design a {season} tasting menu that balances signature dishes with trending ingredients for {restaurant_style}.',
    category: 'fnb_menu',
    tags: ['fusion menu', 'seasonal', 'tasting'],
    price: 39000,
    discount: 20,
    rating: 4.8,
    sold: 264,
    authorIndex: 0,
    preview: 'Generate a 6-course menu with descriptions, plating notes, and sourcing checklist.',
    body: `You are the executive chef for {restaurant_name}. Create a {season} tasting menu featuring {cuisine_focus}. Provide:
1. Course name & hooky description
2. Flavor profile & dietary notes
3. Local sourcing recommendations with {constraints}
4. Prep timeline table (D-2 to service)
5. Upsell suggestion for beverage pairing`,
    allTags: withTagSet(['tasting menu', 'seasonal planning', 'local sourcing'], ['chef workflow', 'menu costing', 'prep timeline', 'dietary matrix', 'pairing ideas', 'kitchen ops', 'signature dish'])
  },
  {
    id: 'fnb-marketing-carousel',
    title: 'Seasonal Campaign Carousel Kit',
    description: 'Develop a 5-slide Instagram carousel for {season} featuring {signature_item}.',
    category: 'fnb_marketing',
    tags: ['instagram', 'carousel', 'seasonal'],
    price: 26000,
    discount: 25,
    rating: 4.7,
    sold: 311,
    authorIndex: 1,
    preview: 'Deliver slide copy, CTA, and visual cues aligned to {brand_voice}.',
    body: `Create a 5-slide carousel plan. For each slide, provide: headline (<=30 char), supporting copy, visual direction, motion hint, CTA. Include posting schedule with best time for {city}.`,
    allTags: withTagSet(['carousel plan', 'visual cues', 'posting schedule'], ['brand voice', 'cta strategy', 'motion hint', 'social timing', 'story arc', 'copywriting', 'seasonal hook'])
  },
  {
    id: 'fnb-reviews-recovery',
    title: 'Guest Recovery Email Weave',
    description: 'Compose empathetic response templates for {complaint_type} with {brand_voice}.',
    category: 'fnb_reviews',
    tags: ['guest recovery', 'email templates', 'empathy'],
    price: 24000,
    discount: 30,
    rating: 4.9,
    sold: 402,
    authorIndex: 2,
    preview: 'Provide tone sliders and action steps for team follow-up.',
    body: `Output 3 email templates: acknowledge, resolve, follow-up. Include tone slider table (calm vs energetic) and internal action checklist with SLA for {resolution_deadline}.`,
    allTags: withTagSet(['guest recovery', 'tone slider', 'action checklist'], ['sla planning', 'follow up', 'brand voice', 'complaint mapping', 'email template', 'service recovery'])
  },
  {
    id: 'retail-copy-pdp',
    title: 'DTC Product Story Weaver',
    description: 'Write long-form PDP copy for {product_name} targeting {persona}.',
    category: 'retail_copy',
    tags: ['pdp copy', 'storytelling', 'persona'],
    price: 29000,
    discount: 12,
    rating: 4.5,
    sold: 174,
    authorIndex: 3,
    preview: 'Include hero statement, spec table, FAQ, and conversion nudges.',
    body: `Return structured Markdown with sections: Hook, Narrative, Benefits, Specs table, Social proof snippet, FAQ (5 items), CTA variants. Align tone with {brand_voice}.`,
    allTags: withTagSet(['pdp copy', 'faq', 'spec table'], ['conversion nudge', 'persona targeting', 'markdown output', 'social proof', 'cta variant', 'tone alignment'])
  },
  {
    id: 'retail-display-storyboard',
    title: 'Window VM Storyboard',
    description: 'Plan a window display narrative for {campaign_theme} including prop checklist.',
    category: 'retail_display',
    tags: ['visual merchandising', 'storyboard', 'props'],
    price: 26000,
    discount: 20,
    rating: 4.4,
    sold: 133,
    authorIndex: 4,
    preview: 'Include color palette, focal hierarchy, and staffing notes.',
    body: `Return sections: Narrative, Palette (HEX codes), Layout wireframe (ASCII), Prop checklist, Staffing notes with {staffing_budget}.`,
    allTags: withTagSet(['palette', 'ascii wireframe', 'prop checklist'], ['focal hierarchy', 'staffing notes', 'vm narrative', 'campaign theme', 'window goals'])
  },
  {
    id: 'retail-promo-launch',
    title: 'Retail Launch Playbook',
    description: 'Build 4-week promo plan for {collection_name} with omnichannel touchpoints.',
    category: 'retail_promo',
    tags: ['promo plan', 'omnichannel', 'launch'],
    price: 33000,
    discount: 22,
    rating: 4.6,
    sold: 210,
    authorIndex: 0,
    preview: 'Outline channel cadence, offer tiers, and creative briefs.',
    body: `Return calendar view (Markdown table) plus channel briefs (email, sms, paid social, in-store) with KPIs tied to {goal_metric}. Include creative direction bullets.`,
    allTags: withTagSet(['calendar view', 'creative brief', 'kpi'], ['offer tiers', 'channel cadence', 'omnichannel', 'goal metric', 'creative direction'])
  },
  {
    id: 'tax-yearend-guide',
    title: 'Year-End Tax Navigator',
    description: 'Guide {employee_count} employees through year-end tax filing with {country} specific rules.',
    category: 'tax_yearend',
    tags: ['year-end', 'employee guide', 'tax filing'],
    price: 31000,
    discount: 18,
    rating: 4.7,
    sold: 158,
    authorIndex: 1,
    preview: 'Generate FAQ, checklist, and email templates for HR teams.',
    body: `Provide: timeline table, employee FAQ, communication templates (email/SMS), required documents list, escalation plan with contacts in {country}.`,
    allTags: withTagSet(['timeline', 'faq', 'communication templates'], ['document list', 'escalation plan', 'hr enablement', 'country rules', 'tax filing'])
  },
  {
    id: 'tax-vat-automation',
    title: 'VAT Filing Workflow Engine',
    description: 'Automate VAT filing steps for {business_model} with {invoice_volume} invoices per month.',
    category: 'tax_vat',
    tags: ['vat filing', 'automation', 'workflow'],
    price: 35000,
    discount: 10,
    rating: 4.5,
    sold: 126,
    authorIndex: 2,
    preview: 'Return SOP, checklist, and software integration map.',
    body: `Output BPMN-style text diagram, task checklist with owners, data validation rules, submission calendar, and exception handling guide for {tax_authority}.`,
    allTags: withTagSet(['workflow', 'bpmn', 'exception handling'], ['submission calendar', 'data validation', 'sop', 'integration map'])
  },
  {
    id: 'tax-saving-playbook',
    title: 'SMB Tax Saving Playbook',
    description: 'Recommend quarterly tax optimization levers for {business_type} under {regulation_year}.',
    category: 'tax_saving',
    tags: ['tax strategy', 'smb', 'quarterly'],
    price: 37000,
    discount: 15,
    rating: 4.6,
    sold: 140,
    authorIndex: 3,
    preview: 'Provide deduction map, risk scoring, and implementation timeline.',
    body: `Deliver Markdown doc with sections: Opportunity Table, Risk Heatmap, Implementation Timeline, Compliance Checklist, Stakeholder Brief. Include numeric examples using {revenue_range}.`,
    allTags: withTagSet(['deduction map', 'risk heatmap', 'timeline'], ['compliance checklist', 'stakeholder brief', 'revenue scenario', 'tax optimization'])
  },
  {
    id: 'mfg-schedule-optimizer',
    title: 'Production Sprint Scheduler',
    description: 'Optimize production sprint for {product_family} hitting {deadline}.',
    category: 'mfg_schedule',
    tags: ['production', 'scheduling', 'throughput'],
    price: 40000,
    discount: 20,
    rating: 4.6,
    sold: 188,
    authorIndex: 4,
    preview: 'Generate Gantt-like table, shift assignments, and buffer analysis.',
    body: `Input: current capacity JSON. Output: task schedule table, critical path summary, buffer analysis, staffing roster, risk mitigation plan referencing {constraints}.`,
    allTags: withTagSet(['task schedule', 'critical path', 'buffer analysis'], ['staffing roster', 'risk mitigation', 'capacity json', 'production sprint'])
  },
  {
    id: 'mfg-quality-checklist',
    title: 'Quality Gatekeeper Kit',
    description: 'Draft quality inspection checklist for {product_line} with {regulatory_standard}.',
    category: 'mfg_quality',
    tags: ['quality', 'inspection', 'regulation'],
    price: 28000,
    discount: 12,
    rating: 4.4,
    sold: 120,
    authorIndex: 0,
    preview: 'Include sampling plan, defect codes, and escalation flow.',
    body: `Return spreadsheet-style table: checkpoint, measurement tool, frequency, defect_code, corrective_action. Add escalation flow diagram text and training note for {role}.`,
    allTags: withTagSet(['sampling plan', 'defect codes', 'escalation flow'], ['training note', 'regulatory standard', 'inspection table', 'corrective action'])
  },
  {
    id: 'mfg-cost-reducer',
    title: 'Material Cost Reducer Lab',
    description: 'Brainstorm cost reduction initiatives for {material_family} without sacrificing {quality_target}.',
    category: 'mfg_cost',
    tags: ['cost saving', 'materials', 'brainstorm'],
    price: 32000,
    discount: 18,
    rating: 4.3,
    sold: 114,
    authorIndex: 1,
    preview: 'Provide initiative backlog with ROI and feasibility scores.',
    body: `Output table: initiative, cost_saving_estimate, feasibility_score, impact_on_quality, required_team, timeline. Include quick win checklist and supplier negotiation script referencing {supplier_profile}.`,
    allTags: withTagSet(['initiative backlog', 'roi', 'negotiation script'], ['quick wins', 'supplier profile', 'quality guardrail', 'cost saving ideas'])
  },
  {
    id: 'it-code-refactor',
    title: 'Legacy Refactor Navigator',
    description: 'Refactor {codebase_module} to modern patterns with {framework} best practices.',
    category: 'it_code',
    tags: ['refactor', 'best practices', 'code review'],
    price: 45000,
    discount: 20,
    rating: 4.7,
    sold: 220,
    authorIndex: 2,
    preview: 'Generate refactor plan, code snippet suggestions, and testing checklist.',
    body: `Provide: architecture summary, code smell table, recommended patterns, example refactored snippet, regression test checklist referencing {ci_tool}.`,
    allTags: withTagSet(['architecture summary', 'code smell', 'refactor plan'], ['testing checklist', 'pattern recommendation', 'ci integration', 'legacy module'])
  },
  {
    id: 'it-api-blueprint',
    title: 'Composable API Blueprint',
    description: 'Design REST + Webhook API for {service_name} with {sla} SLA.',
    category: 'it_api',
    tags: ['api design', 'webhooks', 'sla'],
    price: 47000,
    discount: 18,
    rating: 4.6,
    sold: 198,
    authorIndex: 3,
    preview: 'Output OpenAPI spec outline, webhook events, and auth matrix.',
    body: `Return: endpoint table, sample payloads with {field_requirements}, webhook event catalog, auth matrix, rate limit policy, monitoring dashboard sketch.`,
    allTags: withTagSet(['openapi', 'webhook events', 'auth matrix'], ['rate limiting', 'monitoring', 'payload samples', 'sla commitment'])
  },
  {
    id: 'it-bugfix-sprint',
    title: 'Critical Bugfix Sprint Coach',
    description: 'Coordinate hotfix response for {incident_id} affecting {user_segment}.',
    category: 'it_bugfix',
    tags: ['incident', 'hotfix', 'coordination'],
    price: 34000,
    discount: 15,
    rating: 4.5,
    sold: 142,
    authorIndex: 4,
    preview: 'Provide runbook timeline, communication scripts, and QA matrix.',
    body: `Deliver: incident timeline, hotfix checklist, rollback plan, QA matrix with {critical_paths}, stakeholder comms (email + status page), postmortem template.`,
    allTags: withTagSet(['incident timeline', 'rollback plan', 'qa matrix'], ['stakeholder comms', 'postmortem', 'hotfix checklist', 'critical paths'])
  },
  {
    id: 'pm-spec-drafter',
    title: 'Spec Narrative Composer',
    description: 'Draft functional spec for {feature_name} targeting {persona}.',
    category: 'pm_spec',
    tags: ['product spec', 'feature brief', 'persona'],
    price: 36000,
    discount: 20,
    rating: 4.6,
    sold: 178,
    authorIndex: 0,
    preview: 'Include problem framing, requirements table, and success metrics.',
    body: `Return Markdown with sections: Context, Problem, User Stories, Acceptance Criteria, Success Metrics, Analytics plan, Rollout checklist referencing {release_window}.`,
    allTags: withTagSet(['user stories', 'acceptance criteria', 'success metrics'], ['analytics plan', 'rollout checklist', 'persona focus', 'feature narrative'])
  },
  {
    id: 'pm-scenario-map',
    title: 'Journey Scenario Mapper',
    description: 'Create end-to-end scenario for {persona} achieving {goal_statement}.',
    category: 'pm_scenario',
    tags: ['scenario', 'journey map', 'persona'],
    price: 33000,
    discount: 15,
    rating: 4.4,
    sold: 140,
    authorIndex: 1,
    preview: 'Provide step timeline, emotion curve, and opportunity grid.',
    body: `Output: timeline table, emotion curve JSON, touchpoint inventory, friction/opportunity grid, instrumentation checklist for {analytics_stack}.`,
    allTags: withTagSet(['timeline', 'emotion curve', 'opportunity grid'], ['touchpoint inventory', 'instrumentation', 'persona journey', 'goal statement'])
  },
  {
    id: 'pm-ux-audit',
    title: 'UX Feedback Studio',
    description: 'Audit {flow_name} for friction and improvement ideas based on {north_star_metric}.',
    category: 'pm_ux',
    tags: ['ux audit', 'heuristic', 'metric'],
    price: 31000,
    discount: 10,
    rating: 4.3,
    sold: 126,
    authorIndex: 2,
    preview: 'Return heuristics rating, annotated wireframes, and experiment backlog.',
    body: `Deliver: heuristic scorecard, annotated screenshot prompts, prioritized experiment backlog with ICE score, copy suggestions, accessibility checklist referencing {wcag_target}.`,
    allTags: withTagSet(['heuristic scorecard', 'experiment backlog', 'accessibility'], ['annotated wireframe', 'copy suggestion', 'north star metric', 'wcag target'])
  },
  {
    id: 'creative-brand-sprint',
    title: 'Brand Narrative Sprint',
    description: 'Craft brand manifesto for {brand_name} defined by {core_values}.',
    category: 'creative_brand',
    tags: ['brand manifesto', 'tone', 'core values'],
    price: 30000,
    discount: 15,
    rating: 4.6,
    sold: 160,
    authorIndex: 3,
    preview: 'Include origin story, tone map, and tagline explorations.',
    body: `Provide: manifesto paragraphs, tone spectrum matrix, tagline trio, visual inspiration keywords, launch speech outline referencing {audience}.`,
    allTags: withTagSet(['manifesto', 'tone spectrum', 'tagline'], ['visual inspiration', 'launch speech', 'core values', 'audience'])
  },
  {
    id: 'creative-image-generator',
    title: 'AI Image Prompt Orchestra',
    description: 'Generate multi-shot image prompts for {campaign_theme} using {model_name}.',
    category: 'creative_image',
    tags: ['image prompt', 'ai art', 'campaign'],
    price: 28000,
    discount: 10,
    rating: 4.5,
    sold: 150,
    authorIndex: 4,
    preview: 'Output 5 prompt variations with lighting, composition, and styling cues.',
    body: `Return table: shot_name, prompt_text, negative_prompt, camera_settings, lighting_notes, post_process_tip. Add brand guideline reminders for {brand_voice}.`,
    allTags: withTagSet(['prompt text', 'lighting notes', 'composition'], ['negative prompt', 'camera settings', 'post process', 'brand guidelines'])
  },
  {
    id: 'creative-feedback-kit',
    title: 'Design Feedback Framework',
    description: 'Structure feedback loop for {project_type} with multi-stakeholder input.',
    category: 'creative_feedback',
    tags: ['feedback', 'stakeholder', 'framework'],
    price: 25000,
    discount: 12,
    rating: 4.4,
    sold: 118,
    authorIndex: 0,
    preview: 'Provide critique template, facilitation agenda, and scoring rubric.',
    body: `Deliver: feedback rubric, meeting agenda, comment taxonomy, decision log template, async review instructions referencing {tool_stack}.`,
    allTags: withTagSet(['feedback rubric', 'comment taxonomy', 'decision log'], ['facilitation agenda', 'async review', 'tool stack', 'stakeholder map'])
  },
  {
    id: 'mkt-campaign-launch',
    title: 'Campaign Architecture Lab',
    description: 'Architect omnichannel campaign for {product_launch} targeting {primary_persona}.',
    category: 'mkt_campaign',
    tags: ['campaign plan', 'omnichannel', 'launch'],
    price: 36000,
    discount: 20,
    rating: 4.7,
    sold: 204,
    authorIndex: 1,
    preview: 'Map messaging, channels, budget split, and KPI tree.',
    body: `Return: objective tree, messaging framework, channel-by-week table, budget allocation pie data, KPI tracker structure referencing {north_star}.`,
    allTags: withTagSet(['objective tree', 'messaging framework', 'budget allocation'], ['kpi tracker', 'omnichannel plan', 'persona targeting', 'launch plan'])
  },
  {
    id: 'mkt-copy-sprint',
    title: 'Channel Copy Bundle',
    description: 'Write copy variations for {campaign_goal} across email, ads, and landing page.',
    category: 'mkt_copy',
    tags: ['copy bundle', 'multi channel', 'conversion'],
    price: 27000,
    discount: 10,
    rating: 4.3,
    sold: 130,
    authorIndex: 2,
    preview: 'Include subject lines, ad hooks, and hero headline matrix.',
    body: `Provide: email (subject/body/preheader), ad copy (primary/headline/description), landing hero (headline/subhead/cta) with tone options {tone_variants}.`,
    allTags: withTagSet(['subject lines', 'ad hooks', 'headline matrix'], ['tone variants', 'cta suggestions', 'conversion copy', 'channel sync'])
  },
  {
    id: 'mkt-analytics-dashboard',
    title: 'Marketing Pulse Dashboard',
    description: 'Outline dashboard for tracking {funnel_stage} metrics with {data_sources}.',
    category: 'mkt_analytics',
    tags: ['dashboard', 'analytics', 'funnel'],
    price: 32000,
    discount: 15,
    rating: 4.4,
    sold: 142,
    authorIndex: 3,
    preview: 'Provide chart specs, alerts, and stakeholder rituals.',
    body: `Return: widget list with chart type, metric definitions, alert thresholds, stakeholder ritual calendar, and integration notes for {bi_tool}.`,
    allTags: withTagSet(['widget list', 'metric definitions', 'alert thresholds'], ['stakeholder ritual', 'integration notes', 'funnel stage', 'bi tool'])
  },
  {
    id: 'edu-curriculum-architect',
    title: 'Curriculum Architect',
    description: 'Design {weeks}-week curriculum for {course_topic} targeting {learner_profile}.',
    category: 'edu_curriculum',
    tags: ['curriculum', 'learner journey', 'lesson plan'],
    price: 30000,
    discount: 18,
    rating: 4.5,
    sold: 156,
    authorIndex: 4,
    preview: 'Outline learning objectives, session breakdown, and assessment checkpoints.',
    body: `Provide: week-by-week table, learning objectives, teaching methods, assessment checkpoints, project brief referencing {capstone_goal}.`,
    allTags: withTagSet(['week plan', 'assessment', 'project brief'], ['learning objectives', 'teaching methods', 'capstone goal', 'learner profile'])
  },
  {
    id: 'edu-material-kit',
    title: 'Lesson Asset Generator',
    description: 'Create teaching assets for {lesson_topic} for {grade_level}.',
    category: 'edu_material',
    tags: ['lesson asset', 'worksheet', 'slide deck'],
    price: 26000,
    discount: 12,
    rating: 4.3,
    sold: 120,
    authorIndex: 0,
    preview: 'Produce slide outline, worksheet tasks, and discussion prompts.',
    body: `Return: slide outline with talking points, worksheet (5 tasks), discussion prompts, homework idea, differentiation tips for {learner_needs}.`,
    allTags: withTagSet(['slide outline', 'worksheet tasks', 'discussion prompts'], ['homework idea', 'differentiation', 'grade level', 'lesson topic'])
  },
  {
    id: 'edu-feedback-automation',
    title: 'Automated Feedback Studio',
    description: 'Automate student feedback for {assignment_type} using {rubric_name}.',
    category: 'edu_feedback',
    tags: ['feedback', 'automation', 'rubric'],
    price: 24000,
    discount: 15,
    rating: 4.2,
    sold: 110,
    authorIndex: 1,
    preview: 'Return rubric-aligned comments, sentiment sliders, and progress tracker template.',
    body: `Deliver: rubric criteria table, comment bank with {tone_levels}, sentiment slider logic, progress tracker sheet, parent notification snippet.`,
    allTags: withTagSet(['rubric table', 'comment bank', 'progress tracker'], ['sentiment slider', 'parent notification', 'automation flow', 'assignment type'])
  },
  {
    id: 'health-notice-pro',
    title: 'Clinic Notice Composer',
    description: 'Write patient notice for {procedure} with {reading_level} readability.',
    category: 'health_notice',
    tags: ['patient notice', 'readability', 'clinic'],
    price: 21000,
    discount: 10,
    rating: 4.3,
    sold: 118,
    authorIndex: 2,
    preview: 'Include bilingual version and consent checklist.',
    body: `Output: summary paragraph, key instructions list, consent checklist, bilingual translation ({language_pair}), follow-up contact info template.`,
    allTags: withTagSet(['consent checklist', 'bilingual', 'instructions'], ['reading level', 'clinic tone', 'follow-up info', 'procedure detail'])
  },
  {
    id: 'health-summary-ai',
    title: 'Visit Summary Synthesizer',
    description: 'Summarize patient visit from SOAP notes for {specialty} including {followup_window}.',
    category: 'health_summary',
    tags: ['summary', 'soap notes', 'follow up'],
    price: 34000,
    discount: 18,
    rating: 4.5,
    sold: 150,
    authorIndex: 3,
    preview: 'Generate patient-friendly summary, clinician recap, and billing codes.',
    body: `Provide: patient summary (layman tone), clinician recap, ICD/CPT suggestions, follow-up checklist, reminder script referencing {ehr_system}.`,
    allTags: withTagSet(['patient summary', 'clinician recap', 'billing codes'], ['follow-up checklist', 'reminder script', 'ehr integration', 'soap notes'])
  },
  {
    id: 'health-campaign-kit',
    title: 'Preventive Campaign Toolkit',
    description: 'Plan awareness campaign for {health_topic} targeting {community_segment}.',
    category: 'health_campaign',
    tags: ['campaign', 'community', 'prevention'],
    price: 28000,
    discount: 15,
    rating: 4.4,
    sold: 130,
    authorIndex: 4,
    preview: 'Provide messaging pillars, channel mix, and event checklist.',
    body: `Return: messaging pillars, channel mix plan, event checklist, partnership outreach scripts, KPI tracker with {impact_metric}.`,
    allTags: withTagSet(['messaging pillars', 'channel mix', 'event checklist'], ['partnership outreach', 'kpi tracker', 'impact metric', 'community segment'])
  },
  {
    id: 'realty-ad-generator',
    title: 'Property Story Copydesk',
    description: 'Write listing copy for {property_type} in {neighborhood} aimed at {buyer_persona}.',
    category: 'realty_ad',
    tags: ['listing copy', 'buyer persona', 'story'],
    price: 26000,
    discount: 12,
    rating: 4.3,
    sold: 124,
    authorIndex: 0,
    preview: 'Include headline, bullet highlights, and CTA variations.',
    body: `Deliver: headline options, property narrative, bullet highlights, neighborhood spotlight, CTA variations referencing {call_to_action}.`,
    allTags: withTagSet(['headline', 'property narrative', 'cta'], ['neighborhood spotlight', 'buyer persona', 'listing highlights', 'story tone'])
  },
  {
    id: 'realty-price-analyst',
    title: 'Market Pulse Analyzer',
    description: 'Analyze comparable sales for {property_type} over {lookback_period}.',
    category: 'realty_price',
    tags: ['comps', 'market analysis', 'pricing'],
    price: 34000,
    discount: 20,
    rating: 4.5,
    sold: 142,
    authorIndex: 1,
    preview: 'Provide comp table, pricing recommendation, and buyer/seller scripts.',
    body: `Return: comp table (address, price, sq_ft, delta), pricing recommendation narrative, negotiation script, risk factors, visualization spec for {chart_tool}.`,
    allTags: withTagSet(['comp table', 'pricing recommendation', 'negotiation script'], ['risk factors', 'visualization spec', 'market pulse', 'chart tool'])
  },
  {
    id: 'realty-doc-wizard',
    title: 'Contract Draft Wizard',
    description: 'Generate contract template for {deal_type} with {jurisdiction} compliance.',
    category: 'realty_doc',
    tags: ['contract', 'template', 'compliance'],
    price: 38000,
    discount: 18,
    rating: 4.6,
    sold: 150,
    authorIndex: 2,
    preview: 'Deliver clause library, signature flow, and checklist.',
    body: `Provide: clause library with placeholders {party_a}, {party_b}, signature workflow, due diligence checklist, timeline overview, risk mitigation notes.`,
    allTags: withTagSet(['clause library', 'signature flow', 'due diligence'], ['timeline overview', 'risk mitigation', 'jurisdiction compliance', 'deal type'])
  },
  {
    id: 'legal-contract-kit',
    title: 'Contract Clause Composer',
    description: 'Draft service agreement for {service_scope} with {liability_cap}.',
    category: 'legal_contract',
    tags: ['contract', 'service agreement', 'legal'],
    price: 42000,
    discount: 22,
    rating: 4.7,
    sold: 168,
    authorIndex: 3,
    preview: 'Include clause breakdown, negotiation tips, and signature checklist.',
    body: `Deliver: clause breakdown with rationale, fallback language suggestions, signature checklist, risk matrix, negotiation talking points referencing {client_profile}.`,
    allTags: withTagSet(['clause breakdown', 'fallback language', 'risk matrix'], ['signature checklist', 'negotiation points', 'client profile', 'service scope'])
  },
  {
    id: 'legal-consult-script',
    title: 'Consultation Script Builder',
    description: 'Create consultation script for {case_type} during {session_length} intake.',
    category: 'legal_consult',
    tags: ['consultation', 'script', 'intake'],
    price: 30000,
    discount: 10,
    rating: 4.4,
    sold: 118,
    authorIndex: 4,
    preview: 'Provide question flow, empathy statements, and follow-up tasks.',
    body: `Output: step-by-step script, decision tree prompts, empathy statements, data capture checklist, follow-up task template referencing {practice_management_tool}.`,
    allTags: withTagSet(['question flow', 'decision tree', 'empathy statements'], ['data capture', 'follow-up tasks', 'practice management', 'case type'])
  },
  {
    id: 'legal-checklist-suite',
    title: 'Litigation Checklist Suite',
    description: 'Produce litigation workflow checklist for {case_category} with {court_level}.',
    category: 'legal_checklist',
    tags: ['litigation', 'workflow', 'checklist'],
    price: 32000,
    discount: 15,
    rating: 4.5,
    sold: 124,
    authorIndex: 0,
    preview: 'Include deadline tracker, document bundle map, and risk notes.',
    body: `Deliver: phase-by-phase checklist, deadline tracker table, document bundle map, witness prep notes, risk log template referencing {jurisdiction}.`,
    allTags: withTagSet(['phase checklist', 'deadline tracker', 'document map'], ['witness prep', 'risk log', 'jurisdiction notes', 'litigation workflow'])
  },
  {
    id: 'solo-automation-studio',
    title: 'Solo Automation Studio',
    description: 'Automate {service_process} using no-code stack {tooling}.',
    category: 'solo_automation',
    tags: ['automation', 'no-code', 'solo'],
    price: 26000,
    discount: 12,
    rating: 4.3,
    sold: 110,
    authorIndex: 1,
    preview: 'Produce workflow blueprint, zap recipes, and KPI tracker.',
    body: `Return: workflow diagram text, automation recipes with triggers/actions, SLA monitor, onboarding checklist, client communication template referencing {brand_voice}.`,
    allTags: withTagSet(['workflow diagram', 'automation recipe', 'sla monitor'], ['onboarding checklist', 'client communication', 'tooling', 'service process'])
  },
  {
    id: 'solo-portfolio-crafter',
    title: 'Portfolio Narrative Crafter',
    description: 'Craft portfolio site copy for {profession} targeting {ideal_client}.',
    category: 'solo_portfolio',
    tags: ['portfolio', 'copywriting', 'positioning'],
    price: 22000,
    discount: 10,
    rating: 4.2,
    sold: 96,
    authorIndex: 2,
    preview: 'Include about story, service descriptions, and testimonial prompts.',
    body: `Provide: homepage hero copy, about story, service list, case study outline, testimonial prompt email referencing {brand_personality}.`,
    allTags: withTagSet(['hero copy', 'service list', 'testimonial prompt'], ['about story', 'case study outline', 'ideal client', 'brand personality'])
  },
  {
    id: 'solo-tax-pilot',
    title: 'Freelancer Tax Pilot',
    description: 'Build quarterly tax prep workflow for {income_streams} with {location_tax}.',
    category: 'solo_tax',
    tags: ['tax workflow', 'quarterly', 'freelancer'],
    price: 25000,
    discount: 15,
    rating: 4.3,
    sold: 104,
    authorIndex: 3,
    preview: 'Provide expense categories, reminders, and savings recommendations.',
    body: `Deliver: quarterly calendar, expense category map, estimated payment calculator, savings recommendation table, accountant handoff brief referencing {accounting_tool}.`,
    allTags: withTagSet(['calendar', 'expense map', 'payment calculator'], ['savings recommendation', 'handoff brief', 'location tax', 'income streams'])
  },
  {
    id: 'ngo-event-lab',
    title: 'Impact Event Architect',
    description: 'Design event plan for {cause} engaging {attendee_goal} supporters.',
    category: 'ngo_event',
    tags: ['event plan', 'nonprofit', 'engagement'],
    price: 28000,
    discount: 18,
    rating: 4.4,
    sold: 112,
    authorIndex: 4,
    preview: 'Provide run-of-show, volunteer roles, and impact storytelling assets.',
    body: `Return: run-of-show table, volunteer roster, storytelling asset checklist, sponsorship pitch, post-event survey referencing {impact_metric}.`,
    allTags: withTagSet(['run of show', 'volunteer roster', 'storytelling'], ['sponsorship pitch', 'post-event survey', 'impact metric', 'engagement goal'])
  },
  {
    id: 'ngo-report-studio',
    title: 'Grant Report Studio',
    description: 'Compile grant report for {funder_name} covering {reporting_period}.',
    category: 'ngo_report',
    tags: ['grant report', 'nonprofit', 'impact'],
    price: 30000,
    discount: 12,
    rating: 4.5,
    sold: 118,
    authorIndex: 0,
    preview: 'Include outcomes narrative, data tables, and visual brief.',
    body: `Deliver: executive summary, impact metrics table, beneficiary stories, budget utilization chart spec, next steps referencing {funder_requirements}.`,
    allTags: withTagSet(['impact metrics', 'beneficiary stories', 'budget chart'], ['executive summary', 'funder requirements', 'next steps', 'reporting period'])
  },
  {
    id: 'ngo-survey-lab',
    title: 'Community Survey Designer',
    description: 'Build survey for {community} to measure {outcome_goal}.',
    category: 'ngo_survey',
    tags: ['survey', 'questionnaire', 'community'],
    price: 22000,
    discount: 10,
    rating: 4.2,
    sold: 94,
    authorIndex: 1,
    preview: 'Provide question bank, sampling plan, and incentives.',
    body: `Output: survey sections, question bank with scales, sampling plan, incentive suggestion, analysis plan referencing {data_platform}.`,
    allTags: withTagSet(['question bank', 'sampling plan', 'analysis plan'], ['incentive suggestion', 'outcome goal', 'data platform', 'community insight'])
  },
  {
    id: 'travel-course-designer',
    title: 'Signature Itinerary Builder',
    description: 'Craft 5-day itinerary for {destination} tailored to {traveler_persona}.',
    category: 'travel_course',
    tags: ['itinerary', 'travel design', 'persona'],
    price: 24000,
    discount: 12,
    rating: 4.3,
    sold: 130,
    authorIndex: 2,
    preview: 'Include daily highlights, dining picks, and logistic notes.',
    body: `Return: day-by-day schedule, dining recommendations, logistics checklist, photo spot suggestions, optional upgrades referencing {budget_range}.`,
    allTags: withTagSet(['daily schedule', 'dining picks', 'logistics'], ['photo spots', 'optional upgrades', 'traveler persona', 'budget range'])
  },
  {
    id: 'travel-package-copy',
    title: 'Tour Package Copy Lab',
    description: 'Write sales copy for {package_name} targeting {sales_channel}.',
    category: 'travel_package',
    tags: ['sales copy', 'tour package', 'channel'],
    price: 21000,
    discount: 10,
    rating: 4.2,
    sold: 104,
    authorIndex: 3,
    preview: 'Produce hero copy, inclusions list, and urgency triggers.',
    body: `Deliver: hero headline, promise paragraph, inclusions table, urgency triggers, FAQ referencing {booking_policy}.`,
    allTags: withTagSet(['hero headline', 'inclusions', 'urgency'], ['faq', 'booking policy', 'sales channel', 'tour package'])
  },
  {
    id: 'travel-sns-calendar',
    title: 'Travel Social Calendar',
    description: 'Plan 30-day social calendar promoting {destination_theme} to {platforms}.',
    category: 'travel_sns',
    tags: ['social calendar', 'travel', 'content'],
    price: 23000,
    discount: 15,
    rating: 4.3,
    sold: 110,
    authorIndex: 4,
    preview: 'Include content pillars, caption prompts, and UGC curation tips.',
    body: `Return: calendar table (date, format, hook, CTA), caption prompts with {brand_voice}, UGC curation checklist, influencer outreach script.`,
    allTags: withTagSet(['calendar table', 'caption prompts', 'ugc checklist'], ['influencer outreach', 'brand voice', 'destination theme', 'platform mix'])
  },
  {
    id: 'logi-delivery-scheduler',
    title: 'Delivery Route Scheduler',
    description: 'Optimize delivery schedule for {fleet_size} vehicles covering {zones}.',
    category: 'logi_delivery',
    tags: ['delivery', 'schedule', 'optimization'],
    price: 32000,
    discount: 18,
    rating: 4.4,
    sold: 120,
    authorIndex: 0,
    preview: 'Provide route plan, driver assignments, and SLA tracker.',
    body: `Output: route table, driver assignment chart, SLA tracker, contingency plan for delays, customer notification script referencing {routing_constraints}.`,
    allTags: withTagSet(['route plan', 'driver assignment', 'sla tracker'], ['contingency plan', 'notification script', 'routing constraints', 'delivery zones'])
  },
  {
    id: 'logi-route-optimizer',
    title: 'Smart Route Optimizer',
    description: 'Generate optimal route order for {stops_count} stops with {priority_rules}.',
    category: 'logi_route',
    tags: ['route', 'optimization', 'priority'],
    price: 30000,
    discount: 12,
    rating: 4.3,
    sold: 112,
    authorIndex: 1,
    preview: 'Return prioritized sequence, map annotations, and fuel estimate.',
    body: `Provide: ordered stop list, map annotation instructions, fuel/time estimate, constraint notes, driver briefing referencing {telematics_system}.`,
    allTags: withTagSet(['ordered stops', 'fuel estimate', 'driver briefing'], ['map annotations', 'constraint notes', 'priority rules', 'telematics'])
  },
  {
    id: 'logi-notice-bot',
    title: 'Logistics Alert Copybot',
    description: 'Write proactive customer alerts for {logistics_event} across {channels}.',
    category: 'logi_notice',
    tags: ['customer alert', 'logistics', 'multi-channel'],
    price: 20000,
    discount: 8,
    rating: 4.1,
    sold: 98,
    authorIndex: 2,
    preview: 'Generate templates for delay, reschedule, and delivery confirmation.',
    body: `Deliver: email/SMS/push templates, timing rules, personalization tokens, escalation workflow, support FAQ referencing {service_level}.`,
    allTags: withTagSet(['templates', 'timing rules', 'personalization'], ['escalation workflow', 'support faq', 'service level', 'logistics event'])
  },
  {
    id: 'hr-hiring-lab',
    title: 'Precision Job Post Lab',
    description: 'Write job posting for {role_title} attracting {talent_profile}.',
    category: 'hr_hiring',
    tags: ['job post', 'talent', 'employer brand'],
    price: 23000,
    discount: 10,
    rating: 4.2,
    sold: 108,
    authorIndex: 3,
    preview: 'Include hook, role summary, impact bullets, and inclusive language check.',
    body: `Return: headline options, role summary, impact bullets, requirements matrix, benefits pitch, inclusive language checklist referencing {brand_values}.`,
    allTags: withTagSet(['role summary', 'impact bullets', 'inclusive checklist'], ['requirements matrix', 'benefits pitch', 'employer brand', 'talent profile'])
  },
  {
    id: 'hr-onboarding-guide',
    title: 'Onboarding Journey Designer',
    description: 'Design 30-60-90 day onboarding for {role_type} within {company_stage}.',
    category: 'hr_onboarding',
    tags: ['onboarding', 'journey', 'milestones'],
    price: 26000,
    discount: 12,
    rating: 4.4,
    sold: 116,
    authorIndex: 4,
    preview: 'Provide roadmap, buddy program, and success metrics.',
    body: `Deliver: 30-60-90 roadmap, buddy assignment matrix, success metrics dashboard, feedback cadence, resource hub outline referencing {tool_stack}.`,
    allTags: withTagSet(['roadmap', 'buddy matrix', 'success metrics'], ['feedback cadence', 'resource hub', 'company stage', 'role type'])
  },
  {
    id: 'hr-engagement-pulse',
    title: 'Employee Pulse Designer',
    description: 'Build engagement survey and action plan for {team_size} employees.',
    category: 'hr_engagement',
    tags: ['engagement', 'survey', 'action plan'],
    price: 24000,
    discount: 15,
    rating: 4.3,
    sold: 112,
    authorIndex: 0,
    preview: 'Include question themes, analysis approach, and comms toolkit.',
    body: `Return: survey question themes, scoring methodology, action planning template, communication toolkit, leadership briefing referencing {culture_values}.`,
    allTags: withTagSet(['question themes', 'scoring', 'action template'], ['communication toolkit', 'leadership brief', 'culture values', 'team size'])
  },
  {
    id: 'wed-concept-studio',
    title: 'Wedding Concept Studio',
    description: 'Design wedding concept for {couple_story} with {style_keywords}.',
    category: 'wed_concept',
    tags: ['wedding concept', 'style', 'story'],
    price: 28000,
    discount: 15,
    rating: 4.4,
    sold: 124,
    authorIndex: 1,
    preview: 'Deliver mood narrative, palette, and experience timeline.',
    body: `Provide: concept narrative, palette HEX, experience timeline, decor vignette list, wow moment ideas referencing {budget_range}.`,
    allTags: withTagSet(['concept narrative', 'palette', 'experience timeline'], ['decor vignette', 'wow moment', 'style keywords', 'budget range'])
  },
  {
    id: 'wed-checklist-queen',
    title: 'Wedding Checklist Queen',
    description: 'Create wedding planning checklist for {event_size} guests with {lead_time}.',
    category: 'wed_checklist',
    tags: ['wedding', 'checklist', 'timeline'],
    price: 24000,
    discount: 12,
    rating: 4.3,
    sold: 110,
    authorIndex: 2,
    preview: 'Include timeline, vendor tracker, and emergency kit.',
    body: `Return: month-by-month tasks, vendor tracker sheet, budget snapshot, emergency kit list, communication plan referencing {planning_team}.`,
    allTags: withTagSet(['timeline', 'vendor tracker', 'budget snapshot'], ['emergency kit', 'communication plan', 'event size', 'lead time'])
  },
  {
    id: 'wed-budget-architect',
    title: 'Wedding Budget Architect',
    description: 'Build budget model for {wedding_type} with {currency}.',
    category: 'wed_budget',
    tags: ['budget', 'wedding', 'finance'],
    price: 26000,
    discount: 10,
    rating: 4.4,
    sold: 112,
    authorIndex: 3,
    preview: 'Provide cost breakdown, contingency plan, and savings ideas.',
    body: `Deliver: budget spreadsheet layout, vendor payment schedule, contingency plan, savings ideas, conversation script for {stakeholders}.`,
    allTags: withTagSet(['budget layout', 'payment schedule', 'contingency'], ['savings ideas', 'conversation script', 'currency', 'wedding type'])
  }
];

export const prompts: PromptItem[] = seeds.map((seed) => ({
  id: seed.id,
  title: seed.title,
  description: seed.description,
  category: seed.category,
  tags: seed.tags,
  price: seed.price,
  discount: seed.discount,
  rating: seed.rating,
  sold: seed.sold,
  createdAt: iso(Math.floor(Math.random() * 120) + 5),
  author: authors[seed.authorIndex % authors.length],
  thumbnail: thumb(seed.id),
  preview: seed.preview,
  body: seed.body,
  allTags: seed.allTags
}));

export const getPromptById = (id: string): PromptItem | undefined =>
  prompts.find((item) => item.id === id);

export const getPromptsByCategory = (category: CategoryKey): PromptItem[] =>
  prompts.filter((item) => item.category === category);

export const getRelatedPrompts = (prompt: PromptItem, limit = 4): PromptItem[] => {
  const sameCategory = prompts.filter((item) => item.category === prompt.category && item.id !== prompt.id);
  const scored = sameCategory
    .map((item) => ({
      item,
      score: item.tags.filter((tag) => prompt.tags.includes(tag)).length
    }))
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((entry) => entry.item);
};

export type SavePromptPayload = Omit<PromptItem, 'id' | 'createdAt' | 'sold' | 'rating'> & {
  price: number;
  discount?: number;
};

export const savePrompt = async (_payload: SavePromptPayload): Promise<{ id: string }>
// eslint-disable-next-line @typescript-eslint/require-await
 => {
  console.info('savePrompt called with payload', _payload);
  return { id: `temp-${Date.now()}` };
};

export type CheckoutMode = 'one_time' | 'subscription';

export const createCheckoutSession = async (
  promptId: string,
  mode: CheckoutMode
): Promise<{ checkoutUrl: string }>
// eslint-disable-next-line @typescript-eslint/require-await
 => {
  console.info('createCheckoutSession', { promptId, mode });
  return { checkoutUrl: `https://example.com/checkout?prompt=${promptId}&mode=${mode}` };
};

export type ReviewPayload = {
  promptId: string;
  rating: number;
  comment: string;
};

export const submitReviewDraft = async (_payload: ReviewPayload): Promise<{ id: string }>
// eslint-disable-next-line @typescript-eslint/require-await
 => {
  console.info('submitReviewDraft', _payload);
  return { id: `review-${Date.now()}` };
};
