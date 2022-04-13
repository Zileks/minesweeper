import { Footer } from '../footer';
import { cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { Render } from '../../../utils/tests/render';
import { LOADED_MAP } from '../../../utils/constants/constants';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('<Footer />', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it('Button has "start" text on first render', () => {
    const initialState = {
      game: {
        map: [],
        message: '',
        connectionStatus: 'offline',
      },
    };
    const store = mockStore(initialState);
    const wrapper = Render(store, Footer, initialState.game);

    expect(wrapper.getByTestId('start-game-btn')).toHaveTextContent('Start');
  });
  it('Button has "play again" text if the initialState is not empty', () => {
    const initialState = {
      game: {
        map: LOADED_MAP,
        message: '',
        connectionStatus: 'offline',
      },
    };

    const store = mockStore(initialState);
    const wrapper = Render(store, Footer, initialState.game);
    expect(wrapper.getByTestId('start-game-btn')).toHaveTextContent(
      'Play again'
    );
  });
});
