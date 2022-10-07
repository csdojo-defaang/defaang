import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function Container({ className, ...props }: props) {
  return <div className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)} {...props} />;
}
