import type { DetailedHTMLProps, LabelHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

type LabelProps = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & {
  children: ReactNode;
};

export function Label({ className, children, ...props }: LabelProps) {
  return (
    <label className={clsx('text-sm font-medium text-black/80', className)} {...props}>
      {children}
    </label>
  );
}
