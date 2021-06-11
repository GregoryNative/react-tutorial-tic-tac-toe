import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Board from './Board';

import {
  setState,
  jumpTo as jumpToAction,
} from '../actions/game';
import {
  getCurrent,
  getHistory,
  getStepNumber,
  getWinner,
  getXIsNext
} from '../selectors/game';
import calculateWinner from '../helpers/calculateWinner';

function Game() {
  const dispatch = useDispatch();

  const history = useSelector(getHistory);
  const current = useSelector(getCurrent);
  const winner = useSelector(getWinner);
  const stepNumber = useSelector(getStepNumber);
  const xIsNext = useSelector(getXIsNext);

  const handleClick = i => {
    const nextHistory = history.slice(0, stepNumber + 1);
    const nextCurrent = nextHistory[nextHistory.length - 1];
    const nextSquares = nextCurrent.squares.slice();

    if (calculateWinner(nextSquares) || nextSquares[i]) {
      return;
    }

    nextSquares[i] = xIsNext ? 'X' : 'O';

    dispatch(setState({
      history: nextHistory,
      squares: nextSquares
    }));
  };

  const jumpTo = step => {
    dispatch(jumpToAction(step));
  };

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={i => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
