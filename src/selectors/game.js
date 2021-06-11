import { createSelector } from 'reselect';

import calculateWinner from '../helpers/calculateWinner';

export const getHistory = state => state.game.history;
export const getStepNumber = state => state.game.stepNumber;
export const getXIsNext = state => state.game.xIsNext;
export const getCurrent = createSelector(
  [getHistory, getStepNumber],
  (history, stepNumber) => {
    return history[stepNumber];
  }
);
export const getWinner = createSelector(
  [getCurrent],
  current => calculateWinner(current.squares)
);
