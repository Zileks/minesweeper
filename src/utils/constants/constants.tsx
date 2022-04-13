export const MAP_SIZE_SMALL: number = 10;
export const OPEN_WEBSOCKET_KEY: string = 'open';
export const MAP_WEBSOCKET_KEY: string = 'map';
export const NEW_WEBSOCKET_KEY: string = 'new';
export const SQUARE_SYMBOL: string = '□';
export const BOMB_SYMBOL: string = '*';
export const SUCCESS_COLOR: string = 'green';
export const FAILURE_COLOR: string = 'red';
export const LOADED_MAP: string[] = [
  '□□□□□□□□□□',
  '□□□□□□□□□□',
  '□□□□□□□□□□',
  '□□□□□□□□□□',
  '□□□□□□□□□□',
  '□□□□□□□□□□',
  '□□□□□□□□□□',
  '□□□□□□□□□□',
  '□□□□□□□□□□',
  '□□□□□□□□□□',
];
export enum CONNECTION_STATUS {
  ONLINE = 'online',
  OFFLINE = 'offline',
}
