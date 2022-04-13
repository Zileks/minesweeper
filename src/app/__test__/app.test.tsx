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
        connectionStatus: 'offline',
      },
    };
    const store = mockStore(initialState);
    sagaMiddleware.run(watcherSaga);

    Render(store, App);
  });
  it('offline status indicator if we are not connected', () => {
    const initialState = {
      game: {
        map: [],
        message: '',
        connectionStatus: 'offline',
      },
    };

    const store = mockStore(initialState);
    const wrapper = Render(store, App);
    expect(wrapper.getByTestId('connection-span')).toHaveTextContent('offline');
  });
  it('online status indicator if we are connected', () => {
    const initialState = {
      game: {
        map: [],
        message: '',
        connectionStatus: 'online',
      },
    };

    const store = mockStore(initialState);
    const wrapper = Render(store, App);
    expect(wrapper.getByTestId('connection-span')).toHaveTextContent('online');
  });
});
