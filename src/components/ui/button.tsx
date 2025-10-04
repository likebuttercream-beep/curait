import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { clsx } from 'clsx';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: 'default' | 'primary' | 'ghost';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'default', ...props },
  ref
) {
  const base =
    'inline-flex items-center justify-center rounded-2xl border border-black/10 px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black';
  const variants: Record<typeof variant, string> = {
    default: 'bg-white text-black hover:bg-black/5 shadow-sm',
    primary: 'bg-black text-white hover:bg-black/90 border-black shadow-md',
    ghost: 'bg-transparent border-transparent text-black hover:bg-black/5'
  } as const;

  return <button ref={ref} className={clsx(base, variants[variant], className)} {...props} />;
});
