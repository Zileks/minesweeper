import { GameClient } from '../api/api';
import { useGameTableStyles } from './gameTableStyles';
import {
  OPEN_WEBSOCKET,
  SQUARE_SYMBOL,
  MAP_SIZE_SMALL,
  BOMB_SYMBOL,
  FAILURE_COLOR,
  SUCCESS_COLOR,
} from '../constants';
import classNames from 'classnames';

interface Props {
  gameMap: string[];
}

export function GameTable({ gameMap }: Props) {
  const classes = useGameTableStyles();

  const gameTableActiveCellClassNames = classNames({
    [`${classes.smallActiveCell}`]: gameMap.length <= MAP_SIZE_SMALL,
    [`${classes.activeCell}`]: gameMap.length > MAP_SIZE_SMALL,
  });

  const gameTableTextClassNames = classNames({
    [`${classes.smalltext}`]: gameMap.length <= MAP_SIZE_SMALL,
    [`${classes.text}`]: gameMap.length > MAP_SIZE_SMALL,
  });

  const gameTableCellClassNames = classNames({
    [`${classes.cell}`]: gameMap.length <= MAP_SIZE_SMALL,
    [`${classes.smallCell}`]: gameMap.length > MAP_SIZE_SMALL,
  });

  const onCellClick = (y: number, x: number) => {
    GameClient.socket.send(`${OPEN_WEBSOCKET} ${x} ${y}`);
  };

  const renderMap = (items: any) => {
    return items.map((item: any, rowIndex: number) => {
      const squares = item.split('');
      const row = squares.map((square: any, columnIndex: number) => {
        const key = `square-${rowIndex}-${columnIndex}`;
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
              <p className={gameTableTextClassNames}>{square}</p>
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
            onClick={() => onCellClick(rowIndex, columnIndex)}
            className={gameTableCellClassNames}
            key={key}
          ></div>
        );
      });
      return (
        <div className={classes.row} key={`square-row-${rowIndex}`}>
          {row}
        </div>
      );
    });
  };

  if (!gameMap.length) {
    return <p>Pick your level to start</p>;
  }

  return <>{renderMap(gameMap)}</>;
}
