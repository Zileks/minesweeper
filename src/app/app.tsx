import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Paper,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createGame, initialiazeGame } from '../game/gameSlice';
import { RootState } from '../store/store';
import { useStyles } from './styles';
import './styles.ts';
import { GameTable } from '../game/gameTable';

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [level, setLevel] = useState(1);
  const gameState = useSelector((state: RootState) => state.game);
  console.log(gameState);
  useEffect(() => {
    dispatch(initialiazeGame());
  }, []);
  const onPlayGame = () => {
    dispatch(createGame(`new ${level}`));
    dispatch(initialiazeGame());
  };
  const handleOnLevelChange = (event: SelectChangeEvent) => {
    const newLevel = Number(event?.target?.value);
    setLevel(newLevel);
  };

  console.log(gameState.map.length);

  const renderMessage = (message: string) => {
    return message !== 'OK' ? message : '';
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.layout}>
          <Paper elevation={2} className={classes.container}>
            <div className={classes.header}>
              <p className={classes.headText}>Minesweeper</p>
              <p className={classes.message}>
                {renderMessage(gameState.message)}
              </p>
            </div>
            <div
              className={
                gameState.map.length <= 10
                  ? `${classes.content} ${classes.smallContent}`
                  : classes.content
              }
            >
              <GameTable gameMap={gameState.map} />
            </div>
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
          </Paper>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
