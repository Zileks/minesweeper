import { makeStyles } from '@mui/styles';

// ne treba da postoji important ovde
export const useStyles = makeStyles({
  footer: {
    margin: '1% 0',
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  levelSelector: {
    maxWidth: '150px ',
    marginBottom: '15px !important',
  },
  startButton: {
    minWidth: '150px !important',
  },
});
