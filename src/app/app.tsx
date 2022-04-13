import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { initialiazeGame } from './game/gameSlice';
import { RootState } from './store/store';
import { useStyles } from './styles';
import { GameTable } from './game/gameTable';
import {
  MAP_SIZE_SMALL,
  CONNECTION_STATUS,
} from '../utils/constants/constants';
import { Header } from './common/header';
import { Footer } from './common/footer';
import classNames from 'classnames';

function App() {
  const classes = useStyles();

  const gameState = useSelector((state: RootState) => state.game);

  const [flag, setFlag] = useState<number[][]>([]);

  const handleChange = (newValue: []) => {
    setFlag(newValue);
  };

  const dispatch = useDispatch();

  const appContentClassNames = classNames({
    [`${classes.content} ${classes.smallContent}`]:
      gameState.map.length <= MAP_SIZE_SMALL,
    [`${classes.content}`]: gameState.map.length > MAP_SIZE_SMALL,
  });
  const connectionStatusClassNames = classNames({
    [`${classes.statusIcon} ${classes.online}`]:
      gameState.connectionStatus === CONNECTION_STATUS.ONLINE,
    [`${classes.statusIcon} ${classes.offline}`]:
      gameState.connectionStatus === CONNECTION_STATUS.OFFLINE,
  });

  useEffect(() => {
    dispatch(initialiazeGame(CONNECTION_STATUS.ONLINE));
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.layout}>
          <Paper elevation={2} className={classes.container}>
            <div className={classes.connectionStatus}>
              <span className={connectionStatusClassNames}></span>
              <span
                className={classes.connectionStatusText}
                data-testid='connection-span'
              >
                {gameState.connectionStatus}
              </span>
            </div>
            <Header gameState={gameState} />
            <div className={appContentClassNames}>
              <GameTable
                gameFlag={flag}
                onChange={handleChange}
                gameState={gameState}
              />
            </div>
            <Footer gameState={gameState} onChange={handleChange} />
          </Paper>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
