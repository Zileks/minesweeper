import React from 'react';
import { GameClient } from '../api/api';
import { useGameTableStyles } from './gameTableStyles';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
interface Props {
  gameMap: string[];
}

export function GameTable({ gameMap }: Props) {
  const classes = useGameTableStyles();
  console.log(gameMap.length);
  const onCellClick = (y: number, x: number) => {
    GameClient.socket.send(`open ${x} ${y}`);
  };

  const renderMap = (items: any) => {
    return items.map((item: any, rowIndex: number) => {
      const squares = item.split('');
      const row = squares.map((square: any, columnIndex: number) => {
        const key = `square-${rowIndex}-${columnIndex}`;
        const testId = `square-${rowIndex}-${columnIndex}`;
        if (square !== '□') {
          return (
            <div
              style={{ color: square === '*' ? 'red' : 'green' }}
              onClick={() => onCellClick(rowIndex, columnIndex)}
              className={
                gameMap.length <= 10
                  ? classes.smallActiveCell
                  : classes.activeCell
              }
              key={key}
            >
              <p
                className={
                  gameMap.length <= 10 ? classes.smalltext : classes.text
                }
              >
                {square}
              </p>
            </div>
          );
        }
        return (
          <div
            style={{ color: square === '*' ? 'red' : 'green' }}
            onClick={() => onCellClick(rowIndex, columnIndex)}
            key={key}
            className={gameMap.length <= 10 ? classes.cell : classes.smallCell}
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
    return <p>hehe</p>;
  }

  return <>{renderMap(gameMap)}</>;
}
