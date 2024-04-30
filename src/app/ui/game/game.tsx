'use client';

import GameBoard from './game-board';
import GameInfo from './game-info';
import { GameProvider } from '@/app/lib/game-context';
import { lusitana } from '../fonts';

export default function Game() {
  return (
    <div className={`${lusitana.className} game flex flex-row`}>
      <GameProvider>
        <GameBoard />
        <GameInfo />
      </GameProvider>
    </div>
  );
}
