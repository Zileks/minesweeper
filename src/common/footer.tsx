import { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { createGame, initialiazeGame } from '../game/gameSlice';
import { NEW_WEBSOCKET } from '../constants';
import { useStyles } from './footerStyle';

interface Props {
  gameState: any;
}

export function Footer({ gameState }: Props) {
  const [level, setLevel] = useState(1);
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(gameState.map.length);
  const onPlayGame = () => {
    dispatch(createGame(`${NEW_WEBSOCKET} ${level}`));
    dispatch(initialiazeGame());
  };

  const handleOnLevelChange = (event: SelectChangeEvent) => {
    const newLevel = Number(event?.target?.value);
    setLevel(newLevel);
  };

  return (
    <div className={classes.footer}>
      <FormControl
        fullWidth
        className={classes.levelSelector}
        color='success'
        sx={{ textAlign: 'center' }}
      >
        <InputLabel id='level-select-label'>Level</InputLabel>
        <Select
          labelId='level-select-label'
          id='level-select'
          value={`${level}`}
          label='Level'
          onChange={handleOnLevelChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
      <Button
        onClick={onPlayGame}
        variant='contained'
        color='success'
        className={classes.startButton}
        data-testid='start-game-btn'
      >
        {gameState.map.length ? 'Play again' : 'Start'}
      </Button>
    </div>
  );
}
