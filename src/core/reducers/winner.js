import * as WinnerConstants from '../constants/winner';
import * as RandomConstants from '../constants/random';

const initialState = {
  target: '',
  winner: null,
};

const winnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case WinnerConstants.WINNER_GET_USER:
    case RandomConstants.RANDOM_GET_RANDOM_NUMBER_SUCCESS:
      return {
        ...state, winner: action.payload
      };
    case WinnerConstants.WINNER_RESET:
      return {
        ...state, winner: null
      };
    case WinnerConstants.WINNER_SET_TARGET:
      return {
        ...state, target: action.payload
      };
    default:
      return state;
  }
};

export default winnerReducer;
