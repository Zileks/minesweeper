import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

// ne treba da postoji important ovde
export const useStyles = makeStyles({
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
});

export const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});
