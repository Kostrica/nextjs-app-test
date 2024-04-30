'use client';

import { useGame } from '@/app/lib/game-context';
import GameInfoItem from './game-info-item';
import { Squares, Move } from '@/app/lib/types';

export default function GameInfo() {
  const game: any = useGame();
  const history = game.history;

  return (
    <div className="pl-6 pt-6">
      <ol>
        {history.map((_: Squares, move: Move) => (
          <li key={move.toString()}>
            <GameInfoItem move={move} />
          </li>
        ))}
      </ol>
    </div>
  );
}
