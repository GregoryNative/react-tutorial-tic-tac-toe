import { SET_STATE_TYPE, JUMP_TO_TYPE } from '../actions/game';

const initialValues = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  xIsNext: true
};

export default function gameReducer(state = initialValues, action) {
  switch (action.type) {
    case SET_STATE_TYPE:
      return {
        ...state,
        history: action.history.concat([
          {
            squares: action.squares
          }
        ]),
        stepNumber: action.history.length,
        xIsNext: !state.xIsNext
      };
    case JUMP_TO_TYPE:
      return {
        ...state,
        stepNumber: action.step,
        xIsNext: action.step % 2 === 0
      };
    default:
      return state;
  }
}
