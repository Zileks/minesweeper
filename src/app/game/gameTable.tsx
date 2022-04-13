import { GameService } from '../services/gameService';
import { useStyles } from './gameTableStyles';
import {
  OPEN_WEBSOCKET_KEY,
  SQUARE_SYMBOL,
  MAP_SIZE_SMALL,
  BOMB_SYMBOL,
  FAILURE_COLOR,
  SUCCESS_COLOR,
} from '../../utils/constants/constants';
import classNames from 'classnames';

interface Props {
  gameFlag: number[][];
  onChange: Function;
  gameState: any;
}

export function GameTable({ gameFlag, onChange, gameState }: Props) {
  const classes = useStyles();

  const gameTableActiveCellClassNames = classNames({
    [`${classes.activeCell}`]: gameState.map.length <= MAP_SIZE_SMALL,
    [`${classes.smallActiveCell}`]: gameState.map.length > MAP_SIZE_SMALL,
  });

  const gameTableTextClassNames = classNames({
    [`${classes.text}`]: gameState.map.length <= MAP_SIZE_SMALL,
    [`${classes.smallText}`]: gameState.map.length > MAP_SIZE_SMALL,
  });

  const gameTableCellClassNames = classNames({
    [`${classes.cell}`]: gameState.map.length <= MAP_SIZE_SMALL,
    [`${classes.smallCell}`]: gameState.map.length > MAP_SIZE_SMALL,
  });

  const gameTableFlagClassNames = classNames({
    [`${classes.flag}`]: gameState.map.length <= MAP_SIZE_SMALL,
    [`${classes.smallFlag}`]: gameState.map.length > MAP_SIZE_SMALL,
  });

  const onCellClick = (y: number, x: number) => {
    GameService.socket.send(`${OPEN_WEBSOCKET_KEY} ${x} ${y}`);
  };

  function isArrayInArray(source: number[][], search: number[]) {
    for (let i = 0, len = source.length; i < len; i++) {
      if (source[i][0] === search[0] && source[i][1] === search[1]) {
        return true;
      }
    }
    return false;
  }

  const renderMap = (items: any) => {
    return items.map((item: any, rowIndex: number) => {
      const squares = item.split('');
      const row = squares.map((square: any, columnIndex: number) => {
        const key = `square-${rowIndex}-${columnIndex}`;

        const location: number[] = [rowIndex, columnIndex];

        const isFlagSet = isArrayInArray(gameFlag, location);
        if (square !== `${SQUARE_SYMBOL}`) {
          return (
            <div
              style={{
                color:
                  square === `${BOMB_SYMBOL}`
                    ? `${FAILURE_COLOR}`
                    : `${SUCCESS_COLOR}`,
              }}
              onClick={() => onCellClick(rowIndex, columnIndex)}
              className={gameTableActiveCellClassNames}
              key={key}
            >
              <p className={gameTableTextClassNames}>
                {square === '0' ? '' : square}
              </p>
            </div>
          );
        }
        return (
          <div
            style={{
              color:
                square === `${BOMB_SYMBOL}`
                  ? `${FAILURE_COLOR}`
                  : `${SUCCESS_COLOR}`,
            }}
            onClick={() => {
              if (!isFlagSet) {
                onCellClick(rowIndex, columnIndex);
              }
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              if (isArrayInArray(gameFlag, location)) {
                const newArr = gameFlag.filter(
                  (field) =>
                    field[0] !== location[0] || field[1] !== location[1]
                );
                onChange(newArr);
              } else {
                onChange([...gameFlag, location]);
              }
            }}
            className={gameTableCellClassNames}
            key={key}
          >
            {isFlagSet && gameState.message !== 'You lose' && (
              <span className={gameTableFlagClassNames}>🚩</span>
            )}
          </div>
        );
      });
      return (
        <div className={classes.row} key={`square-row-${rowIndex}`}>
          {row}
        </div>
      );
    });
  };

  if (!gameState.map.length) {
    return <p data-testid='empty-map-paragraph'>Pick your level to start</p>;
  }

  return <>{renderMap(gameState.map)}</>;
}
