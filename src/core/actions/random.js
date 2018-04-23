import * as RandomConstants from '../constants/random';

export const getRandomNumber = (min, max, n = 1) => {
  return {
    type: RandomConstants.RANDOM_GET_RANDOM_NUMBER,
    payload: {
      min: min,
      max: max,
      n: n
    }
  };
};

export const getRandomNumberSuccess = (payload) => {
  return {
    type: RandomConstants.RANDOM_GET_RANDOM_NUMBER_SUCCESS,
    payload: payload
  };
};

export const getRandomNumberFailure = (payload) => {
  return {
    type: RandomConstants.RANDOM_GET_RANDOM_NUMBER_FAILURE,
    payload: payload
  };
};
