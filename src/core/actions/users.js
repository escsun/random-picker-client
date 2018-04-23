import * as UserConstants from '../constants/users';

export const userAdd = (payload) => {
  return {
    type: UserConstants.USER_ADD,
    payload: payload
  };
};

export const userReset = (payload) => {
  return {
    type: UserConstants.USER_RESET,
    payload: payload
  };
};

