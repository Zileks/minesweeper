import { Header } from '../header';
import { customRender as render } from '../../../utils/tests/render';
import { cleanup } from '@testing-library/react';

describe('<Header />', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it('renderMessage function returns empty string if we get "OK" response', () => {
    const wrapper = render(<Header gameMessage={''} />);
    expect(wrapper.getByTestId('show-message-paragraph')).toHaveTextContent('');
  });
  it('renderMessage functions returns parametar message', () => {
    const wrapper = render(<Header gameMessage='test' />);
    expect(wrapper.getByTestId('show-message-paragraph')).toHaveTextContent(
      'test'
    );
  });
});
