import { takeLatest } from 'redux-saga/effects';
import { watchOnGame, handleCreateGame } from '../../game/gameActions';
import { createGame, initialiazeGame } from '../../game/gameSlice';

export function* watcherSaga() {
  yield takeLatest(initialiazeGame.type, watchOnGame);
  yield takeLatest(createGame.type, handleCreateGame);
}
