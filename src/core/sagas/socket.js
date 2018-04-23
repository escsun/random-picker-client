import {eventChannel} from 'redux-saga';
import {call, take, put, fork, cancel, select} from 'redux-saga/effects';
import * as SocketActions from '../actions/socket';
import * as SocketConstants from '../constants/socket';
import * as UserSelector from "../selectors/users";
import * as WinnerSelector from "../selectors/winner";
import contains from "../../utils/contains";
import userNormalize from "../../utils/userNormalize";

function websocketMessagesEventChannel() {
  return eventChannel(emitter => {
    const ws = new WebSocket('ws://localhost:8888');
    ws.onmessage = (event) => {
      const payload = event.data;
      return emitter(SocketActions.socketMessageReceived(payload));
    };
    return () => {
      ws.close();
    };
  });
}

function* websocketMessagesEventChannelSaga() {
  const channel = yield call(websocketMessagesEventChannel);
  while (true) {
    const action = yield take(channel);
    // Получаем users из хранилища
    const users = yield select(UserSelector.getUsers);
    // Получаем target из хранилище
    const target = yield select(WinnerSelector.getTarget);
    // Получаем сообщение из сокета
    const item = action.payload;
    // Нормализируем данные участников
    const data = userNormalize(item);
    // Если сообщение равняется ключевой цели проверяем на уникальность
    if (data['text'] === target) {
      // Если item нет в хранилище users, то добавляем его
      if (!contains(users, item)) {
        yield put(action);
      }
    }
    // Если ключевое слово пустое, то добавляем любое сообщение
    if (target === '') {
      yield put(action);
    }
  }
}

export function* websocketSaga() {
  while (yield take(SocketConstants.RUN_SOCKET_CHANNEL)) {
    const websocketChannelTask = yield fork(websocketMessagesEventChannelSaga);
    yield take(SocketConstants.STOP_SOCKET_CHANNEL);
    yield cancel(websocketChannelTask);
  }
}
