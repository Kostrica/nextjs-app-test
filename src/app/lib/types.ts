export interface HeaderProps {
  title: string | undefined
};

export interface Cell {
  value: null | string,
  winning: boolean
};

export type Squares = Cell[];

export type Move = number;

export interface Game {
  history: Squares,
  currentMove: Move
};

export interface SquareProps {
  cell: Cell,
  onSquareClick: any
};

export interface GameInfoItemProps {
  move: Move
};

export interface Action {
  type: string,
  nextSquares?: Squares,
  nextMove?: Move
};

export interface Victory {
  winner: Cell,
  winningLine: number[]
};
