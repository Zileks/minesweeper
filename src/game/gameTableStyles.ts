import { makeStyles } from '@mui/styles';

export const useGameTableStyles = makeStyles({
  cell: {
    width: '50px !important',
    height: '50px !important',
    border: '1px solid rgb(243,243,243)',
    borderRadius: '0px !important',
  },
  smallCell: {
    width: '17px !important',
    height: '17px !important',
    border: '1px solid rgb(243,243,243)',
    borderRadius: '0px !important',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  smallActiveCell: {
    width: '50px !important',
    height: '50px !important',
    border: '1px solid rgb(243,243,243)',
    borderRadius: '0px !important',
    backgroundColor: 'wheat',
  },
  activeCell: {
    width: '17px !important',
    height: '17px !important',
    border: '1px solid rgb(243,243,243)',
    borderRadius: '0px !important',
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
