import * as UserConstants from '../constants/users';
import * as SocketConstants from '../constants/socket';

const initialState = {
  data: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserConstants.USER_ADD:
    case SocketConstants.SOCKET_MESSAGE_RECEIVED:
      return {
        ...state, data: [...state.data, action.payload]
      };
    case UserConstants.USER_RESET:
      return {
        ...state, data: []
      };
    default:
      return state;
  }
};

export default usersReducer;
