import App from '../app';
import { cleanup } from '@testing-library/react';
import { customRender as render } from '../../utils/tests/render';

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it('renders without crashing', () => {
    render(<App />);
  });
  it('offline status indicator if we are not connected', () => {
    const wrapper = render(<App />);
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

    const wrapper = render(<App />, initialState);
    expect(wrapper.getByTestId('connection-span')).toHaveTextContent('online');
  });
});
