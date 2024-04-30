'use client';

import { HeaderProps } from '@/app/lib/types';
import { lusitana } from './fonts';

export default function Header({ title }: HeaderProps) {
  return (
    <h1 className={`${lusitana.className} text-2xl font-bold`}>
      {title ? title : 'Default title'}
    </h1>
  );
}
