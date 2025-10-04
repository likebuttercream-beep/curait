export const cn = (...classes: Array<string | undefined | null | false>) =>
  classes.filter(Boolean).join(' ');

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 0 }).format(value);

export const formatDiscountedPrice = (price: number, discount?: number) => {
  if (!discount) return price;
  return Math.round(price * (1 - discount / 100));
};
