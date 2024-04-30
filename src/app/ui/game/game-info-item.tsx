'use client';

import { useGameDispatch } from '@/app/lib/game-context';
import { GameInfoItemProps } from '@/app/lib/types';

export default function GameInfoItem({ move }: GameInfoItemProps) {
  const dispatch: any = useGameDispatch();
  let description;

  if (move > 0) {
    description = 'Go to move #' + move;
  } else {
    description = 'Go to game start';
  }

  return (
    <button
      onClick={() => {
        dispatch({
          type: 'moved',
          nextMove: move,
        });
      }}
    >
      {description}
    </button>
  );
}
