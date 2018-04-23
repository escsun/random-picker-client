import * as WinnerConstants from '../constants/winner';

export const winnerSetTarget = (payload) => {
  return {
    type: WinnerConstants.WINNER_SET_TARGET,
    payload: payload
  }
};

export const winnerReset = (payload) => {
  return {
    type: WinnerConstants.WINNER_RESET,
    payload: payload
  }
};

export const winnerGetUser = (payload) => {
  return {
    type: WinnerConstants.WINNER_GET_USER,
    payload: payload
  }
};
