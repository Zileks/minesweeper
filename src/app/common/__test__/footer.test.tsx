import { Footer } from '../footer';
import { cleanup } from '@testing-library/react';
import { customRender as render } from '../../../utils/tests/render';
import { LOADED_MAP } from '../../../utils/constants/constants';

describe('<Footer />', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it('Button has "start" text on first render', () => {
    const wrapper = render(<Footer gameMap={[]} onChange={jest.fn()} />);

    expect(wrapper.getByTestId('start-game-btn')).toHaveTextContent('Start');
  });
  it('Button has "play again" text if the initialState is not empty', () => {
    const wrapper = render(
      <Footer gameMap={LOADED_MAP} onChange={jest.fn()} />
    );
    expect(wrapper.getByTestId('start-game-btn')).toHaveTextContent(
      'Play again'
    );
  });
});
