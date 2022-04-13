import { Header } from '../header';
import { Render } from '../../../utils/tests/render';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { cleanup } from '@testing-library/react';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('<Header />', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it('renderMessage function returns empty string if we get "OK" response', () => {
    const gameState = {
      map: [],
      message: '',
    };
    const store = mockStore(gameState);
    const wrapper = Render(store, Header, gameState);
    expect(wrapper.getByTestId('show-message-paragraph')).toHaveTextContent('');
  });
  it('renderMessage functions returns parametar message', () => {
    const gameState = {
      map: [],
      message: 'Hello',
    };
    const store = mockStore(gameState);
    const wrapper = Render(store, Header, gameState);
    expect(wrapper.getByTestId('show-message-paragraph')).toHaveTextContent(
      'Hello'
    );
  });
});
