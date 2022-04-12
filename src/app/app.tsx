import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { initialiazeGame } from '../game/gameSlice';
import { RootState } from '../store/store';
import { useStyles } from './styles';
import { GameTable } from '../game/gameTable';
import { MAP_SIZE_SMALL } from '../constants';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import classNames from 'classnames';

function App() {
  const classes = useStyles();
  const gameState = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const appContentClassNames = classNames({
    [`${classes.content} ${classes.smallContent}`]:
      gameState.map.length <= MAP_SIZE_SMALL,
    [`${classes.content}`]: gameState.map.length > MAP_SIZE_SMALL,
  });

  useEffect(() => {
    dispatch(initialiazeGame());
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.layout}>
          <Paper elevation={2} className={classes.container}>
            <Header gameState={gameState} />
            <div className={appContentClassNames}>
              <GameTable gameMap={gameState.map} />
            </div>
            <Footer gameState={gameState} />
          </Paper>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
