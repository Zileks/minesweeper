import { createSlice } from '@reduxjs/toolkit';
import * as types from './gameTypes';

function convertMapPayload(payload: any): string[] {
  const rowList = payload.split('map:')[1].split('\n');
  return rowList.filter((item: string[]) => !!item.length);
}

const initialState: types.GameState = {
  map: [],
  message: '',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initialiazeGame(state) {},
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
