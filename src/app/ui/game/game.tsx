'use client';

import GameBoard from './game-board';
import GameInfo from './game-info';
import { GameProvider } from '@/app/lib/game-context';
import { lusitana } from '../fonts';

export default function Game() {
  return (
    <div className={`${lusitana.className} game flex flex-col md:flex-row pt-10`}>
      <GameProvider>
        <GameBoard />
        <GameInfo />
      </GameProvider>
    </div>
  );
}
