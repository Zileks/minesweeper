import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createGame, initialiazeGame } from '../game/gameSlice';
import { RootState } from '../store/store';

import './app.css';

function App() {
  const dispatch = useDispatch();
  const [level, setLevel] = useState(1);
  const gameState = useSelector((state: RootState) => state.game);
  console.log(gameState);
  useEffect(() => {
    dispatch(initialiazeGame());
  }, []);
  const onPlayGame = () => {
    dispatch(createGame(`new ${level}`));
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className='App-link'
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux-toolkit.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className='App-link'
            href='https://react-redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React Redux
          </a>
          <button onClick={onPlayGame}>Go!</button>
        </span>
      </header>
    </div>
  );
}

export default App;
