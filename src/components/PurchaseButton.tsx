'use client';

import { Button } from './ui/button';
import { createCheckoutSession } from '../lib/data';

export function PurchaseButton({ promptId, className }: { promptId: string; className?: string }) {
  return (
    <Button
      variant="primary"
      className={className}
      onClick={async () => {
        const session = await createCheckoutSession(promptId, 'one_time');
        alert(`결제 연동 예정입니다. 미리보기: ${session.url}`);
      }}
    >
      구매하기
    </Button>
  );
}
