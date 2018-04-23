import * as SocketConstants from '../constants/socket';

export const runSocketChannel = (payload) => {
  return {
    type: SocketConstants.RUN_SOCKET_CHANNEL,
    payload: payload
  };
};

export const stopSocketChannel = (payload) => {
  return {
    type: SocketConstants.STOP_SOCKET_CHANNEL,
    payload: payload
  };
};

export const socketMessageReceived = (payload) => {
  return {
    type: SocketConstants.SOCKET_MESSAGE_RECEIVED,
    payload: payload
  };
};
