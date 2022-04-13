import { render } from '@testing-library/react';
import { GameTable } from '../gameTable';
import { LOADED_MAP } from '../../../utils/constants/constants';

describe('<GameTable />', () => {
  it('renders with empty map', () => {
    const gameState = {
      map: [],
      message: '',
      connectionStatus: 'offline',
    };
    const gameFlag: number[][] = [];
    const gameFunction = () => {};
    const wrapper = render(
      <GameTable
        gameState={gameState}
        gameFlag={gameFlag}
        onChange={gameFunction}
      />
    );
    expect(wrapper.getByTestId('empty-map-paragraph')).toHaveTextContent(
      'Pick your level to start'
    );
  });
  it('renders with map', () => {
    const gameState = {
      map: LOADED_MAP,
      message: '',
      connectionStatus: 'offline',
    };
    const gameFlag: number[][] = [];
    const gameFunction = () => {};
    const wrapper = render(
      <GameTable
        gameState={gameState}
        gameFlag={gameFlag}
        onChange={gameFunction}
      />
    );
    expect(wrapper).toBeTruthy;
  });
});
