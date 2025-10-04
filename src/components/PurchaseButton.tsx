'use client';

import { Button } from './ui/button';
import { createCheckoutSession } from '../lib/data';

type PurchaseButtonProps = {
  promptId: string;
};

export const PurchaseButton = ({ promptId }: PurchaseButtonProps) => {
  const handleClick = async () => {
    const session = await createCheckoutSession(promptId, 'one_time');
    alert('결제 준비 중입니다. 향후 Stripe/토스 페이먼츠로 연결될 예정입니다.\n' + session.checkoutUrl);
  };

  return (
    <Button type="button" variant="primary" className="w-full md:w-auto" onClick={handleClick}>
      구매하기
    </Button>
  );
};
