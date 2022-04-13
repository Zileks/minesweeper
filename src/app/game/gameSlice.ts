import { createSlice } from '@reduxjs/toolkit';
import * as types from './gameTypes';
import { MAP_WEBSOCKET_KEY } from '../../utils/constants/constants';

function convertMapPayload(payload: any): string[] {
  const rowList = payload.split(`${MAP_WEBSOCKET_KEY}:`)[1].split('\n');
  return rowList.filter((item: string[]) => !!item.length);
}

const initialState: types.GameState = {
  map: [],
  message: '',
  connectionStatus: 'offline',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initialiazeGame(state, action) {
      state.connectionStatus = action.payload;
    },
    createGame(state, action) {},
    getMap(state) {},
    setMap(state, action) {
      state.map = convertMapPayload(action.payload);
    },
    updateMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const { initialiazeGame, getMap, setMap, createGame, updateMessage } =
  gameSlice.actions;

export default gameSlice.reducer;
