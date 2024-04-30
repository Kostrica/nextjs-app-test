'use client';

import { SquareProps } from '@/app/lib/types';

export default function Square({ cell, onSquareClick }: SquareProps) {
  const { value, winning } = cell;
  let className =
    'square w-14 h-14 text-xl font-semibold border border-solid border-black';

  if (winning) {
    className = className + ' bg-slate-50 text-red-500';
  } else {
    className = className + ' bg-white';
  }

  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}
