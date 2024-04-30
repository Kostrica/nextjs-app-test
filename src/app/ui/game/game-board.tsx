'use client';

import { useGame, useGameDispatch } from '@/app/lib/game-context';
import Square from './square';
import { Cell, Squares, Move, Victory } from '@/app/lib/types';

export default function GameBoard() {
  const game: any = useGame();
  const dispatch: any = useGameDispatch();
  const xIsNext = game.currentMove % 2 === 0;
  const currentSquares = game.history[game.currentMove];

  function handleClick(move: Move) {
    if (calculateVictory(currentSquares) || currentSquares[move].value) {
      return;
    }

    let nextSquares = [...currentSquares.slice()];

    if (xIsNext) {
      nextSquares[move] = {
        ...nextSquares[move],
        value: 'X',
      };
    } else {
      nextSquares[move] = {
        ...nextSquares[move],
        value: 'O',
      };
    }

    const victory = calculateVictory(nextSquares);

    if (victory) {
      const { winningLine }: Victory = victory;
      const copyNextSquares = [...nextSquares.slice()];
      nextSquares = copyNextSquares.map((cell: Cell, index: number) => {
        const winningCell = winningLine.some((item: number) => index === item);

        if (winningCell) {
          return {
            ...cell,
            winning: true,
          };
        }

        return {
          ...cell,
        };
      });
    }

    dispatch({
      type: 'added',
      nextSquares: nextSquares,
    });
  }

  const victory = calculateVictory(currentSquares);
  const gameOver = currentSquares.every(({ value }: Cell) => value);
  let status;

  if (victory) {
    const { winner }: Victory = victory;

    status = 'Winner: ' + winner + '!';
  } else if (gameOver) {
    status = 'Dead heat!';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className="status pb-1">{status}</div>
      <div className="game-board grid grid-rows-3 grid-cols-3">
        {currentSquares.map((cell: Cell, move: Move) => (
          <Square
            key={move.toString()}
            cell={cell}
            onSquareClick={() => handleClick(move)}
          />
        ))}
      </div>
    </div>
  );
}

function calculateVictory(squares: Squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let victory = null;

  lines.forEach((line) => {
    const [a, b, c] = line;

    if (
      squares[a].value &&
      squares[a].value === squares[b].value &&
      squares[a].value === squares[c].value
    ) {
      victory = {
        winner: squares[a].value,
        winningLine: line,
      };
    }
  });

  return victory;
}
