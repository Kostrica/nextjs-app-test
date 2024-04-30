import { createContext, useContext, useReducer } from 'react';
import { Game, Action } from './types';

const GameContext = createContext<null | Game>(null);
const GameDispatchContext = createContext(null);

export function GameProvider({ children }: any) {
  const [game, dispatch]: [Game, any] = useReducer(gameReducer, initialGame);

  return (
    <GameContext.Provider value={game}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}

export function useGameDispatch() {
  return useContext(GameDispatchContext);
}

function gameReducer(game: Game, action: any | Action) {
  switch (action.type) {
    case 'added': {
      const { nextSquares } = action;
      const nextHistory = [
        ...game.history.slice(0, game.currentMove + 1),
        nextSquares,
      ];

      return {
        ...game,
        history: nextHistory,
        currentMove: nextHistory.length - 1,
      };
    }
    case 'moved': {
      const { nextMove: currentMove } = action;
      return {
        ...game,
        currentMove,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const cell = {
  value: null,
  winning: false,
};

const initialGame = {
  history: [Array(9).fill(cell)],
  currentMove: 0,
};
