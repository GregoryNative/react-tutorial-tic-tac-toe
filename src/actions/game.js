export const SET_STATE_TYPE = '@game/SET_STATE_TYPE';
export const JUMP_TO_TYPE = '@game/JUMP_TO_TYPE';

export const setState = ({ history, squares }) => ({
  type: SET_STATE_TYPE,
  history,
  squares
});

export const jumpTo = step => ({
  type: JUMP_TO_TYPE,
  step
});
