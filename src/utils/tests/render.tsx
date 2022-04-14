import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../../app/store/sagas/rootSaga';
import { ReactNode } from 'react';
import { GameState } from '../../app/game/gameTypes';

interface initialState {
  game: GameState;
}

export function customRender(
  Component: ReactNode,
  initialState: initialState = {
    game: {
      map: [],
      message: '',
      connectionStatus: 'offline',
    },
  }
) {
  const sagaMiddleware = createSagaMiddleware();
  const mockStore = configureStore([sagaMiddleware]);
  const store = mockStore(initialState);
  sagaMiddleware.run(watcherSaga);
  return render(<Provider store={store}>{Component}</Provider>);
}
