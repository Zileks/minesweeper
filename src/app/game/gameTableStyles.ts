import { makeStyles } from '@mui/styles';

// bez important
export const useStyles = makeStyles({
  cell: {
    width: '50px ',
    height: '50px ',
    border: '1px solid rgb(243,243,243)',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
  },

  smallCell: {
    width: '17px ',
    height: '17px ',
    border: '1px solid rgb(243,243,243)',
    borderRadius: '0px ',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  activeCell: {
    width: '50px ',
    height: '50px ',
    border: '1px solid rgb(243,243,243)',
    borderRadius: '0px ',
    backgroundColor: 'wheat',
  },
  smallActiveCell: {
    width: '17px ',
    height: '17px ',
    border: '1px solid rgb(243,243,243)',
    borderRadius: '0px ',
    backgroundColor: 'wheat',
  },

  smallText: {
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 0,
    fontSize: '12px',
  },
  text: {
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
  flag: {
    marginTop: '10px',
  },
  smallFlag: {
    fontSize: '14px',
  },
});
