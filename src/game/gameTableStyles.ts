import { makeStyles } from '@mui/styles';

// bez important
export const useGameTableStyles = makeStyles({
  cell: {
    width: '50px ',
    height: '50px ',
    border: '1px solid rgb(243,243,243)',
    borderRadius: '0px ',
  },
  smallCell: {
    width: '17px ',
    height: '17px ',
    border: '1px solid rgb(243,243,243)',
    borderRadius: '0px ',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  smallActiveCell: {
    width: '50px ',
    height: '50px ',
    border: '1px solid rgb(243,243,243)',
    borderRadius: '0px ',
    backgroundColor: 'wheat',
  },
  activeCell: {
    width: '17px ',
    height: '17px ',
    border: '1px solid rgb(243,243,243)',
    borderRadius: '0px ',
    backgroundColor: 'wheat',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 0,
    fontSize: '12px',
  },
  smalltext: {
    fontWeight: 'bold',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignData: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
