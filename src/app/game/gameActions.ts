import { take, put, call, apply, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { GameService } from '../services/gameService';
import { setMap, updateMessage } from './gameSlice';
import {
  MAP_WEBSOCKET_KEY,
  NEW_WEBSOCKET_KEY,
  OPEN_WEBSOCKET_KEY,
} from '../../utils/constants/constants';

function createSocketChannel(socket: any) {
  return eventChannel((emit) => {
    const handleOnMessage = (event: any) => {
      emit(event.data);
    };

    const errorHandler = (errorEvent: any) => {
      emit(new Error(errorEvent?.reason || 'UKNOWN'));
    };

    socket.addEventListener('message', handleOnMessage);
    socket.addEventListener('error', errorHandler);

    const unsubscribe = () => {
      socket.removeEventListener('message', handleOnMessage);
    };

    return unsubscribe;
  });
}

function* getMap(socket: any) {
  yield apply(socket, socket.send, [`${MAP_WEBSOCKET_KEY}`]);
}

export function* handleCreateGame(action: any) {
  yield apply(GameService.socket, GameService.socket.send, [action.payload]);
}

export function* watchOnGame(): any {
  const socket: any = yield call(GameService.createConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  function* getMapAndUpdateMessage(data: string) {
    yield fork(getMap, socket);
    yield put(updateMessage(data.split(`${OPEN_WEBSOCKET_KEY}: `)[1]));
  }

  while (true) {
    try {
      const data = yield take(socketChannel);

      if (data.includes(`${MAP_WEBSOCKET_KEY}:`)) {
        yield put(setMap(data));
      }
      if (data.includes(`${NEW_WEBSOCKET_KEY}:`)) {
        yield getMapAndUpdateMessage(data);
      }
      if (data.includes(`${OPEN_WEBSOCKET_KEY}:`)) {
        yield getMapAndUpdateMessage(data);
      }
    } catch (err) {
      console.error('socket error:', err);
      socketChannel.close();
    }
  }
}
