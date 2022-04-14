import { Header } from '../header';
import { customRender as render } from '../../../utils/tests/render';
import { cleanup } from '@testing-library/react';

describe('<Header />', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it('renderMessage function returns empty string if we get "OK" response', () => {
    const gameState = {
      map: [],
      message: '',
      connectionStatus: 'offline',
    };

    const wrapper = render(Header, gameState);
    expect(wrapper.getByTestId('show-message-paragraph')).toHaveTextContent('');
  });
  it('renderMessage functions returns parametar message', () => {
    const gameState = {
      map: [],
      message: 'Hello',
      connectionStatus: 'offline',
    };
    const wrapper = render(Header, gameState);
    expect(wrapper.getByTestId('show-message-paragraph')).toHaveTextContent(
      'Hello'
    );
  });
});
