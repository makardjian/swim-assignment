import { makeStyles } from '@mui/styles';
import Colors from './styles/Colors';

const solitude = Colors.background['@solitude'];

const useStyles = makeStyles({
  appRoot: {
    background: solitude,
    minHeight: '100vh',
    // minWidth: '950px',
    // justifyContent: 'center',
    // display: 'flex',
  },
  appContentContainer: {
    // display: 'flex',
    flexDirection: 'column',
  },
});

export default useStyles;
