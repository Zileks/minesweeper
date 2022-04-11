import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

export const useStyles = makeStyles({
  headText: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  layout: {
    position: 'fixed',
    background: 'white',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    overflowY: 'scroll',
    width: '100%',
    height: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flex: 2,
  },
  content: {
    flex: 5,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    margin: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    justifyContent: 'center',
    alignContent: 'center',
  },
  smallContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    margin: '1% 0',
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  startButton: {
    minWidth: '150px !important',
  },
  levelSelector: {
    maxWidth: '150px !important',
    marginBottom: '15px !important',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
});

export const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});
