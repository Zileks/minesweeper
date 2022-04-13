import App from '../app';
import { cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../store/sagas/rootSaga';
import { Render } from '../../utils/tests/render';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it('renders without crashing', () => {
    const initialState = {
      game: {
        map: [],
        message: '',
      },
    };
    const store = mockStore(initialState);
    sagaMiddleware.run(watcherSaga);

    Render(store, App);
  });
});
