import * as SocketConstants from '../constants/socket';

const initialState = {
  status: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SocketConstants.RUN_SOCKET_CHANNEL:
      return {
        ...state, status: true
      };
    case SocketConstants.STOP_SOCKET_CHANNEL:
      return {
        ...state, status: false
      };
    default:
      return state;
  }
};

export default usersReducer;
