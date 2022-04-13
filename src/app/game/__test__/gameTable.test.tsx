import { render } from '@testing-library/react';
import { GameTable } from '../gameTable';
import { LOADED_MAP } from '../../../utils/constants/constants';

describe('<GameTable />', () => {
  it('renders with empty map', () => {
    const gameMap: string[] = [];
    const gameFlag: number[][] = [];
    const gameFunction = () => {};
    const wrapper = render(
      <GameTable
        gameMap={gameMap}
        gameFlag={gameFlag}
        onChange={gameFunction}
      />
    );
    expect(wrapper.getByTestId('empty-map-paragraph')).toHaveTextContent(
      'Pick your level to start'
    );
  });
  it('renders with map', () => {
    const gameMap: string[] = LOADED_MAP;
    const gameFlag: number[][] = [];
    const gameFunction = () => {};
    const wrapper = render(
      <GameTable
        gameMap={gameMap}
        gameFlag={gameFlag}
        onChange={gameFunction}
      />
    );
    expect(wrapper).toBeTruthy;
  });
});
