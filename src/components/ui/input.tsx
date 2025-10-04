import { forwardRef } from 'react';
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={clsx(
        'w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm text-black shadow-sm transition hover:border-black/40 focus-visible:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20',
        className
      )}
      {...props}
    />
  );
});
